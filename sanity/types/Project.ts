import { PortableTextBlock } from 'sanity'

export type Project = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  url: string
  cover: string
  alt: string
  team: string
  detail: string
  overview: PortableTextBlock[]
  contributions: PortableTextBlock[]
  gallery: string[]
  galleryAlt: string[]
  galleryId: string[]
}
