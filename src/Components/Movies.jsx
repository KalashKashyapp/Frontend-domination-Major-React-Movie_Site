import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import axios from '../Utils/Instance';
import Loading from './Loading';
import Cards from './Templates/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {

    const navigate = useNavigate();

    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "OnAir : Movies " + category.toUpperCase();

    const GetMovie = async () => {

        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);

            // settrending(data.results);

            if (data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            } else {
                sethasMore(false);
            }

        }
        catch (e) {
            console.log("Error: ", e);
        }
    };

    const refreshHandler = () => {
        if (movie.length === 0) {
            GetMovie();
        } else {
            setpage(1);
            setmovie([]);
            GetMovie();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return movie.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[3%] w-full flex items-center justify-between'>

                <h1 className='text-2xl text-zinc-400 font-semibold'>

                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>{" "}

                    Movies: <small className='ml-2 text-sm text-zinc-600'> 
                              {category.toUpperCase()}
                            </small>  
                </h1>

                <div className='flex items-center w-[80%]'>

                    <Topnav />

                    <Dropdown title="Category :" options={["top_rated", "upcoming", "now_playing"]} func={(e) => setcategory(e.target.value)} />

                </div>

            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={GetMovie}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}>

                <Cards data={movie} title="movie" />

            </InfiniteScroll>



        </div>
    ) : (
        <Loading />
    )
}

export default Movies