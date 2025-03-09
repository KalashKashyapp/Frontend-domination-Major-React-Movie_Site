import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import axios from '../Utils/Instance';
import Loading from './Loading';
import Cards from './Templates/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {

    const navigate = useNavigate();
    // useNavigate() funct. use kiya hai humne back jane ke liye aur navigate(-1) ka mtlb yeh hai ki ham ek page back chale jynge click krne par.

    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "OnAir : Trending " + category.toUpperCase();

    const GetTrending = async () => {

        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

            // settrending(data.results);

            if (data.results.length > 0) {
                settrending((prevState) => [...prevState, ...data.results]);
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
        if (trending.length === 0) {
            GetTrending();
        } else {
            setpage(1);
            settrending([]);
            GetTrending();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category, duration]);
    //mtlb jab jab category or duration change hoga tab tab GetTrending() func. chlega. Ab hum trending ka data cards ke form me bhejenge. toh uske liye hum cards component bana lenge.

    return trending.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] w-full flex items-center justify-between'>

                <h1 className='text-2xl text-zinc-400 font-semibold'>

                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>

                    Trending
                </h1>

                <div className='flex items-center w-[80%]'>

                    <Topnav />

                    <Dropdown title="Category :" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />

                    <div className='w-[2%]'></div>

                    <Dropdown title="Duration :" options={["week", "day"]} func={(e) => setduration(e.target.value)} />

                </div>

            </div>

            <InfiniteScroll
                dataLength={trending.length}
                next={GetTrending}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}>

                <Cards data={trending} title={category} />

            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    )
}

export default Trending