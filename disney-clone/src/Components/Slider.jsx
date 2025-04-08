import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'; 

const Slider = () => {
    const [movieList, setMovieList] = useState([])
    const scrollRef = useRef(null);
    const screenWidth = window.innerWidth;

    useEffect(() => {
    getTrendingMovies();
    }, [])
    const getTrendingMovies = ()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = () => {
        scrollRef.current?.scrollBy({ left: screenWidth-110, behavior: 'smooth' });
      };
    
      const sliderLeft = () => {
        scrollRef.current?.scrollBy({ left: -screenWidth-110, behavior: 'smooth' });
      };

  return ( 
    <div>
        <HiChevronLeft onClick={()=>sliderLeft()} className='hidden md:block text-white text-[35px] absolute mx-8 mt-[150px] cursor-pointer'/>
        <HiChevronRight onClick={()=>sliderRight()} className='hidden md:block right-0 text-white text-[35px] absolute mx-8 mt-[150px] cursor-pointer'/>
    <div id='slider' ref={scrollRef} className='flex overflow-x-auto w-full px-5 py-2 md:px-16'>
      {movieList.map((item)=>(
        <img src= {IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[350px] object-cover object-left-top mr-5 rounded-md hover:border-[3px] border-gray-300 transition-all duration-100 ease-in' />
      ))}
    </div>
    </div>
  )
}

export default Slider
