import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../services/movieServices'
import axios from "axios"


const Hero=()=>  {

  const [movie, setMovie] = useState({});

  useEffect(()=>{
    axios.get(endpoints.popular).then((response)=>{
      const movies=response.data.results;
      const randomMovie=movies[Math.floor(Math.random()* movies.length)]
       setMovie(randomMovie)
      //  console.log(randomMovie)
    });
  },[]);
  
  const truncate= (str, length)=>{

    if(!str) return""

    return str.length>length? str.slice(0,length) +"...":str
  };

  if(!movie)
  return (
    <>
    <p>fetching movie...</p>
    </>
  );
  
  const {title , backdrop_path, release_date, overview }=movie;
  

  return(
    <div className="w-full h-[350px] lg:h-[380px]">
      <div className='w-full h-full '>
        <div className='absolute w-full h-[350px] lg:h-[380px] bg-gradient-to-r'/>
        <img  
        className='w-full h-full object-cover object-top'
        src={createImageUrl(backdrop_path, "original")}
         alt="title" 
        />
        <div className='absolute w-full top-[18%] lg:top-[25%] p-4 md:p-8'>
          <h1 className='text-2xl md:text-3xl font-nsans-bold'>{title}</h1>
          <div className='mt-3 mb-3'>
            <button className='capitalize border bg-gray-300 text-black py-2 px-5'>play</button>
            <button className='capitalize border bg-gray-300  py-2 px-5 ml-4'>watch late</button>
          </div>
          <div>
            <p className='text-gray-400 text-sm'>{release_date}</p>
            <p className='w-full md:max-w-[30%] lg:max-w-[40%] text-gray-200'>{truncate(overview,165)}</p>
          </div>
        </div>
       
      </div>

    </div>
  )
}



export default Hero