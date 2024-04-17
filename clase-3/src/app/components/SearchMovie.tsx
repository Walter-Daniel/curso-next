'use client'
import { Input } from '@nextui-org/react';
import { SearchIcon } from './icons/SearchIcon';
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchMovie = () => {


    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleOnChange = (value:string) => {
        const params = new URLSearchParams(searchParams);

        if(value){
            params.set('query', value)
        }else {
            params.delete('query')
        }

        replace(`/?${params.toString()}`)
    }

  return (
    <div className='py-5'>
        <Input
            classNames={{
            base: "max-w-full sm:max-w-[28rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            onChange={e => handleOnChange(e.target.value)}
        />
    </div>
  )
}
