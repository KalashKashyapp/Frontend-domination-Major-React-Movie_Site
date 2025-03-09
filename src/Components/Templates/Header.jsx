import React from 'react'
import { Link } from 'react-router-dom';


const Header = ({ data }) => {

    if (!data) return null;

    // Watch Trailer Chalane ke liye liya .
    const openLink = () => {
        // URL ko dynamically generate karke link ko open karega.
        window.location.href = `/${data.media_type}/details/${data.id}/trailer`;
    };

    return (
        <div
            style={{

                background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)),
                    url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,

                backgroundPosition: "top-[3%]",

                backgroundSize: "cover",

                backgroundRepeat: "no-repeat",

            }}

            className='w-full h-[50vh] flex flex-col justify-end p-[5%]'

        >

            {/* Content Wrapper */}

            <div
                className="relative z-10 text-white px-8 py-6 max-w-[800px] bg-black/30 rounded-xl backdrop-blur-md"
            >
                <h1
                    className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide mb-4"

                    style={{
                        textShadow: "2px 2px 15px rgba(0, 0, 0, 0.9)", // Glow effect
                    }}

                >
                    {data.name || data.original_title || data.original_name || data.title}

                </h1>

                <p
                    className="text-lg md:text-xl font-medium leading-relaxed mt-3"
                    style={{
                        textShadow: "1px 1px 10px rgba(0, 0, 0, 0.7)", // Subtle shadow
                    }}
                >

                    {data.overview.slice(0, 200) || "No description available"}
                    <Link to={`/${data.media_type}/details/${data.id}`}
                        className='text-blue-400'> ...more
                    </Link>

                </p>

                <div className="flex items-center mt-5 gap-6">

                    {/* Release Date */}
                    <div className="flex items-center gap-2">
                        <i className="ri-calendar-line text-xl"></i>
                        <span className="text-lg font-medium">{data.release_date || "N/A"}</span>
                    </div>

                    {/* Movie Type */}
                    <div className="flex items-center gap-2">
                        <i className="ri-movie-2-line text-xl"></i>
                        <span className="text-lg font-medium">{data.media_type.toUpperCase() || "N/A"}</span>
                    </div>

                </div>

                {/* Trailer Button */}
                <button
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg hover:scale-105 transition-transform shadow-lg"
                    onClick={openLink}
                >
                    Watch Trailer
                </button>

            </div>

        </div>
    )
}

export default Header