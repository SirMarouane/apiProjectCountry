import React from 'react'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import test from "./../../assets/bg.jpeg"
import { Link, useParams } from 'react-router-dom'

export default function info() {
    const [inputValue, setInputValue] = useState(false)

    const [dataCountry, setDataCountry] = useState([])

    const bgValue = useRef(null)
    
    useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => setDataCountry(response.data))
    .catch((error) => console.log(error))

  }, [])
  
    useEffect(() => {
  
      darkModeChange(bgValue)
  
    }, [inputValue])
    
    const darkModeChange = (useref) => {
        if (!inputValue) {
          useref.current.style.backgroundColor= "#E2FAF7";
          useref.current.style.color = "black"
        } else {
          useref.current.style.backgroundColor = ""
          useref.current.style.color = ""
        }
      }

      const {id} = useParams()

      const i = 0

      const bgValue2 = useRef(null)
      

  return (
    <div className=' h-screen'>
            <div ref={bgValue} className='flex items-center justify-between ps-80 pr-80 bg-[#2B3743] h-16 text-white font-bold text-2xl'>
                <h1>Where in the world ?</h1>

            <div>
                <label className="flex cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                    <input  onClick={() => {setInputValue(!inputValue)}} type="checkbox" value="synthwave" className="toggle theme-controller"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>


        {
            dataCountry.map((element, key) => {
                        
                return(
                id == element.cca3 ?
                   <div key={key} className='flex flex-col h-screen space-y-20' style={{backgroundColor:inputValue && "rgb(30, 38, 45)", color:inputValue && "white"}} >
                        <Link key={key} to={`/`} style={{backgroundColor:inputValue && "rgb(30, 38, 45)", color:inputValue && "white"}} className="btn w-40 ms-40 mt-20 drop-shadow-2xl shadow-black border-none">⏮️ Back</Link>

                        <div className='flex justify-center items-center gap-36 '>
                            <img className='border-[1px] border-solid border-blue-300 h-[500px]' src={element.flags.png} alt="" width="800px"/>
                            <div>
                                <div className='  font-bold text-4xl pb-8'>{element.name.common}</div>
                                <div className='flex gap-52 text-xl font-semibold '>
                                    <div className='leading-10'>
                                        <p>Native Name: <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{element.name.common}</span></p>
                                        <p>Population: <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{element.population}</span></p>
                                        <p>Region <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{element.region}</span></p>
                                        <p>Sub Region <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{element.subregion}</span></p>
                                        <p>Capital <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{element.capital}</span></p>
                                    </div>

                                    <div className='leading-10'>
                                        <p>Top Level Domain <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{(element.tld).join(" - ")}</span></p>
                                        <p>Currencies <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{Object.keys(element.currencies)}</span></p>
                                        <p>Languages <span style={{color:inputValue && "rgb(219, 219, 219)"}} className='text-black font-light'>{Object.values(element.languages).join(", ")}</span></p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center space-x-4 pt-20 text-sm font-semibold w-[600px] space-y-3'>
                                    <p>Border Countries:</p>
            
                                {
                                
                                    element.borders ?
                                    element.borders.map((border, key) => {
                                        return(
                                            id == element.cca3 &&
                                            
                                            <Link key={key} to={`/${(Object.values(border).join(""))}`}  >
                                                <button style={{backgroundColor:inputValue && "rgb(30, 38, 45)", color:inputValue && "white"}} className="btn h-3 border-2 drop-shadow-2xl shadow-black border-none hover:bg-blue-300">{(Object.values(border))}</button>
                                            </Link>
                                    )
                                    })
                                    : <p> - </p>
                                } 
            
                                </div>
                                                        
                            </div>
                            </div>
                        </div>
                            :''
                )
            }
        )}
       

        
    </div>
  )
}
