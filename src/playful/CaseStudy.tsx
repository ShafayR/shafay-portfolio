import type { CSSProperties } from 'react'
import { projects, type Project } from '../content'
import { Link } from '../components/router'
import { MediaBox } from '../components/MediaBox'
import { PlFooter, PlHeader, textOn } from './Home'

export function PlayfulCase({ project: p }: { project: Project }) {
  const i = projects.findIndex((x) => x.slug === p.slug)
  const next = projects[(i + 1) % projects.length]
  const vars = { '--c': p.color, '--fg': textOn(p.color) } as CSSProperties

  return (
    <div className="pl" style={vars}>
      <PlHeader />
      <main>
        <article>
          <header className="pl-case-head">
            <Link href="/#work" className="pl-back">
              Back to all work
            </Link>
            <h1>{p.title}</h1>
            <p className="pl-case-head__summary">{p.summary}</p>
            <ul className="pl-case-meta">
              <li>
                <span>Role</span>
                {p.role}
              </li>
              <li>
                <span>With</span>
                {p.org}
              </li>
              <li>
                <span>Year</span>
                {p.year}
              </li>
              {p.link && (
                <li>
                  <span>Live</span>
                  <a href={p.link.href} target="_blank" rel="noreferrer">
                    {p.link.label}
                  </a>
                </li>
              )}
            </ul>
            <ul className="pl-tags">
              {p.tools.map((t) => (
                <li className="pl-tag" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </header>

          {p.cover && <MediaBox media={p.cover} className="pl-case-cover" />}

          <div className="pl-case-sections">
            {p.sections.map((s) => (
              <section className="pl-case-section" key={s.heading}>
                <h2>{s.heading}</h2>
                <div className="pl-case-section__text">
                  {s.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                  {s.points && (
                    <ul className="pl-points">
                      {s.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {s.media && (
                  <div className="pl-media-grid">
                    {s.media.map((m) => (
                      <MediaBox key={m.src} media={m} />
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>

        <Link
          href={`/work/${next.slug}`}
          className="pl-next"
          style={{ '--c': next.color, '--fg': textOn(next.color) } as CSSProperties}
        >
          <span>Up next</span>
          <strong>{next.title}</strong>
        </Link>
      </main>
      <PlFooter />
    </div>
  )
}
