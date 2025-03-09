import axios from "../../Utils/Instance";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Noimage from "/Noimage.webp";

const Topnav = () => {

  const [query, setquery] = useState("");

  const [searches, SetSearches] = useState([]);


  const GetSearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      SetSearches(data.results);
    }
    catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

// Steps:
// 1. User search box mein kuch type karega, toh setquery se query state update hogi.
// 2. useEffect detect karega ki query badal gayi hai aur GetSearches ko call karega.
// 3. GetSearches API ko call karega aur results ko searches state mein save karega.
// 4. Aap searches ko render karke search results dikhane ke liye use kar sakte ho.

//Yeh code ek reactive search system banata hai jo TMDB API ko dynamically call karta hai.
// Jab bhi user koi input karega, real-time mein API se results fetch honge aur application mein dikhega.


  return (
    <div className='w-[80%] h-[10vh] relative flex mx-auto items-center z-20'>
      {/* yha par z=20 (z-index) islye diya hai ki jab ham search krein kuch toh jo search list dikhegi woh chipe na movie ki details wala jo div hai usse. */}
      <i className="text-zinc-400 text-3xl ri-search-line"></i>

      <input
        className='w-[60%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent'

        type="text"

        placeholder='search anything'

        onChange={(e) => setquery(e.target.value)}
        value={query}

        //setquery(e.target.value): यह setquery function को कॉल करता है और input field के value को state variable (query) में update करता है।
        //value={query} --> yeh input field की value को state (query) से bind krega.

      />

       {query.length > 0 && (
          <i 
          onClick={() => setquery("")}
          className="text-zinc-400 text-3xl ri-close-fill">
          </i>
       )}
       {/* The && operator ensures that the element after it (in this case, the <i> tag) is rendered only if the condition before it (query.length > 0) is true. */}
  

      <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[8%] overflow-auto rounded'>

        {/* max-h-[50vh] --> jab tak hum kuch nhi likhnge tab tak nhi dikhega kuch. */}

        {searches.map((s, k) => (
          <Link to={`/${s.media_type}/details/${s.id}`} key={k} className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-400 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">

          <img src={
            s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : Noimage
            } alt="" 
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"/>

          <span>{s.name || s.original_title || s.original_name || s.title}</span>

          {/* Kaise Kaam Karega?
            Image: Agar search result mein backdrop_path ya profile_path ho, toh image TMDB server se fetch hogi aur render hogi.
            Name or Title: Jo bhi relevant naam ya title available hoga, usko display karega.
          */}
        
        </Link>
        ))}

      </div>

    </div>
  )
}

export default Topnav