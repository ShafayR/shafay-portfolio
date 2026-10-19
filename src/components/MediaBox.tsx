import type { Media } from '../content'

export function MediaBox({ media, className = '' }: { media: Media; className?: string }) {
  return (
    <figure className={`media ${media.wide ? 'media--wide' : ''} ${className}`}>
      <img src={media.src} alt={media.alt} loading="lazy" />
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  )
}
