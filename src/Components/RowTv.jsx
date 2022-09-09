import React, {useState, useEffect } from 'react'
import axios from 'axios'

import TvShow from './TvShow'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const RowTv = ({title, fetchURL,rowID}) => {

    const [tv, setTv] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) =>{
            setTv(response.data.results)
        })
    },[fetchURL])
console.log(tv);
    const slideLeft = () =>{
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    } 
    const slideRight = () =>{
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft  + 500;
    } 
  return (
    <>
        <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
        <div className="flex items-center relative group">
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden left-0 group-hover:block' size={40} />
            <div id={'slider' +rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {tv?.map((item,index) => (
                    <TvShow item ={item} key={index}/>
                ))}
            </div>

            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden right-0 group-hover:block' size={40} />

        </div>
    </>
  )
}

export default RowTv