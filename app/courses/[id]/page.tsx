import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseById, courses } from "@/app/lib/courses";

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) return {};
  return {
    title: `${course.title} | Jiaming Liu`,
    description: course.shortDesc,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) notFound();

  const initials = course.title
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
      <div className="detail-hero" style={{ background: course.gradient }}>
        {course.imageSrc ? (
          <img src={course.imageSrc} alt={course.title} className="detail-hero-img" />
        ) : (
          <span className="detail-hero-initial">{initials}</span>
        )}
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <Link href="/#learning" className="detail-back">
            ← Back to learning
          </Link>
          <h1 className="detail-hero-title">{course.title}</h1>
          <span className="chip chip-status">{course.status}</span>
        </div>
      </div>

      <div className="detail-container">

        {/* Overview */}
        <section className="detail-section">
          <div className="detail-section-label">Overview</div>
          <p className="detail-text">{course.longDesc}</p>
        </section>

        {/* Topics */}
        <section className="detail-section">
          <div className="detail-section-label">Topics Covered</div>
          <ul className="detail-highlights">
            {course.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>

        {/* What I Learned */}
        <section className="detail-section">
          <div className="detail-section-label">What I Learned</div>
          <p className="detail-text detail-text-placeholder">
            {course.learned ?? "Still in progress — notes and reflections coming soon."}
          </p>
        </section>

        {/* Certificate */}
        <section className="detail-section">
          <div className="detail-section-label">Certificate</div>
          <div className="detail-screenshot-placeholder">
            Certificate coming soon
          </div>
        </section>

        {/* Tech Stack */}
        <section className="detail-section">
          <div className="detail-section-label">Topics</div>
          <div className="detail-tags">
            {course.tags.map((tag) => (
              <span key={tag} className="chip chip-accent">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="detail-section">
          <div className="detail-section-label">Links</div>
          <div className="detail-links">
            <a
              href={course.courseraUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Coursera →
            </a>
            {course.notesUrl ? (
              <a
                href={course.notesUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                My Notes →
              </a>
            ) : (
              <span className="btn btn-outline detail-btn-disabled">
                Notes coming soon
              </span>
            )}
          </div>
        </section>

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
