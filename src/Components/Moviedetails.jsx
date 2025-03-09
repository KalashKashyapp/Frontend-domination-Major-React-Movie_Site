import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../Store/actions/movieActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from './Templates/HorizontalCards';

const Moviedetails = () => {

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const { id } = useParams();

    const { info } = useSelector(state => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(asyncloadmovie(id))

        return () => {
            dispatch(removemovie());
        }
        //mtlb mai page se bahar jaun toh movie hat jaye.  

    }, [id]);

    return info ? (
        <div style={{

            background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)),
                url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,

            backgroundPosition: "top-[3%]",

            backgroundSize: "cover",

            backgroundRepeat: "no-repeat",

        }}
            className='relative w-screen h-[150vh] px-[10%]'
        >

            {/* part-1 Navigation */}

            <nav className='w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl'>

                <Link onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] mr-3 ri-arrow-left-line">
                </Link>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <a target="_blank" href={info.detail.homepage}
                        className="icon-link">
                        <i className="ri-external-link-line"></i>
                        <span>Homepage</span>
                    </a>
                    <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                        className="icon-link">
                        <i className="ri-earth-line"></i>
                        <span>Wikipedia</span>
                    </a>
                    <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
                        className="icon-link">
                        <i className="ri-star-fill"></i>
                        <span>IMDB</span>
                    </a>
                </div>

            </nav>

            {/* part-2 poster and details */}
            <div className='w-full flex'>
                <img
                    className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover transition-transform duration-300 ease-in-out hover:scale-105'
                    src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
                    alt=""
                />

                <div className='content  ml-[5%] text-white'>
                    <h1 className='text-5xl font-black text-white heading-animation'>

                        {info.detail.name || info.detail.original_title || info.detail.original_name || info.detail.title}

                    </h1>

                    <div className='flex text-white items-center gap-x-3 mt-3 mb-5'>

                        <div className="flex flex-wrap gap-[20px] gap-x-6 justify-space-between mt-[10px] items-center bg-[#2d2d2d] p-[20px] rounded-[11px]">

                            <span className='rounded-full text-xl font-semibold bg-[#ffc107] text-[#1c1c1c] w-[5vh] h-[5vh] 
                            flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300 
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) transition: transform 0.3s ease-in-out'>
                                {((info.detail.vote_average * 10).toFixed())}<sup>%</sup>
                            </span>

                            <h1 className='w-[60px] font-semibold text-2xl leading-6'>User Score</h1>

                            <div className='flex flex-col'>
                                <h1 className='text-lg text-[1.5rem] font-semibold mb-[8px]'>Release Date:</h1>
                                <p className='text-md text-[#b3b3b3]'>{info.detail.release_date || "N/A"}</p>
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='text-lg text-[1.5rem] font-bold mb-[8px]'>Genres:</h1>
                                <p className='text-md text-[#b3b3b3]'>{info.detail.genres.map((g) => g.name).join(", ") || "N/A"}</p>
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='text-lg text-[1.5rem] font-bold mb-[8px]'>Duration:</h1>
                                <p className='text-md text-[#b3b3b3]'>{info.detail.runtime}min</p>
                            </div>

                        </div>

                    </div>

                    <h1 className='subtitles text-xl font-bold italic text-zinc-200'>
                        {info.detail.tagline}
                    </h1>

                    <h1 className='subtitles text-xl text-[1.5rem] font-bold mb-3 mt-5'>Overview</h1>
                    <p>{info.detail.overview}</p>

                    <h1 className='subtitles text-2xl text-[1.5rem] font-bold mb-3 mt-5'>
                        Movie Translated
                    </h1>
                    <p className='mb-10'>{info.translations.join(", ") || "No translations available"}</p>

                    <Link
                        className='p-4 bg-[#6556CD] rounded-lg'
                        to={`${pathname}/trailer`}>
                        <i class="ri-play-circle-line watch-trailer-icon mr-3"></i>
                        Watch Trailer
                    </Link>

                </div>

            </div>

            {/* part-3 Available on platforms. */}
            <div className='w-[80%] flex flex-col gap-y-5 mt-10'>

                {info.watchproviders && info.watchproviders.flatrate && (
                    <div className='flex gap-x-10 items-center text-white'>
                        <h1 className='heading-style'>Available on Platforms</h1>
                        <div className='flex gap-x-5 mt-2'>
                            {info.watchproviders.flatrate.map((w,i) => (
                                <img
                                    key={i}
                                    title={w.provider_name}
                                    className='w-[5vh] h-[5vh] object-cover rounded-md'
                                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                    alt={w.provider_name}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {info.watchproviders && info.watchproviders.rent && (
                    <div className='flex gap-x-10 items-center text-white'>
                        <h1 className='heading-style'>Available on Rent</h1>
                        <div className='flex gap-x-5 mt-2'>
                            {info.watchproviders.rent.map((w,i) => (
                                <img
                                    key={i}
                                    title={w.provider_name}
                                    className='w-[5vh] h-[5vh] object-cover rounded-md'
                                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                    alt={w.provider_name}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {info.watchproviders && info.watchproviders.buy && (
                    <div className='flex gap-x-10 items-center text-white'>
                        <h1 className='heading-style'>Available to Buy</h1>
                        <div className='flex gap-x-5 mt-2'>
                            {info.watchproviders.buy.map((w,i) => (
                                <img
                                    key={i}
                                    title={w.provider_name}
                                    className='w-[5vh] h-[5vh] object-cover rounded-md'
                                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                    alt={w.provider_name}
                                />
                            ))}
                        </div>
                    </div>
                )}

            </div>

            {/* Part-4 Recommendations and Similar Stuff */}
            <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' /> 

            <h1 className='subtitles text-3xl font-bold text-white ml-4'>Similar Movies</h1>

            <HorizontalCards
                data = {info.recommendations.length > 0 
                        ? info.recommendations : info.similar} 
            />   
            <Outlet />
            
        </div>

    ) : <Loading />
}

export default Moviedetails