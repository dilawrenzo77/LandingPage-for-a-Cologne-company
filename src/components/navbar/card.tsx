// "use client"
import Image from 'next/image';


export default function card({ product }: { product: any }) {
    return <>
        <div className='w-45 flex flex-col items-center justify-between py-2'>
                    <Image src={product.img} alt="produce" width={500} height={300} className='w-40 h-20 aspect-1/1 object-cover'/>
                    <div className='flex flex-col justify-between items-center gap-1'>
                      <p className='text-neutral-950  font-thin transition duration-800 ease-in-out hover:border-b border-black border-solid'>{product.name}</p>
                      <div className='flex justify-between items-center gap-1'>
                        <p className='text-neutral-700 text-xs'>{product.type}</p>
                        <p className='text-neutral-700 text-xs font-thin'>50ml</p>
                      </div>
                      <p>${product.price}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-neutral-900 size-4 md:size-5 lg:size-7 hover:bg-neutral-900 hover:text-neutral-50 hover:p-0.5 hover:rounded-sm">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
        </div>
    </>
};
