"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { projects, Project } from "@/app/lib/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const close = useCallback(() => setActiveProject(null), []);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProject, close]);

  return (
    <>
      <div className="cards">
        {projects.map((project) => (
          <button
            key={project.id}
            className="card card-clickable"
            onClick={() => setActiveProject(project)}
            aria-label={`View details for ${project.title}`}
          >
            <div className="card-inner">
              <h3>
                {project.title}
                {project.status && (
                  <span className="chip chip-status">{project.status}</span>
                )}
              </h3>
              <p>{project.shortDesc}</p>
              <div className="card-footer">
                {project.tags.map((tag) => (
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
      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
        >
          <div className="modal">
            {/* Clickable banner — navigates to detail page */}
            <Link
              href={`/projects/${activeProject.id}`}
              className="modal-banner"
              style={{ background: activeProject.gradient }}
              aria-label={`Open full details for ${activeProject.title}`}
            >
              {activeProject.imageSrc ? (
                <img
                  src={activeProject.imageSrc}
                  alt={activeProject.title}
                  className="modal-banner-img"
                />
              ) : (
                <div className="modal-banner-placeholder">
                  <span className="modal-banner-initial">
                    {activeProject.title
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
              )}
              {/* Hover overlay */}
              <div className="modal-banner-overlay">
                <span className="modal-banner-cta">View Full Details →</span>
              </div>
            </Link>

            {/* Close button */}
            <button
              className="modal-close"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Content */}
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{activeProject.title}</h2>
                {activeProject.status && (
                  <span className="chip chip-status">{activeProject.status}</span>
                )}
              </div>

              <p className="modal-desc">{activeProject.longDesc}</p>

              <div className="modal-section">
                <div className="modal-section-label">Highlights</div>
                <ul className="modal-highlights">
                  {activeProject.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <div className="modal-section-label">Tech Stack</div>
                <div className="modal-tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="chip chip-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {activeProject.links.length > 0 && (
                <div className="modal-links">
                  {activeProject.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn ${link.primary ? "btn-primary" : "btn-outline"}`}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
