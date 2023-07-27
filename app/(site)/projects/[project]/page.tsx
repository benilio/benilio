import { getProject } from '@/sanity/utils'
import { PortableText } from '@portabletext/react'
import styles from '@/site/styles.module.css'
import Image from 'next/image'
import { getImageDimensions } from '@app/utils/ImageDimensions'

type Props = {
  params: {
    project: string
  }
}

type imgDimensions = {
  width: number
  height: number
}

const Project = async ({ params }: Props) => {
  const slug = params.project
  const project = await getProject(slug)
  let imageWidth: number[] = []
  let imageHeight: number[] = []

  for (let i = 0; i < project.galleryId?.length; i++) {
    const { width, height }: imgDimensions = getImageDimensions(
      project.galleryId[i],
    )!

    imageWidth.push(width)
    imageHeight.push(height)
  }

  // console.log(project.contributions[0].children)

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.pp_title}>{project.title}</h1>
        <h2 className={styles.pp_team}>{project.team}</h2>
        <p className={styles.pp_detail}>{project.detail}</p>
      </section>

      <section className={`${styles.section} ${styles.pp_description}`}>
        <div className='flex-1'>
          <h3 className={styles.pp_heading}>Overview</h3>
          <PortableText value={project.overview} />
        </div>
        <div className='flex-1'>
          <h3 className={styles.pp_heading}>Contributions</h3>
          <PortableText value={project.contributions} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.pp_gallery}>
          {project.gallery?.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={project.galleryAlt[index]}
              width={imageWidth[index]}
              height={imageHeight[index]}
              sizes='100vw'
              quality={90}
              className={styles.pp_image}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Project
