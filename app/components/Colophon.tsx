import Link from 'next/link'
import styles from '@/site/styles.module.css'
import { CgMusicNote } from 'react-icons/cg'

const Colophon = () => {
  return (
    <section
      id='colophon'
      className={styles.section}
    >
      <h2 className={styles.section_heading}>Colophon</h2>
      <div className='grid grid-flow-row grid-cols-5'>
        <div className='col-span-2 self-center justify-self-center'>
          {/* <h3 className={styles.colophon_heading}>Technology</h3> */}
          <p>
            Built with <CgMusicNote className='inline-block' /> and cats{' '}
          </p>
        </div>
        <div>
          <h3 className={styles.colophon_heading}>Fonts</h3>
          <ul className='list-none'>
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
          <h3 className={styles.colophon_heading}>Icons</h3>
          <ul className='list-none'>
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
          <h3 className={styles.colophon_heading}>Technology</h3>
          <ul className='list-none'>
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
