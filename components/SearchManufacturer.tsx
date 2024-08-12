"use client"

import { Combobox, ComboboxButton, ComboboxInput,ComboboxOption,ComboboxOptions,Transition} from '@headlessui/react'
import { useState, Fragment } from 'react'

import { SearchManufacturerProps } from '@/types'
import React from 'react'
import Image from 'next/image'

import { manufacturers } from '@/constants'

const SearchManufacturer = ({selected,setSelected} : SearchManufacturerProps) => {
   
   const [query, setQuery] = useState('') 


   //filter the searchbar
   const filteredManufactureres = query === "" ? manufacturers : manufacturers.filter((item) =>(
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))
   ))

  return (
    
    <div className="search-manufacturer">
        <Combobox value={selected} onChange={setSelected}>
            <div className="relative w-full">
                <ComboboxButton className='absolute top-[14px]' >
                    <Image src='/car-logo.svg' alt='car logo' width={20} height={20} className='ml-4' />
                </ComboboxButton>
                <ComboboxInput className='search-manufacturer__input' placeholder='Volkswagen' 
                    displayValue = {(manufacturer:string) => (manufacturer)}
                    onChange={e => setQuery(e.target.value) }    
                />
                <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions>
                        {
                            filteredManufactureres.map((item) => (
                                <ComboboxOption value = {item} key={item} className= {({active}) =>`
                                    relative search-manufacturer__option  ${active ? "bg-primary-blue text-white rounded-full" : "text-gray-900"}
                                `} >
                                    {item}
                                </ComboboxOption>
                            ))
                    
                        
                        }
                    </ComboboxOptions>
                </Transition>
            </div>           
        </Combobox>

    </div>

  )
}

export default SearchManufacturer