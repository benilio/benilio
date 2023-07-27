import { CgMouse } from 'react-icons/cg'

import styles from '@/site/styles.module.css'

const Hero = () => {
  return (
    <section className={`${styles.hero_section} ${styles.section_width}`}>
      <div className={styles.hero_main}>
        <div>
          <h1 className={styles.hero_heading}>
            <span className={styles.hero_text_start}>
              Benício Oliveira is a
            </span>
            Designer &{' '}
            <span className={styles.hero_text_detail}>
              (in progress, self-taught)
            </span>{' '}
            <span className={styles.hero_block}>Frontend Developer</span>
          </h1>

          <p className={styles.hero_subheading}>
            He’s a curious person, self-driven, passionate about knowledge and
            human interactions. Big time cat lover and amateur cooker.
          </p>
        </div>
      </div>
      <div className={styles.hero_footer}>
        <CgMouse />
        <span className={styles.hero_scroll}>scroll for more</span>
      </div>
    </section>
  )
}

export default Hero
