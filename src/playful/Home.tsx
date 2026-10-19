import type { CSSProperties } from 'react'
import { experience, otherWork, profile, projects } from '../content'
import { Link } from '../components/router'
import { MediaBox } from '../components/MediaBox'

// Pick dark or light text for a coloured background.
export function textOn(hex: string) {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return lum > 0.22 ? '#1e1a2e' : '#ffffff'
}

export function PlHeader() {
  return (
    <header className="pl-header">
      <Link href="/" className="pl-logo" aria-label={`${profile.name}, home`}>
        SR
      </Link>
      <nav aria-label="Main">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact" className="pl-header__cta">
          Say hi
        </Link>
      </nav>
    </header>
  )
}

export function PlFooter() {
  return (
    <footer className="pl-contact" id="contact">
      <div className="pl-contact__panel">
        <h2>Got something to design and build?</h2>
        <p>Open to internships and freelance work.</p>
        <a className="pl-btn pl-btn--big" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="pl-contact__links">
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile.cv && (
            <a href={profile.cv} target="_blank" rel="noreferrer">
              Download CV
            </a>
          )}
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  )
}

const heroLines = [
  { text: 'I design it.', color: '#FF4F9A' },
  { text: 'I build it.', color: '#FFC531' },
  { text: 'I test it with real people.', color: '#00A88F' },
]

export function PlayfulHome() {
  return (
    <div className="pl">
      <PlHeader />
      <main>
        <section className="pl-hero">
          <p className="pl-hero__hello">Hi, I'm {profile.shortName}</p>
          <h1 className="pl-hero__title" aria-label="I design it. I build it. I test it with real people.">
            {heroLines.map((l, i) => (
              <span
                key={l.text}
                className="pl-hero__line"
                aria-hidden="true"
                style={{ '--c': l.color, '--fg': textOn(l.color), '--i': i } as CSSProperties}
              >
                {l.text}
              </span>
            ))}
          </h1>
          <p className="pl-hero__intro">{profile.intro}</p>
        </section>

        <section className="pl-work" id="work" aria-labelledby="pl-work-title">
          <h2 className="pl-title" id="pl-work-title">
            Things I've made
          </h2>
          <ul className="pl-cards">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className={`pl-card ${p.cover ? '' : 'pl-card--solo'}`}
                  style={{ '--c': p.color, '--fg': textOn(p.color) } as CSSProperties}
                >
                  <div className="pl-card__text">
                    <div className="pl-card__top">
                      <span>{p.org}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="pl-card__title">{p.title}</h3>
                    <p className="pl-card__summary">{p.summary}</p>
                    <ul className="pl-tags">
                      {p.status && <li className="pl-tag pl-tag--status">{p.status}</li>}
                      {p.tools.slice(0, 4).map((t) => (
                        <li className="pl-tag" key={t}>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="pl-btn">View project</span>
                  </div>
                  {p.cover && <MediaBox media={p.cover} className="pl-card__img" />}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pl-notes">
            <h3 className="pl-notes__title">Also on my desk</h3>
            {otherWork.map((w, i) => (
              <div className="pl-note" key={w.title} style={{ '--r': i % 2 ? '1.5deg' : '-1.5deg' } as CSSProperties}>
                <strong>{w.title}</strong>
                <p>{w.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pl-about" id="about" aria-labelledby="pl-about-title">
          <h2 className="pl-title" id="pl-about-title">
            A bit about me
          </h2>
          <div className="pl-about__grid">
            <div className="pl-bubble">
              {profile.bio.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <div className="pl-about__side">
              <div className="pl-box">
                <h3>Where I've been</h3>
                <ul className="pl-exp">
                  {experience.map((e) => (
                    <li key={e.role}>
                      <strong>{e.role}</strong>
                      <span>
                        {e.org}, {e.dates}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pl-skills">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div className="pl-skills__group" key={group}>
                <h3>{group}</h3>
                <ul className="pl-tags">
                  {items.map((s) => (
                    <li className="pl-tag" key={s}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <PlFooter />
    </div>
  )
}
