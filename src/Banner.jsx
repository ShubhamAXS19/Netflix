import React, { useState ,useEffect} from 'react';
import './Banner.css';
import instance from './axios';
import requests from './Request';


const Banner = () => {

  const [Movie,SetMovie] = useState([]);

   useEffect(() => {
    async function fetchData(){
    const request = await instance.get(requests.fetchNetflixOriginals)
     SetMovie(
       request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
     );
     return request;
     }

     fetchData();
  }, []);

  console.log(Movie);
  



  function truncate(string,n){
    return string?.lenght > n ? string.substr(0,n-1) + '...' : string;
  }



  return (
   <header className= "banner" style={{
       backgroundSize:"cover",
       backgroundImage:`url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
       backgroundPosition:"center",

   }}>

    <div className="banner__content">
      <h1 className="banner__title" >
        {Movie?.title || Movie?.name || Movie?.original_name }
      </h1>
      <div className="banner__buttons">
        <button className='banner__button'>Play</button>
        <button className='banner__button'>More Info</button>
      </div>
      <p className='banner__description' > {truncate(Movie?.overview)} </p>


    </div>

      <div className="banner--fadebottom"></div>



   </header>
  ) 
}

export default Banner