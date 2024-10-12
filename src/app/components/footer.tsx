import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <div>
    <footer className='md:mr-auto md:mr-4 md:py-1 md:pl-4 md:border-grey-300 flex flex-wrap items-center text-base justify-center'>
      <Link href={"/"}></Link>
      <Link className='ml-2 mr-5 hover:text-red-900' href="./components/category1">Privacy Policy</Link>
      <Link className='mr-5 hover:text-red-900' href="./components/category2">category2</Link>
      <Link className='mr-5 hover:text-red-900'href="./components/category3">category3</Link>
    
      </footer>
                    </div>
    </div>
  )
}

export default Footer