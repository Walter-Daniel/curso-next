import {useLocale, useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import exotic from '../../../public/exotic.jpg'
 
export default function Index() {
  const t = useTranslations('Index');
  const localActive = useLocale();
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2'>
        <article className='pb-2' >
          <h1 className='text-4xl uppercase font-semibold py-2'>{t('title')}</h1>
          <p className='pb-3'>{t('description')}</p>
          <Link href={`/${localActive}/rutaceae`}
            className='bg-black text-white p-3 rounded-md mt-2'
            >{t('btn')}</Link>
        </article>
        <article className='flex justify-center'>
        <Image 
          src={exotic}
          alt='Exotic'
          height={500}
          width={500}
          />
        </article>
      </section>
    </>
  )
}