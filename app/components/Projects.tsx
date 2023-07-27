import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '@/sanity/utils'
import styles from '@/site/styles.module.css'

const Projects = async () => {
  const projects = await getProjects()

  return (
    <section
      id='projects'
      className={`${styles.header_skipper} ${styles.section_width}`}
    >
      <h2 className={styles.section_heading}>Featured Projects</h2>

      <div className={styles.projects_container}>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className={styles.project_container}
            key={project._id}
          >
            <Image
              src={project.cover}
              alt={project.alt}
              width='1601'
              height='1068'
              className='object-cover'
            />
            <div className={styles.project_container__gradient}></div>
            <div className={styles.project_container__background}></div>
            <h3 className={styles.project_heading}>{project.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
