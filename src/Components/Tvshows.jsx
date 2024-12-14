import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import axios from '../Utils/Instance';
import Loading from './Loading';
import Cards from './Templates/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Tvshows = () => {

    const navigate = useNavigate();

    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "OnAir : TV Shows " + category.toUpperCase();

    const GetTv = async () => {

        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);

            // settrending(data.results);

            if (data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results]);
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
        if (tv.length === 0) {
            GetTv();
        } else {
            setpage(1);
            settv([]);
            GetTv();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return tv.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[3%] w-full flex items-center justify-between'>

                <h1 className='text-2xl text-zinc-400 font-semibold'>

                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>

                    Tv_Shows: <small className='ml-2 text-sm text-zinc-600'>
                        {category.toUpperCase()}
                    </small>
                </h1>

                <div className='flex items-center w-[80%]'>

                    <Topnav />

                    <Dropdown title="Category :" options={["on_the_air", "top_rated", "popular", "airing_today"]} func={(e) => setcategory(e.target.value)} />

                </div>

            </div>

            <InfiniteScroll
                dataLength={tv.length}
                next={GetTv}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}>

                <Cards data={tv} title="tv" />

            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    )
}

export default Tvshows