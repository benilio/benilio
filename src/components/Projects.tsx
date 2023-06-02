import Image from 'next/image'
import styles from '@/app/[locale]/styles.module.css'
import { useTranslations } from 'next-intl'

import geologicalCover from '@/assets/projects/geological/cover.webp'

const Projects = () => {
  const t = useTranslations('Projects')

  return (
    <section
      id='projects'
      className={styles.section}
    >
      <h2 className={styles.section_heading}>{t('title')}</h2>

      <div className='grid grid-cols-10 grid-flow-row'>
        <div className={styles.project_container}>
          <Image
            src={geologicalCover}
            alt='computer with software screen'
          />
          <div className={styles.project_container__gradient}></div>
          <div className={styles.project_container__background}></div>
          <h3 className={styles.project_heading}>{t('geological')}</h3>
        </div>
      </div>
    </section>
  )
}

export default Projects
