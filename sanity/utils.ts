import clientConfig from './client.config'
import { createClient, groq } from 'next-sanity'
import { Project } from '@/sanity/types/Project'

export const getProjects = async (): Promise<Project[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type=="project"] | order(sortOrder) {
      _id,
      _createdAt,
      sortOrder,
      title,
      'slug': slug.current,
      url,
      'cover': cover.asset->url,
      'alt': cover.alt,
    }`,
  )
}

export const getProject = async (slug: string): Promise<Project> => {
  return createClient(clientConfig).fetch(
    groq`*[_type=='project' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      url,
      team,
      detail,
      'cover': cover.asset->url,
      'alt': cover.alt,
      overview,
      contributions,
      'gallery': gallery[].asset->url,
      'galleryAlt': gallery[].alt,
      'galleryId': gallery[].asset->_id,
    }`,
    { slug },
  )
}
