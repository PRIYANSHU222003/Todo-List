import React from 'react'
import { TbRadiusBottomLeft } from 'react-icons/tb'

const navbar = () => {
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  return (
    
    <nav className='flex justify-between bg-slate-600 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>
              <img src="https://www.bing.com/th/id/OIP.afcQBCgXtYegz8NKunnbPAHaHa?w=200&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"  alt="" />
            </span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold trainsition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold trainsition-all'>Task</li>
            
            </ul>      
    </nav>
  )
}

export default navbar
