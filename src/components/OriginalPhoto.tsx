import { photos } from '@/data/photography'

type Props = { name: string; alt: string; priority?: boolean; sizes?: string }

/** All responsive sources belong to this site's independently commissioned image set. */
export function OriginalPhoto({ name, alt, priority = false, sizes = '(max-width: 680px) 88vw, 90vw' }: Props) {
  const photo = photos[name]
  if (!photo) throw new Error(`Missing commissioned photograph: ${name}`)
  return <img
    src={photo.src}
    srcSet={photo.srcSet}
    sizes={sizes}
    width={photo.width}
    height={photo.height}
    alt={alt}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
    decoding="async"
    data-photo={name}
  />
}
