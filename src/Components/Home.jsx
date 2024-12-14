import React, { useEffect, useState } from 'react'
import SideNav from './Templates/SideNav';
import Topnav from './Templates/Topnav';
import axios from '../Utils/Instance';
import Header from './Templates/Header';
import HorizontalCards from './Templates/HorizontalCards';
import Dropdown from './Templates/Dropdown';
import Loading from './Loading';

const Home = () => {

  document.title = "OnAir : Watch What You Love | Homepage";

  // Yha par humne 

  const [wallpaper, setwallpaper] = useState(null);

  const [trending, setTrending] = useState(null);

  const [category, setcategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let randomData = data.results[(Math.random() * data.results.length).toFixed()];

      setwallpaper(randomData);
    }
    catch (e) {
      console.log("Error: ", e);
    }
  };

  const GetTrending = async () => { 

    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);

    }
    catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {

    GetTrending();

    !wallpaper && GetHeaderWallpaper(); // mtlb ki jab wallpaper ki value kuch nhi hai tabhi call krna hai getHeaderWallpaper() Function ko.

  }, [category])

  // Necche hamne ternary operator ka use kiya ki jab tak wallpaper ki value na aye tab tak loading dikhana.
  // jab jab category change hogi tab tab hmara GetTrending() func. call hoga.

  return wallpaper && trending ? (
    <>

      <SideNav />

      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>

        <Topnav />

        <Header data={wallpaper} />

        <div className='flex justify-between p-5'>
          <h1 className='text-3xl text-zinc-400 font-semibold'>
            Trending
          </h1>

          <Dropdown title="Filter : " options={["tv", "movie", "all"]} func={(e) =>
            setcategory(e.target.value)} />
          {/* matlb ki dropdown se jo bhi value aygi wo hmare setcategory ko change krega aur setcategory change hoga toh useEffect chlega and category bhi update hui setcatg. ke wjah se toh GetTrending() func chlega jo ki hamne Home component me krke rakha hai. */}
        </div>

        <HorizontalCards data={trending} />

      </div>

    </>
  ) : (

    <Loading />

  );
};

export default Home