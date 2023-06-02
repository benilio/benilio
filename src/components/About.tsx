import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/[locale]/styles.module.css'
import { useTranslations } from 'next-intl'

import {
  CgShapeTriangle,
  CgMusicNote,
  CgSmile,
  CgSmileSad,
} from 'react-icons/cg'
import { FaLinkedin, FaBehance, FaGithub, FaCodepen } from 'react-icons/fa'

import photoOne from '@/assets/photos/IMG_20220424_092618.jpg'
import photoTwo from '@/assets/photos/IMG_20220424_092626.jpg'
import photoThree from '@/assets/photos/IMG_20221001_180826.jpg'

const About = () => {
  const t = useTranslations('About')

  return (
    <section
      id='about'
      className={`scroll-mt-24 ${styles.section}`}
    >
      <h2 className={styles.section_heading}>{t('title')}</h2>
      <div className='grid grid-col grid-cols-2 grid-rows-1 gap-8'>
        <div className='flex flex-col space-y-10'>
          <div className='space-y-4'>
            {t.rich('description', {
              paragraph: (chunks) => (
                <p className='font-body text-xl leading-7'>{chunks}</p>
              ),
            })}
          </div>
          <div className='space-y-2 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit'>
              <CgShapeTriangle className='text-2xl text-green-400' />
              {t.rich('bubbles.me', {
                item: (chunks) => (
                  <span className='font-subtitle'>{chunks}</span>
                ),
              })}
            </div>
            <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-start'>
              <CgMusicNote className='text-2xl text-green-300' />
              {t.rich('bubbles.music', {
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
              {t.rich('bubbles.likes', {
                item: (chunks) => (
                  <span className='font-subtitle'>{chunks}</span>
                ),
              })}
            </div>
            <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-center'>
              <CgSmileSad className='text-2xl text-green-300' />
              {t.rich('bubbles.dislikes', {
                item: (chunks) => (
                  <span className='font-subtitle'>{chunks}</span>
                ),
              })}
            </div>
          </div>
          <div className='flex items-center justify-center gap-4'>
            <Link
              href='https://br.linkedin.com/in/ben%C3%ADcio-oliveira-458158135/'
              title='LinkedIn'
              passHref={true}
              className='p-4 rounded-full text-2xl bg-gray-500'
            >
              <FaLinkedin />
            </Link>
            <Link
              href='https://www.behance.net/benilio/'
              title='Behance'
              passHref={true}
              className='p-4 rounded-full text-2xl bg-gray-500'
            >
              <FaBehance />
            </Link>
            <Link
              href='https://github.com/benilio/'
              title='GitHub'
              passHref={true}
              className='p-4 rounded-full text-2xl bg-gray-500'
            >
              <FaGithub />
            </Link>
            <Link
              href='https://codepen.io/beniliov/'
              title='CodePen'
              passHref={true}
              className='p-4 rounded-full text-2xl bg-gray-500'
            >
              <FaCodepen />
            </Link>
            <a
              href={`/BenicioOliveira_${t('resume.file')}.pdf`}
              className='rounded-full py-4 px-6 bg-gray-500 font-subtitle lowercase text-xl'
              // download={`BenicioOliveira_${t('resume.file')}`}
              title={`${t('resume.title')}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('resume.title')}
            </a>
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
  )
}

export default About
