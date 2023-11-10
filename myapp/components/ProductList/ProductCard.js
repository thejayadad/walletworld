
import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <Link
    className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    href={`/product/`}>
        <img
         width={500}
         height={500}
         src='https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
         />
    <div className="p-4 text-black/[0.9]">
    <h2 className="text-lg font-medium">Product Name</h2>
    <div className='flex items-center text-black/[0.5]'>
    <p className="mr-2 text-lg font-semibold">
        $22.99
    </p>
    </div>
    </div>
    </Link>
  )
}

export default ProductCard