'use client'
import React from 'react'
import ProductCard from './ProductCard'
import Box from '../Box/Box'

const ProductList = () => {
  return (
    <section >
        <Box>
            <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                    Stylish Wallets for all occasions
                </div>
                <div className="text-md md:text-xl">
                Explore the essence of style and functionality with our curated collection in the Product List section. Discover a range of meticulously crafted wallets that seamlessly blend fashion with utility. 
                </div>  
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </Box>
    </section>
  )
}

export default ProductList