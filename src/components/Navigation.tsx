'use client'

import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { CircleFlag } from 'react-circle-flags'
import { CgMail } from 'react-icons/cg'
import styles from '@/app/[locale]/styles.module.css'

const NavigationMenu = () => {
  const t = useTranslations('NavigationMenu')
  const pathname = usePathname()
  const pathHome = pathname === '/'

  const scrollTo = (e: any) => {
    const element = e.target.getAttribute('href')
    const elementId = document.getElementById(element)

    if (pathHome === true) {
      e.preventDefault()
    }

    setTimeout(() => {
      if (elementId) {
        if (elementId !== null) {
          elementId.scrollIntoView({
            behavior: 'smooth',
          })
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  let currentLocale = t('locale') === 'en'

  return (
    <nav className={styles.navigation}>
      <Link
        href='/'
        className={styles.navigation__logo}
        onClick={scrollTo}
      >
        benilio.
      </Link>
      <ul className={styles.navigation__items}>
        <li>
          <Link
            href='projects'
            className={styles.navigation__item}
            scroll={false}
            onClick={scrollTo}
          >
            {t('projects')}
          </Link>
        </li>
        <li>
          <Link
            href='about'
            className={styles.navigation__item}
            scroll={false}
            onClick={scrollTo}
          >
            {t('about')}
          </Link>
        </li>
        <li>
          <a
            href={`/BenicioOliveira_${t('resume.file')}.pdf`}
            className={styles.navigation__item}
            // download={`BenicioOliveira_${t('resume.file')}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('resume.title')}
          </a>
        </li>
      </ul>
      <ul className={styles.navigation__plus}>
        <li>
          <Link
            href='mailto:benilio129@gmail.com?Subject=👋 Hey, there!'
            passHref={true}
            className='text-2xl p-4 rounded-full bg-gray-500 flex'
          >
            <CgMail />
          </Link>
        </li>
        <ul className={styles.navigation__locale}>
          <li
            className={currentLocale ? '' : styles.navigation__locale__inactive}
          >
            <Link
              href={pathname}
              locale='en'
            >
              <CircleFlag
                countryCode='us'
                height='24'
                className='h-6'
              />
            </Link>
          </li>
          <li
            className={currentLocale ? styles.navigation__locale__inactive : ''}
          >
            <Link
              href={pathname}
              locale='pt'
            >
              <CircleFlag
                countryCode='br'
                height='24'
                className='h-6'
              />
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default NavigationMenu
