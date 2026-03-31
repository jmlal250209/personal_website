"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { courses, Course } from "@/app/lib/courses";

export default function CoursesSection() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  const close = useCallback(() => setActiveCourse(null), []);

  useEffect(() => {
    if (!activeCourse) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeCourse, close]);

  return (
    <>
      <div className="cards">
        {courses.map((course) => (
          <button
            key={course.id}
            className="card card-clickable"
            onClick={() => setActiveCourse(course)}
            aria-label={`View details for ${course.title}`}
          >
            <div className="card-inner">
              <h3>
                {course.title}
                <span className="chip chip-status">{course.status}</span>
              </h3>
              <p>{course.shortDesc}</p>
              <div className="card-footer">
                {course.tags.map((tag) => (
                  <span key={tag} className="chip chip-accent">
                    {tag}
                  </span>
                ))}
                <span className="chip chip-outline">View details →</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeCourse && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={activeCourse.title}
        >
          <div className="modal">
            {/* Clickable banner → detail page */}
            <Link
              href={`/courses/${activeCourse.id}`}
              className="modal-banner"
              style={{ background: activeCourse.gradient }}
              aria-label={`Open full details for ${activeCourse.title}`}
            >
              {activeCourse.imageSrc ? (
                <img
                  src={activeCourse.imageSrc}
                  alt={activeCourse.title}
                  className="modal-banner-img"
                />
              ) : (
                <div className="modal-banner-placeholder">
                  <span className="modal-banner-initial">
                    {activeCourse.title
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
              )}
              <div className="modal-banner-overlay">
                <span className="modal-banner-cta">View Full Details →</span>
              </div>
            </Link>

            {/* Close button */}
            <button className="modal-close" onClick={close} aria-label="Close">
              ✕
            </button>

            {/* Content */}
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{activeCourse.title}</h2>
                <span className="chip chip-status">{activeCourse.status}</span>
              </div>

              <p className="modal-desc">{activeCourse.longDesc}</p>

              <div className="modal-section">
                <div className="modal-section-label">What you&apos;ll learn</div>
                <ul className="modal-highlights">
                  {activeCourse.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <div className="modal-section-label">Topics</div>
                <div className="modal-tags">
                  {activeCourse.tags.map((tag) => (
                    <span key={tag} className="chip chip-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                <a
                  href={activeCourse.courseraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Coursera →
                </a>
                {activeCourse.notesUrl && (
                  <a
                    href={activeCourse.notesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    My Notes →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
