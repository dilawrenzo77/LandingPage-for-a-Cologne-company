import React from 'react';
import Image from 'next/image';
import HeroImg from "@/assets/vex/vex7.jpg";
import SectionImg1 from "@/assets/vex/vex15.jpg";
import SectionImg2 from "@/assets/vex/vex11.jpg";
import Products from "@/app/products";
import Card from "@/components/navbar/card";
import pic1 from "@/assets/vex/vex2.jpg";
import pic2 from "@/assets/vex/vex.jpg";
import pic3 from "@/assets/vex/pic1.jpg";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Page = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-between gap-20 bg-neutral-50'>
        <section className='w-full h-[calc(100vh)]'>
          <Image src={HeroImg} alt="hero" className='w-full h-full object-cover'/>
          <div className='absolute bottom-15 left-5 flex flex-col gap-5 lg:gap-15 md:gap-10  sm:gap-5'>
              <h4 className='text-4xl text-neutral-500 font-thin tracking-widest lg:text-6xl md:text-5xl sm:4xl'>Dark</h4>
              <h3 className='text-4xl text-neutral-400 font-light tracking-widest lg:text-6xl md:text-5xl sm:4xl'>Magnetic</h3>
              <h1 className='text-4xl text-neutral-300 font-medium tracking-widest lg:text-6xl md:text-5xl sm:4xl'>Galactic</h1>
          </div>
        </section>
        <section className='flex flex-wrap items-center content-center justify-between gap-2 bg-neutral-400 w-[96%] sm:w-[94%] md:w-[90%] lg:w-[80%] xl:w-[70%] px-3 py-2 rounded-sm'>
            <div className='w-50 px-2 flex flex-col flex-grow justify-between items-center max-w-[25rem] gap-2 h-60 py-3 lg:items-start md:items-start sm:items-start'>
              <h2 className='text-lg font-bold lg:text-3xl md:text-2xl sm:text-xl'>The Essence of Vexora</h2>
              <p className='text-md  text-neutral-600 lg:text-xl md:text-lg sm:text-md w-full'>A scent crafted for those who embrace the enigmatic, the alluring, and the celestial.</p>
              <button className='bg-neutral-900 rounded-lg text-neutral-50 py-0.5 px-1 transition duration-700 ease-in-out hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer'>view collection</button>
            </div>
            <div className='w-50 h-60 flex-grow object-cover rounded-xl'>
              <Image src={SectionImg1} alt='' className='w-full h-full rounded-xl'/>
            </div>
            <div className='w-50 h-60 flex-grow object-cover rounded-xl '>
              <Image src={SectionImg2} alt='' className='w-full h-full rounded-xl'/>
            </div>
        </section>
        <section className='w-[98%] xl:w-[80%] lg:w-[90%] md:w-[85%] px-3 py-2'>
          <div className='flex flex-col items-start justify-between gap-9'>
            <h1 className='text-xl font-bold'>Vexora's Best Collections</h1>
            <div className='flex items-start justify-between py-0.5 border-y-2 border-neutral-600 border-solid  w-full'>
              <div className='flex flex-wrap items-center justify-between w-100 xl:200 lg:w-150 md:w-100'>
                <p className='px-3 rounded-full border-2 border-neutral-600 border-solid hover:border-neutral-900 cursor-pointer'>All</p>
                <p className='px-3 rounded-full border-2 border-neutral-600 border-solid hover:border-neutral-900 cursor-pointer'>Popular</p>
                <p className='px-3 rounded-full border-2 border-neutral-600 border-solid hover:border-neutral-900 cursor-pointer'>Latest</p>
                <p className='px-3 rounded-full border-2 border-neutral-600 border-solid hover:border-neutral-900 cursor-pointer'>Sale</p>
              </div>
              <div className='hidden sm:block'>
                <p className='px-3 rounded-full border-2 border-neutral-600 border-solid hover:border-neutral-900 cursor-pointer'>Filter</p>
              </div>
            </div>
            <div className='w-full flex flex-wrap  gap-3 py-3 px-15 xl:px-5'>
                {Products.map((product) => {
                  return(<Card key={product.name} product={product} />)
                })}
              </div>
            <button className='w-full border border-neutral-600 border-solid hover:border-neutral-900 hover:text-neutral-300 hover:border-2'>More Products</button>
          </div>
        </section>
        <section className='bg-neutral-300 flex flex-col sm:flex-row justify-between items-center gap-2 px-2 py-2 w-[90%]'>
            <div className='w-[50%]'>
              <Image src={pic2} alt='' className='object-cover'/>
            </div>
            <div className='w-[50%] flex flex-col items-center justify-between gap-0.5 px-2 py-1'>
              <h1 className='text-3xl font-thin text-center'>DISCOVER NEW</h1>
              <Image src={pic1} alt='' className='w-50 object-cover'/>
              <h4 className='text-sm text-neutral-800'>Dark Collections</h4>
              <p className='text-xs font-thin'>Vexora is designed for the modern visionary—someone who thrives in the shadows, commands attention effortlessly, and appreciates the finer things in life.</p>
              <button className='text-sm hover:border-b-[1.5px] border-neutral-900 border-solid cursor-pointer'>more details</button>
            </div>
        </section>
        <section className='w-[100%] h-[18rem] relative'>
          <Image src={pic3} alt='' className='w-full h-full object-cover' />
          <div className='absolute inset-0 top-25 left-10 flex flex-col items-start justify-start gap-5'>
            <h1 className='text-neutral-50 text-2xl tracking-widest font-thin'>Are you ready to <br/> smell TRANSCEDENT</h1>
            <button className='px-5 bg-neutral-50 rounded-full cursor-pointer transition duration-700 ease-in-out hover:bg-neutral-900 hover:text-neutral-50'>Contact Us</button>
          </div>
        </section>
        <section className='flex flex-col items-center justify-center w-[100%]'>
          <footer className='w-[100%] py-4 px-3 flex items-center justify-between '>
            <div className='flex flex-wrap items-center justify-start gap-5 sm:gap-10 md:gap-20 lg:gap-25 xl:gap-30'>
              <div>
                <h2 className='text-lg font-medium'>Catalog</h2>
                <p className="font-thin text-sm cursor-pointer">Collections</p>
                <p className="font-thin text-sm cursor-pointer">Cologne</p>
                <p className="font-thin text-sm cursor-pointer">sales</p>
              </div>
              <div>
                <h2 className='text-lg font-medium'>Company</h2>
                <p className="font-thin text-sm cursor-pointer">Brands</p>
                <p className="font-thin text-sm cursor-pointer">News</p>
                <p className="font-thin text-sm cursor-pointer">Contacts</p>
              </div>
              <div>
                <h2 className='text-lg font-medium'>Support</h2>
                <p className="font-thin text-sm cursor-pointer">Support center</p>
                <p className="font-thin text-sm cursor-pointer">help desk</p>
                <p className="font-thin text-sm cursor-pointer">FAQ's</p> 
              </div>
            </div>
            <div className='flex flex-wrap content-center justify-between items-center gap-5 sm:gap-8 md:gap-10 lg:gap-15 xl:gap-20'>
              <FaXTwitter size={30}  className='cursor-pointer'/>
              <FaInstagram size={30} className='cursor-pointer'/>
              <FaDiscord size={30} className='cursor-pointer'/>
              <FaGithub size={30} className='cursor-pointer'/>
            </div>
          </footer>
          <p>Copyright &copy; Vexora. All rights reserved</p>
        </section>
      </div>
    </div>
  );
}

export default Page;