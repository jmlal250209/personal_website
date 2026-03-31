import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById, projects } from "@/app/lib/projects";
import ScreenshotsGallery from "@/app/components/ScreenshotsGallery";

export async function generateStaticParams() {
  return projects.filter((p) => !p.hideDetailPage).map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return {
    title: `${project.title} | Jiaming Liu`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <>
      {/* Nav */}
      <nav>
        <Link href="/" className="nav-logo">
          JL<span>.</span>
        </Link>
        <ul className="nav-links">
          <li><a href="/#about">About</a></li>
          <li><a href="/#learning">Learning</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#skills">Skills</a></li>
        </ul>
      </nav>

      {/* Hero banner */}
      <div className="detail-hero" style={{ background: project.gradient }}>
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.title}
            className="detail-hero-img"
          />
        ) : (
          <span className="detail-hero-initial">{initials}</span>
        )}
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <Link href="/#projects" className="detail-back">
            ← Back to projects
          </Link>
          <h1 className="detail-hero-title">{project.title}</h1>
          {project.status && (
            <span className="chip chip-status">{project.status}</span>
          )}
        </div>
      </div>

      <div className="detail-container">

        {/* Overview */}
        <section className="detail-section">
          <div className="detail-section-label">{project.overviewLabel ?? "Overview"}</div>
          <p className="detail-text">{project.longDesc}</p>
        </section>

        {/* Highlights */}
        <section className="detail-section">
          <div className="detail-section-label">Highlights</div>
          <ul className="detail-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>

        {/* Demo */}
        {project.demoUrl && (
          <section className="detail-section">
            <div className="detail-section-label">Demo</div>
            <div className="detail-video-wrapper">
              <iframe
                src={project.demoUrl}
                title={`${project.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-label">Screenshots</div>
            <ScreenshotsGallery screenshots={project.screenshots} />
          </section>
        )}

        {/* Future Plans */}
        {project.futurePlans && (
          <section className="detail-section">
            <div className="detail-section-label">What&apos;s Next</div>
            <ul className="detail-highlights">
              {project.futurePlans.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        <section className="detail-section">
          <div className="detail-section-label">Tech Stack</div>
          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span key={tag} className={`chip ${tag === "Hackathon" ? "chip-hackathon" : "chip-accent"}`}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="detail-section">
          <div className="detail-section-label">What I Learned</div>
          {project.learnedPoints ? (
            <>
              {project.learnedIntro && (
                <p className="detail-text" style={{ marginBottom: "14px" }}>
                  {project.learnedIntro}
                </p>
              )}
              <ul className="detail-highlights">
                {project.learnedPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="detail-text detail-text-placeholder">
              Reflections coming soon — check back later.
            </p>
          )}
        </section>

        {/* Links */}
        {project.links.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-label">Links</div>
            <div className="detail-links">
              {project.links.map((link) => (
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
          </section>
        )}

      </div>

      <footer>
        © 2026 Jiaming Liu &nbsp;·&nbsp;
        <a href="mailto:liu20@tcd.ie" style={{ color: "inherit", textDecoration: "none" }}>
          liu20@tcd.ie
        </a>
        &nbsp;·&nbsp;
        <a
          href="https://github.com/JMLal250209"
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          GitHub
        </a>
      </footer>
    </>
  );
}
