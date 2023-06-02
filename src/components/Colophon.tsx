import Link from 'next/link'
import styles from '@/app/[locale]/styles.module.css'
import { useTranslations } from 'next-intl'

const Colophon = () => {
  const t = useTranslations('Colophon')

  return (
    <section
      id='colophon'
      className={styles.section}
    >
      <h2 className={styles.section_heading}>{t('title')}</h2>
      <div className='grid grid-flow-row grid-cols-3'>
        <div>
          <h3 className={styles.colophon_heading}>{t('fonts')}</h3>
          <ul>
            <li>
              <Link
                href='https://fonts.google.com/specimen/Manrope'
                passHref={true}
              >
                Manrope
              </Link>
            </li>
            <li>
              <Link
                href='https://fonts.google.com/specimen/Unbounded'
                passHref={true}
              >
                Unbounded
              </Link>
            </li>
            <li>
              <Link
                href='https://dirtylinestudio.com/product/dirtyline-36daysoftype-2022/'
                passHref={true}
              >
                Dirtyline 36Daysoftype 2022
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.colophon_heading}>{t('icons')}</h3>
          <ul>
            <li>
              <Link
                href='https://fontawesome.com/'
                passHref={true}
              >
                Font Awesome
              </Link>
            </li>
            <li>
              <Link
                href='https://css.gg/'
                passHref={true}
              >
                css.gg
              </Link>
            </li>
            <li>
              <Link
                href='https://hatscripts.github.io/circle-flags/'
                passHref={true}
              >
                circle-flags
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.colophon_heading}>{t('technology')}</h3>
          <ul>
            <li>
              <Link
                href='https://nextjs.org/'
                passHref={true}
              >
                Next.js
              </Link>
            </li>
            <li>
              <Link
                href='https://tailwindcss.com/'
                passHref={true}
              >
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                href='https://vercel.com/'
                passHref={true}
              >
                Vercel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Colophon
