import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"], // latin subset
  weight: ["400", "500"], // font weights
})

const Footer = () => {
    return (
        <div className="flex min-h-[243px] justify-left items-left p-32" >
            
            <p className={`${poppins.className} font-medium text-[16px] sm:text-[14px] md:text-[16px]`}>
                2022 Meubel House. All rights reserved
            </p>
        </div>
    )
}

export default Footer
