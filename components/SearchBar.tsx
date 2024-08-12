"use client"
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface otherclasses {
    otherClasses :string
}

const SearchButton = ({otherClasses} : otherclasses) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt='magnifying glass' width={40} height={40} className='object-contain' />
    </button>
)


const SearchBar = ({setmanufacturer, setModel}) => {
    
    const router = useRouter()

    const [searchManuFacturere, setSearchManuFacturere] = useState('')
    const [searchModel, setSearchModel] = useState('')

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(searchManuFacturere === "" && searchModel === "") {
            return alert("please fill the search bar")
        }

        setModel(searchModel)
        setmanufacturer(searchManuFacturere)
    }

    
  
    return (

    <form className='searchbar' onSubmit={handleSearch}>

        <div className="searchbar__item">
            <SearchManufacturer 
                selected={searchManuFacturere}
                setSelected={setSearchManuFacturere}
            />


            <div className="searchbar__item">
                <Image src="/model-icon.png" width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='model icon' />
                <input type="text" name='model' value={searchModel} onChange={(e) => setSearchModel(e.target.value)} 
                placeholder='Tiguan' className='searchbar__input'
                />

            </div>

            <SearchButton otherClasses = "sm:hidden" />

        </div>
        <SearchButton otherClasses = "max-sm:hidden " />

    </form>

)
}

export default SearchBar