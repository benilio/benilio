import NavigationMenu from '@/components/Navigation'
import { useTranslations } from 'next-intl'
// import '../../styles/Project.css'

// import Image from '../../components/Project/ProjectImage'

// import Process from '../../assets/projects/geological/process.webp'
// import MultipleScreens from '../../assets/projects/geological/multiple_screens.webp'

function Geological() {
  const t = useTranslations('Project.Geological')

  return (
    <main className='project'>
      <section className='project__header'>
        <h1>{t('title')}</h1>
        <h2>{t('description')}</h2>
        <h3>{t('detail')}</h3>
        <NavigationMenu />
      </section>
      <div className='project__description'>
        <section>
          <h4>Project Overview</h4>

          {t.rich('projectOverview', {
            paragraph: (chunks) => <p>{chunks}</p>,
          })}
        </section>
        <section>
          <h4>My Contributions</h4>

          {t.rich('contributions', {
            paragraph: (chunks) => <p>{chunks}</p>,
          })}
        </section>
      </div>
      {/* <section className='project__gallery'>
        <Image
          imageSrc={Process}
          imageAltText='Three laptops with different software screens'
        />
        <Image
          imageSrc={MultipleScreens}
          imageAltText='Multiple software screens'
        />
      </section> */}
      <section>
        <p className='py-16 text-center'>
          This project is owned by <em>PETROBRAS</em> and{' '}
          <em>Tecgraf/PUC-Rio Institute</em>.<br /> (c) All Rights Reserved.
        </p>
      </section>
    </main>
  )
}

export default Geological
