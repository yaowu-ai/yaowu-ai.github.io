import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>lysmata</h1>
          <p>A focused project page for the lysmata source code.</p>
          <Link href="#overview" className="cta-button">
            View Overview
          </Link>
        </div>
      </section>

      <section id="overview">
        <div className="container">
          <h2>Overview</h2>
          <p>
            This site is the homepage for <code>lysmata</code>, deployed with Next.js
            static export and GitHub Pages.
          </p>
          <p>
            The repository keeps source code only. GitHub Actions builds and publishes the
            generated static files automatically.
          </p>
        </div>
      </section>

      <section id="highlights">
        <div className="container">
          <h2>Highlights</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Source-Only Repository</h3>
              <p>No build artifacts are committed. The workflow creates and deploys them.</p>
            </div>
            <div className="feature-card">
              <h3>GitHub Pages Ready</h3>
              <p>Compatible with user site deployment at <code>yaowu-ai.github.io</code>.</p>
            </div>
            <div className="feature-card">
              <h3>Simple Landing Page</h3>
              <p>One clear homepage to introduce the project and guide users to resources.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="links">
        <div className="container">
          <h2>Links</h2>
          <p>
            Update these links to match your actual repository and docs destinations.
          </p>
          <ul className="plain-links">
            <li>
              <a href="https://github.com/yaowu-ai/lysmata">lysmata Repository</a>
            </li>
            <li>
              <a href="https://yaowu-ai.github.io">Project Homepage</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}