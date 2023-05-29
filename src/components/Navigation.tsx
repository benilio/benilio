'use client'

import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { CircleFlag } from 'react-circle-flags'
import { CgMail } from 'react-icons/cg'
import styles from '@/app/[locale]/styles.module.css'

export default function NavigationMenu() {
  const t = useTranslations('NavigationMenu')
  const pathname = usePathname()

  return (
    <nav className={styles.navigation}>
      <Link
        href='/'
        className={styles.navigation__logo}
      >
        benilio.
      </Link>
      <ul className={styles.navigation__items}>
        <li>
          <Link
            href='#projects'
            className={styles.navigation__item}
          >
            {t('projects')}
          </Link>
        </li>
        <li>
          <Link
            href='#about'
            className={styles.navigation__item}
          >
            {t('about')}
          </Link>
        </li>
        <li>
          <Link
            href='#contact'
            passHref={true}
            className={styles.navigation__item}
          >
            {t('resume')}
          </Link>
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
          <li>
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
          <li>
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
