'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FaLinkedin, FaBehance, FaGithub, FaCodepen } from 'react-icons/fa'
import {
  CgMouse,
  CgShapeTriangle,
  CgMusicNote,
  CgSmile,
  CgSmileSad,
} from 'react-icons/cg'

import geologicalCover from '@/assets/projects/geological/cover.webp'
import photoOne from '@/assets/photography/IMG_20220424_092618.jpg'
import photoTwo from '@/assets/photography/IMG_20220424_092626.jpg'
import photoThree from '@/assets/photography/IMG_20221001_180826.jpg'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <>
      <section className='mx-auto container px-24 min-h-[calc(100vh-7.5rem)] flex flex-col items-center justify-center'>
        <div className='flex-grow flex items-center justify-center'>
          <div>
            {t.rich('hero.title', {
              paragraph: (chunks) => (
                <p className='font-subtitle text-xl mb-8'>{chunks}</p>
              ),
              heading: (chunks) => (
                <h1 className='font-title text-8xl'>{chunks}</h1>
              ),
              small: (chunks) => (
                <span className='font-subtitle text-xl text-gray-400 mt-8'>
                  {chunks}
                </span>
              ),
            })}

            <p className='font-subtitle text-xl w-3/5'>{t('hero.subtitle')}</p>
          </div>
        </div>
        <div className='text-[2rem] flex-col flex-grow-0 pb-6 flex items-center justify-center'>
          <CgMouse />
          <span className='font-subtitle text-xs mt-4'>{t('hero.scroll')}</span>
        </div>
      </section>
      <section
        id='projects'
        className='mx-auto container px-24'
      >
        <h2 className='font-title text-6xl py-24'>{t('projects.title')}</h2>
        <div className='grid grid-cols-10 grid-flow-row'>
          <div className='col-span-9 relative rounded-[4.5rem] overflow-clip'>
            <Image
              src={geologicalCover}
              alt='computer with software screen'
              className='shadow-xl'
            />
            <div className='bg-gradient-to-t from-gray-800/75 to-transparent absolute bottom-0 h-1/2 w-full'></div>
            <div className='bg-black/25 absolute top-0 h-full w-full'></div>
            <h3 className='absolute bottom-0 font-title lowercase px-16 py-12 text-4xl [text-shadow:_0_3px_6px_rgb(0_0_0_/_25%)]'>
              {t('projects.geological')}
            </h3>
          </div>
        </div>
      </section>
      <section
        id='about'
        className='mx-auto container px-24'
      >
        <h2 className='font-title text-6xl py-24'>{t('about.title')}</h2>
        <div className='grid grid-col grid-cols-2 grid-rows-1 gap-8'>
          <div className='flex flex-col space-y-10'>
            <div className='space-y-4'>
              {t.rich('about.description', {
                paragraph: (chunks) => (
                  <p className='font-body text-xl leading-7'>{chunks}</p>
                ),
              })}
            </div>
            <div className='space-y-2 flex flex-col items-center justify-center'>
              <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit'>
                <CgShapeTriangle className='text-2xl text-green-400' />
                {t.rich('about.bubbles.me', {
                  item: (chunks) => (
                    <span className='font-subtitle'>{chunks}</span>
                  ),
                })}
              </div>
              <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-start'>
                <CgMusicNote className='text-2xl text-green-300' />
                {t.rich('about.bubbles.music', {
                  item: (chunks) => (
                    <span className='font-subtitle'>{chunks}</span>
                  ),
                  small: (chunks) => (
                    <span className='font-subtitle text-xs'>{chunks}</span>
                  ),
                })}
              </div>
              <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-end'>
                <CgSmile className='text-2xl text-green-400' />
                {t.rich('about.bubbles.likes', {
                  item: (chunks) => (
                    <span className='font-subtitle'>{chunks}</span>
                  ),
                })}
              </div>
              <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-center'>
                <CgSmileSad className='text-2xl text-green-300' />
                {t.rich('about.bubbles.dislikes', {
                  item: (chunks) => (
                    <span className='font-subtitle'>{chunks}</span>
                  ),
                })}
              </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
              <Link
                href='https://br.linkedin.com/in/ben%C3%ADcio-oliveira-458158135/'
                passHref={true}
                className='p-4 rounded-full text-2xl bg-gray-500'
              >
                <FaLinkedin />
              </Link>
              <Link
                href='https://www.behance.net/benilio/'
                passHref={true}
                className='p-4 rounded-full text-2xl bg-gray-500'
              >
                <FaBehance />
              </Link>
              <Link
                href='https://github.com/benilio/'
                passHref={true}
                className='p-4 rounded-full text-2xl bg-gray-500'
              >
                <FaGithub />
              </Link>
              <Link
                href='https://codepen.io/beniliov/'
                passHref={true}
                className='p-4 rounded-full text-2xl bg-gray-500'
              >
                <FaCodepen />
              </Link>
              <Link
                href='/'
                passHref={true}
                className='rounded-full py-4 px-6 bg-gray-500 font-subtitle lowercase text-xl'
              >
                Resume
              </Link>
            </div>
          </div>
          <div className='gap-4 grid grid-flow-col grid-cols-1 grid-rows-2'>
            <div className='rounded-3xl object-fill overflow-clip row-span-1'>
              <Image
                src={photoOne}
                alt='temp'
              />
            </div>
            {/* <div className='rounded-3xl object-fill overflow-clip'>
              <Image
                src={photoTwo}
                alt='temp'
              />
            </div> */}
            <div className='rounded-3xl object-fill overflow-clip flex-shrink'>
              <Image
                src={photoThree}
                alt='temp'
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id='colophon'
        className='mx-auto container px-24'
      >
        <h2 className='font-title text-6xl py-24'>{t('colophon')}</h2>
        <div className='grid grid-flow-row grid-cols-3'>
          <div>
            <h3 className='font-subtitle text-xl'>Fonts</h3>
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
            <h3 className='font-subtitle text-xl'>Icons</h3>
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
            <h3 className='font-subtitle text-xl'>Technology</h3>
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
    </>
  )
}
