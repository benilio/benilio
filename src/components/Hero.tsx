'use client'

import { useTranslations } from 'next-intl'
import { CgMouse } from 'react-icons/cg'

const Hero = () => {
  const t = useTranslations('Hero')

  return (
    <section className='mx-auto container px-24 min-h-[calc(100vh-7.5rem)] flex flex-col items-center justify-center'>
      <div className='flex-grow flex items-center justify-center'>
        <div>
          {t.rich('title', {
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

          <p className='font-subtitle text-xl w-3/5'>{t('subtitle')}</p>
        </div>
      </div>
      <div className='text-[2rem] flex-col flex-grow-0 pb-6 flex items-center justify-center'>
        <CgMouse />
        <span className='font-subtitle text-xs mt-4'>{t('scroll')}</span>
      </div>
    </section>
  )
}

export default Hero
