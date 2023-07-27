'use client'

import Link from 'next/link'
import { CgMail } from 'react-icons/cg'
import styles from '@/site/styles.module.css'

import useScrollPosition from '@app/hooks/ScrollPosition'
import useWindowSize from '@app/hooks/WindowsSize'

const NavigationMenu = () => {
  const scrollPosition = useScrollPosition()
  const size = useWindowSize()

  // const scrollTo = (e: any) => {
  //   const element = e.target.getAttribute('to')
  //   const elementId = document.getElementById(element)

  //   e.preventDefault()

  //   setTimeout(() => {
  //     if (elementId) {
  //       if (elementId !== null) {
  //         elementId.scrollIntoView({
  //           behavior: 'smooth',
  //         })
  //       }
  //     } else {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth',
  //       })
  //     }
  //   }, 100)
  // }

  // const scrollTo = (e: any) => {
  //   const element = e.target.getAttribute('href')
  //   const elementId = document.getElementById(element)

  //   // e.preventDefault()

  //   setTimeout(() => {
  //     if (elementId) {
  //       if (elementId !== null) {
  //         elementId.scrollIntoView({
  //           behavior: 'smooth',
  //         })
  //       }
  //     } else {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth',
  //       })
  //     }
  //   }, 100)
  // }

  // const scrollTo = (e: any) => {
  //   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //     anchor.addEventListener('click', function (e) {
  //       e.preventDefault()

  //       setTimeout(() => {
  //         document.querySelector(this.getAttribute('href')).scrollIntoView({
  //           behavior: 'smooth',
  //         })
  //       }, 100)
  //     })
  //   })
  // }

  return (
    <nav className={`${styles.navigation} ${styles.section_width}`}>
      <Link
        href='/'

        // scroll={false}
        // onClick={scrollTo}
      >
        <div className={styles.navigation__logo}>
          <span className='text-green-300'>B</span>
          {size.width! <= 1000 ? '' : 'enilio.'}
        </div>
      </Link>
      <ul className={styles.navigation__items}>
        <li>
          <Link
            href='#projects'
            // to='projects'
            className={styles.navigation__item}
            scroll={false}
            // onClick={scrollTo}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href='#about'
            // to='about'
            className={styles.navigation__item}
            scroll={false}
            // onClick={scrollTo}
          >
            About
          </Link>
        </li>
        <li>
          <a
            href='/BenicioOliveira_Resume.pdf'
            className={styles.navigation__item}
            // download='BenicioOliveira_Resume'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </li>
      </ul>
      <Link
        href='mailto:benilio129@gmail.com?Subject=👋 Hey, there!'
        passHref={true}
        className={styles.navigation__mail}
      >
        <CgMail />
      </Link>
    </nav>
  )
}

export default NavigationMenu
