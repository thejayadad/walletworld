'use client'

import Box from '@/components/Box/Box'
import React from 'react'

const ProductDetail = () => {
  return (
    <section className='w-full md:py-20'> 
    <Box>
    <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
        <img
        src='https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />
    </div>
    <div  className="flex-[1] py-3">
    <div className="text-[34px] font-semibold mb-2 leading-tight">
        Product Name
    </div>
    <div className="flex items-center">
    <p className="mr-2 text-lg font-semibold">
        $24.99
    </p>

    </div>
    </div>

    </div>
    </Box>
    </section>
  )
}

export default ProductDetail