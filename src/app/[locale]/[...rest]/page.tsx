import { useTranslations } from 'next-intl'

const NotFound = () => {
  const t = useTranslations('NotFound')

  return (
    <>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </>
  )
}

export default NotFound
