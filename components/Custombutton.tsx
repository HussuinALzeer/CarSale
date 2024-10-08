"use client";

import { CustomButtonProps } from '../types/index'
import Image from 'next/image'
import React from 'react'

const Custombutton = ({ title,containerStyles,handleClick , btnType, TextStyles, isDisabled, rightIcon } : CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${TextStyles}`}>
            {title} 
        </span>

        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt='right icon' fill className='object-contain' />
          </div>
        )}
    </button>
  )
}

export default Custombutton
