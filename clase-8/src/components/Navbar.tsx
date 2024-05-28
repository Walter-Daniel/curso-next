'use client'


import { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'use-intl';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Navbar = () => {

    const [ isPending, startTransition ] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();
    const path = usePathname();
    const splitPath = path.split('/');
    const subPath = splitPath[splitPath.length - 1];
    const t = useTranslations('navbar');

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            if(splitPath.includes('rutaceae')){
                router.replace(`/${nextLocale}/${subPath}`);
            }else {
                router.replace(`/${nextLocale}`);
            }
        });
    };

  return (
    <nav className='flex justify-between px-6 py-3 bg-black text-white'>
        <h1 className='text-lg'>Exotic</h1>
        <div className='flex gap-2'>
            <Link href='/'>{t('link')}</Link>
            <Link href={`/${localeActive}/rutaceae`}>Rutaceae</Link>
        </div>
        <label>
            <select 
                defaultValue={localeActive}
                className='py-2 bg-yellow-400 text-black rounded-md'
                onChange={onSelectChange}
                disabled={isPending}
                >
                    <option value="es">Spanish</option>
                    <option value="en">English</option>

                </select>
        </label>
    </nav>
  )
}
