import React from 'react'
import { Link } from 'react-router-dom'
import Noimage from '/Noimage.webp'

const Cards = ({ data, title }) => {
    return (
        <div className='flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]' >
            {data.map((c, i) =>

                <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative w-[25vh] mr-[5%] mb-[5%]' key={i}>
                    {/* to={`/${data.media_type || title}/details/${c.id}`} iske through mai kisi bhi cards me jake uske kisi bhi parts me ja skta hu. */}

                    <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover'
                        src={
                            c.backdrop_path || c.poster_path || c.profile_path ?
                                `https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path || c.profile_path}`
                                : Noimage
                            }
                        alt=""
                    />

                    <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>
                        {
                            c.name ||
                            c.original_title ||
                            c.original_name ||
                            c.title
                        }
                    </h1>

                    {c.vote_average &&
                        <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300">
                            <span>
                                {(c.vote_average * 10).toFixed()}<sup>%</sup>
                            </span>
                        </div>
                    }
                    {/* yeh is liye iya jisse ki rating celebs wale section me na dikhe. */}

                </Link>)}
        </div>
    )
}

export default Cards