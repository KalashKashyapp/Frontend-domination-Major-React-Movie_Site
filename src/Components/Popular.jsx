import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import axios from '../Utils/Instance';
import Loading from './Loading';
import Cards from './Templates/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {

    const navigate = useNavigate();

    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "OnAir : Popular " + category.toUpperCase();

    const GetPopular = async () => {

        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);

            // settrending(data.results);

            if (data.results.length > 0) {
                setpopular((prevState) => [...prevState, ...data.results]);
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
        if (popular.length === 0) {
            GetPopular();
        } else {
            setpage(1);
            setpopular([]);
            GetPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);
    //mtlb jab jab category change hoga tab tab GetTrending() func. chlega. Ab hum trending ka data cards ke form me bhejenge. toh uske liye hum cards component bana lenge.

    return popular.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] w-full flex items-center justify-between'>

                <h1 className='text-2xl text-zinc-400 font-semibold'>

                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>

                    Popular
                </h1>

                <div className='flex items-center w-[80%]'>

                    <Topnav />

                    <Dropdown title="Category :" options={["movie", "tv"]} func={(e) => setcategory(e.target.value)} />

                </div>

            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={GetPopular}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}>

                <Cards data={popular} title={category} />

            </InfiniteScroll>



        </div>
    ) : (
        <Loading />
    )
}

export default Popular