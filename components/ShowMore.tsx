"use client"
import React from 'react'

import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import Custombutton from './Custombutton'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {
  
    const router = useRouter()

    const handleNavigation = () => {

        const newLimit = (pageNumber + 1) * 10; 
        setLimit(newLimit)
    }
  
    return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <Custombutton 
                title='Show more'
                btnType='button'
                containerStyles='bg-primary-blue rounded-full text-white'
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore