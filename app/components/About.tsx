import Link from 'next/link'
import Image from 'next/image'
import styles from '@/site/styles.module.css'
import {
  CgShapeTriangle,
  CgMusicNote,
  CgSmile,
  CgSmileSad,
} from 'react-icons/cg'
import { FaLinkedin, FaBehance, FaGithub, FaCodepen } from 'react-icons/fa'

import photoOne from '@/assets/IMG_20220424_092618.jpg'
import photoTwo from '@/assets/IMG_20220424_092626.jpg'
import photoThree from '@/assets/IMG_20221001_180826.jpg'

const About = () => {
  const personal = [
    { key: 1, bubble: 'aquarius' },
    { key: 2, bubble: 'infp' },
    { key: 3, bubble: 'a+' },
    { key: 4, bubble: 'lgbtqia+' },
  ]
  const music = [
    { key: 1, bubble: 'k-pop' },
    { key: 2, bubble: 'punk rock' },
    { key: 3, bubble: 'hip hop' },
    { key: 4, bubble: 'country' },
  ]
  const likes = [
    { key: 1, bubble: 'cats' },
    { key: 2, bubble: 'time travel' },
    { key: 3, bubble: 'games' },
    { key: 4, bubble: 'photography' },
    { key: 5, bubble: 'digimon' },
  ]
  const dislikes = [
    { key: 1, bubble: 'prejudice' },
    { key: 2, bubble: 'minced meat' },
    { key: 3, bubble: 'slow internet connection' },
  ]

  return (
    <section
      id='about'
      className={`scroll-mt-24 ${styles.section}`}
    >
      <h2 className={styles.section_heading}>About Me</h2>
      <div className='grid grid-col grid-cols-2 grid-rows-1 gap-8'>
        <div className='flex flex-col space-y-10'>
          <div className='space-y-4'>
            <p className='font-body text-xl leading-7'>
              I'm a curious individual that loves to learn about how things work
              and languages. I'm specially passionate in trying to understand
              people's point of view and how their differences - be it cultural,
              geographical or others - impact on each individual's thoughts,
              feelings and how that affect how they interact with things. More
              often than not, you might find me tinkering with some old piece of
              tech that probably doesn't work anymore, but at least I'll try to
              understand how it used to work or give it a new meaning.
            </p>
            <p className='font-body text-xl leading-7'>
              I've already studied a couple of languages, but I haven't had much
              time to practice or put them in use, but in general, I like
              learning new languages because it helps understand another's
              culture, history and even their thought process. Some of those
              languages: korean, french, spanish, chinese.
            </p>
          </div>
          <div className='space-y-2 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit'>
              <CgShapeTriangle className='text-2xl text-green-400' />
              {personal.map((bubble) => (
                <span className='font-subtitle'>{bubble.bubble}</span>
              ))}
            </div>
            <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-start'>
              <CgMusicNote className='text-2xl text-green-300' />
              {music.map((bubble) => (
                <span className='font-subtitle'>{bubble.bubble}</span>
              ))}
              <span className='font-subtitle text-xs'>(almost) everything</span>
            </div>
            <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-end'>
              <CgSmile className='text-2xl text-green-400' />
              {likes.map((bubble) => (
                <span className='font-subtitle'>{bubble.bubble}</span>
              ))}
            </div>
            <div className='flex items-center justify-center gap-4 p-4 pr-6 rounded-full border-3 border-gray-500 w-fit self-center'>
              <CgSmileSad className='text-2xl text-green-300' />
              {dislikes.map((bubble) => (
                <span className='font-subtitle'>{bubble.bubble}</span>
              ))}
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
              href='/BenicioOliveira_Resume.pdf'
              className='rounded-full py-4 px-6 bg-gray-500 font-subtitle lowercase text-xl'
              // download={`BenicioOliveira_Resume`}
              title='resume'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
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
