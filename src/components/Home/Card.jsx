import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function card(props) {
  const bgValue2 = useRef(null)
 
  return (
    <div className='flex flex-wrap justify-between gap-10 ps-80 pr-80'>
      {
        props.filteredData.map((element, key) => {
          return (
            props.region == "" ?
            <Link to={`/${element.cca3}`} style={{backgroundColor:!props.inputValue && "#ADFCE0", border:!props.inputValue && "solid 1px #ADFCE0"}} key={key} className='w-64 h-[340px] rounded-lg shadow-sm shadow-black/15 bg-[#2B3743] overflow-hidden hover:translate-y-[-10px] hover:duration-500' ref={bgValue2}>
                <img className='rounded-t-md h-40 w-64' key={key} src={element.flags.png} alt=""/>

                <div className='p-5 space-y-4'>
                  <h1 style={{color:!props.inputValue && "black"}} className='text-white font-semibold text-xl uppercase'>{element.name.common}</h1>

                  <div className='text-gray-400' style={{color:!props.inputValue && "black"}} >
                    <p><span style={{color:!props.inputValue && "black"}} className='text-white/80 font-medium pr-3'>Population:</span>{element.population}</p>
                    <p><span style={{color:!props.inputValue && "black"}} className='text-white/80 font-medium pr-3'>Region:</span>{element.region}</p>
                    <p><span style={{color:!props.inputValue && "black"}} className='text-white/80 font-medium pr-3'>Capital:</span>{element.capital}</p>
                  </div>
                </div>
            </Link>
            : 

          element.region == props.region ?
            <Link to={`/${element.cca3}`} style={{backgroundColor:!props.inputValue && "#ADFCE0", border:!props.inputValue && "solid 1px #ADFCE0"}} key={key} className='w-64 h-[340px] rounded-lg shadow-sm shadow-black/15 bg-[#2B3743] overflow-hidden hover:translate-y-[-10px] hover:duration-500' ref={bgValue2}>
                <img className='rounded-t-md h-40 w-64' key={key} src={element.flags.png} alt=""/>

                <div className='p-5 space-y-4'>
                  <h1 style={{color:!props.inputValue && "black"}} className='text-white font-semibold text-xl uppercase'>{element.name.common}</h1>

                  <div className='text-gray-400' style={{color:!props.inputValue && "black"}} >
                    <p><span style={{color:!props.inputValue && "black"}} className='text-white/80 font-medium pr-3'>Population:</span>{element.population}</p>
                    <p><span style={{color:!props.inputValue && "black"}} className='text-white/80 font-medium pr-3'>Region:</span>{element.region}</p>
                    <p><span style={{color:!props.inputValue && "black"}} className='text-white/80 font-medium pr-3'>Capital:</span>{element.capital}</p>
                  </div>
                </div>
            </Link>
            : ""
          )
        })
      }
      
    </div>
  )
}


