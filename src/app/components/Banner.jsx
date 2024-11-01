import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <section className='px-[5%] py-10'>
      <div className='bg-[url(/bannerImg.jpg)] flex items-center pt-20 min-h-[50vh] sm:min-h-screen bg-cover bg-no-repeat rounded'>
        <div className='flex items-start flex-col px-[5%] w-full md:w-[60%] gap-4'>
          <p className='text-4xl md:text-6xl text-[#4a6b92] font-semibold'>
            Shop our selection of natural products
          </p>
          <Link
            className='px-4 py-3 border bg-[#f2efea] shadow hover:shadow-none hover:text-[#4a6b92] duration-300 rounded'
            href={'/'}
          >
            SHOP HERE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
