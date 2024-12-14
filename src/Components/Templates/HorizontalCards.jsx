import React from 'react'
import { Link } from 'react-router-dom'
import Noimage from '/Noimage.webp'

const HorizontalCards = ({ data }) => {
    return (
        <div className='w-[100%] flex overflow-y-hidden mb-5 p-5'>

            {data.length > 0 ? data.map((d, i) => (

                <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] h-[35vh] mr-5 bg-zinc-900 mb-5'>

                    <img
                        className='w-full h-[55%] object-cover'
                        src={
                            d.backdrop_path || d.poster_path ?
                                `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`
                                : Noimage
                        }
                        alt="" />

                    <div className='text-white p-3 h-[45%] overflow-y-auto'>

                        <h1
                            className="text-xl font-semibold uppercase">
                            {d.name || d.original_title || d.original_name || d.title}
                        </h1>

                        <p className="">

                            {d.overview.slice(0, 50)}
                            <span className='text-zinc-400'> ...more </span>

                        </p>

                    </div>

                </Link>

            )) : <h1 className='text-3xl text-white font-black text-center mt-5'>
                Nothing to Similar Movies !
            </h1>
            }

        </div>
    )
}

export default HorizontalCards