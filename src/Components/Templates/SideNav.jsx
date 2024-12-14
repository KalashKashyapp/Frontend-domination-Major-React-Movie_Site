import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div className='w-[21%] h-full border-r-2 border-zinc-400 bg-[#1A1A1A] p-5 max-w-screen-lg mx-auto overflow-x-hidden'>

            <h1 className='text-2xl text-white font-bold flex items-center'>

                <i className='text-[#6556CD] ri-tv-fill mr-2'></i>

                <span className='text-[#87CEEB]'>On</span>
                <span className='text-[#FFA500]'>Air:</span>
                <span className='text-xl text-white ml-3 mt-1 animate-fade-in'>Watch What You Love</span>

            </h1>

            <nav className='flex flex-col text-zinc-400 text-xl gap-2'>

                <h1 className='text-4xl mt-10 mb-3 text-blue-400 hover:text-blue-700 transition-all duration-300 font-semibold'>
                    Explore Movies
                </h1>

                <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="ri-fire-fill"></i> Trending
                </Link>

                <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="ri-bard-fill mr-1"></i> Popular
                </Link>

                <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="ri-vip-crown-2-fill mr-1"></i> Movies
                </Link>

                <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="ri-timer-2-fill mr-1"></i> Tv Shows
                </Link>

                <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="ri-user-star-fill mr-1"></i>Celeb's
                </Link>

            </nav>

            <hr className='border-none my-8 h-[1px] bg-zinc-400' />

            <nav className='flex flex-col text-zinc-400 text-xl gap-2'>

                <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
                    <i className="ri-information-fill mr-1"></i> About Us
                </Link>

                <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
                    <i className="ri-phone-fill mr-1"></i> Contact Us
                </Link>

            </nav>

            <hr className='border-none my-8 h-[1px] bg-zinc-400' />

                <section className="mt-2">
                    <h2 className="text-2xl font-semibold text-blue-400 hover:text-blue-700 transition-all duration-300">Follow Us</h2>
                    <div className="flex gap-2 mt-3 flex-wrap">
                        <a href="#" className="text-[#6556CD] hover:text-white p-1"><i className="ri-facebook-circle-fill mr-1"></i>Facebook</a>
                        <a href="#" className="text-[#6556CD] hover:text-white p-1"><i className="ri-twitter-fill mr-1"></i>Twitter</a>
                        <a href="#" className="text-[#6556CD] hover:text-white p-1"><i className="ri-instagram-fill mr-1"></i>Instagram</a>
                    </div>
                </section>



        </div>
    )
}

export default SideNav