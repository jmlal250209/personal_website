"use client";

import { useState, useEffect, useCallback } from "react";

interface Screenshot {
  src: string;
  caption: string;
}

export default function ScreenshotsGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : null));
  }, [screenshots.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % screenshots.length : null));
  }, [screenshots.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <div className="detail-screenshots-grid">
        {screenshots.map((s, i) => (
          <figure key={i} className="detail-screenshot-figure">
            <button
              className="detail-screenshot-btn"
              onClick={() => setActiveIndex(i)}
              aria-label={`View ${s.caption}`}
            >
              <img src={s.src} alt={s.caption} className="detail-screenshot-img" />
              <div className="detail-screenshot-hover">
                <span>View full size</span>
              </div>
            </button>
            <figcaption className="detail-screenshot-caption">{s.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>

          <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Previous">‹</button>

          <div className="lightbox-content">
            <img
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].caption}
              className="lightbox-img"
            />
            <p className="lightbox-caption">
              {screenshots[activeIndex].caption}
              <span className="lightbox-counter">{activeIndex + 1} / {screenshots.length}</span>
            </p>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
