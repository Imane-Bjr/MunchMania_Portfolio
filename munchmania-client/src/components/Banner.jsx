import React from 'react'
import { GrFormNext } from "react-icons/gr";

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] from-0% to [#F2F3F2] to-100%'>
        <div className='py-24 pb-6 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            
            {/* Right side for our images */}
            <div className='md:w-1/2'>
                <img src="/images/home/meal4.jpg" alt="" className='w-full h-full object-cover rounded-2xl shadow-lg' />
                <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                    <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                        <img src="/images/home/Banner/meal2.jpg" alt="" className='rounded-2xl' />
                        <div className="space-y-1">
                            <h5 className='font-medium mb-1'>Rice Bowl</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-yellow-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" readOnly/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" readOnly/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" readOnly/>
                            </div>
                            <p className='text-coral'>$6.50</p>
                        </div>
                    </div>
                    <div className='md:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                        <img src="/images/home/Banner/meal3.jpg" alt="" className='rounded-2xl' />
                        <div className="space-y-1">
                            <h5 className='font-medium mb-1'>Stir Chicken</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-yellow-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            </div>
                            <p className='text-coral'>$5.50</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Left side for our texts */}
            <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
                    Savor the Moment,
                    Relish Every <span className='text-violet'>Flavor</span>
                </h2>
                <p className='text-xl text-[#534f73]'>A Culinary Journey Curated with Passion and Precision</p>
                
                <button className='btn bg-violet px-6 py-2 font-semibold text-white rounded-full flex items-center'>
                    <a href='/menu' className='flex items-center'>
                        Order Now
                        <GrFormNext className='ml-2' />
                    </a>
                </button>
                </div>
            
        </div>
    </div>
  )
}

export default Banner