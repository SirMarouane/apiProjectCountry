import React from 'react'

export default function SearchBar(props) {   
    
  return (

    <div className='flex justify-between'>
        <div className='ps-80 pt-6 pb-6' style={{color:!props.inputValue && "black"}}>
            <input onChange={(e) => {props.inputHandler(e)}} style={{backgroundColor:!props.inputValue && "#ADFCE0"}} type="text" placeholder="Search for a country ..." className="input input-bordered w-96 rounded-sm shadow-sm shadow-black/15 bg-[#2B3743] border-none" />
        </div>

        <div className='pr-80 pt-6 pb-6' >
            <div>
                <select onChange={(e) => {props.setRegion(e.target.value)}} style={{backgroundColor:!props.inputValue && "#ADFCE0",color:!props.inputValue && "black"}} className="select select-bordered w-48  bg-[#2B3743] border-none rounded-sm shadow-sm shadow-black/15 text-white">
                    <option value={""}>Filter by region</option>
                    <option value={"Africa"}>Africa</option>
                    <option value={"Americas"}>Americas</option>
                    <option value={"Asia"}>Asia</option>
                    <option value={"Europe"}>Europe</option>
                    <option value={"Oceania"}>Oceania</option>
                </select>
            </div>
        </div>

    </div>
  )

};