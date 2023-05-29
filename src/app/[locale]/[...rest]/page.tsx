import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </>
  )
}
