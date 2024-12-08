import react from 'react'
import {Inter} from "next/font/google"
import { BsPersonExclamation } from "react-icons/bs";
const inter = Inter({subsets:['latin']})


const Navbar = () => {
    return (
        <div className='bg-background flex items-center justify-center'>
              <ul className = {`${inter.className} m-[66px] flex items-center justify-center h-[24px] 
        font-medium text-[16px] space-x-16`}>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
            <BsPersonExclamation className='w-[20px] h-[20px] '/>
            
        

      </div>
        
    )
}

export default Navbar