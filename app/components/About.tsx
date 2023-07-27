import Link from 'next/link'
import Image from 'next/image'
import styles from '@/site/styles.module.css'
import { FaLinkedin, FaBehance, FaGithub, FaCodepen } from 'react-icons/fa'

import MyImage from '@/assets/mod.jpg'

const About = () => {
  return (
    <section
      id='about'
      className={`${styles.header_skipper} ${styles.section_width}`}
    >
      <h2 className={styles.section_heading}>About Me</h2>
      <div className={styles.about_container}>
        <div className={styles.about_left}>
          <div className={styles.about_paragraph_spacing}>
            <p className={styles.about_paragraph}>
              As a child I was very curious in understanding how things worked
              and <i>"how they were"</i>, I always had a million questions going
              on my mind. So it went from <i>"how does a clock work?"</i> to{' '}
              <i>
                "how do people that speaks different languages than us
                understands us?"
              </i>{' '}
              to the famous <i>"where do we come from? where do we go?"</i>.
            </p>
            <p className={styles.about_paragraph}>
              This need for understanding the world moved me to tinker with
              every broken thing that came into my way and trying to understand
              what other people were thinking that would cause then to act a
              certain way or do something or not.
            </p>
            <p className={styles.about_paragraph}>
              With this mindset, I pursued design as a way to connect with
              people and find the answers to my questions, learning and
              researching are my driving fuels to achieve my goals, always. I
              look forward for being part of collaborative environments and
              exchanging knowledge and experiences with other people!
            </p>
          </div>
        </div>
        <div className={styles.about_right}>
          <div className={styles.about_motto}>
            {/*<Image src={MyImage} alt='my alt text' />*/}
            <p className={styles.about_motto_kr}>내일 아무도 몰라요</p>
            <p className={styles.about_motto_en}>No one knows tomorrow</p>

          </div>
          <div className={styles.about_links}>
            <Link
              href='https://br.linkedin.com/in/ben%C3%ADcio-oliveira-458158135/'
              title='LinkedIn'
              passHref={true}
              className={styles.about_link}
            >
              <FaLinkedin />
            </Link>
            <Link
              href='https://www.behance.net/benilio/'
              title='Behance'
              passHref={true}
              className={styles.about_link}
            >
              <FaBehance />
            </Link>
            <Link
              href='https://github.com/benilio/'
              title='GitHub'
              passHref={true}
              className={styles.about_link}
            >
              <FaGithub />
            </Link>
            <Link
              href='https://codepen.io/beniliov/'
              title='CodePen'
              passHref={true}
              className={styles.about_link}
            >
              <FaCodepen />
            </Link>
            <a
              href='/BenicioOliveira_Resume.pdf'
              className={styles.about_resume}
              // download={`BenicioOliveira_Resume`}
              title='resume'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
