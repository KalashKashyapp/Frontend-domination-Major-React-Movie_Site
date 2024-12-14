import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import axios from '../Utils/Instance';
import Loading from './Loading';
import Cards from './Templates/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Celeb = () => {

    const navigate = useNavigate();

    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "OnAir : Celeb's " + category.toUpperCase();

    const GetPerson = async () => {

        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);

            if (data.results.length > 0) {
                setperson((prevState) => [...prevState, ...data.results]);
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
        if (person.length === 0) {
            GetPerson();
        } else {
            setpage(1);
            setperson([]);
            GetPerson();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return person.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[3%] w-full flex items-center justify-between'>

                <h1 className='text-2xl text-zinc-400 font-semibold'>

                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>

                    Celeb's
                </h1>

                <div className='flex items-center w-[80%]'>

                    <Topnav />

                </div>

            </div>

            <InfiniteScroll
                dataLength={person.length}
                next={GetPerson}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}>

                <Cards data={person} title="person" />

            </InfiniteScroll>



        </div>
    ) : (
        <Loading />
    )
}

export default Celeb