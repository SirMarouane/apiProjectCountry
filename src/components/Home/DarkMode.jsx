import React, { useRef,useEffect } from 'react'

export default function DarkMode(props) {
    const bgValue = useRef(null)

    useEffect(() => {
      props.darkModeChange2(bgValue)
    
    }, [props.inputValue])
    
  return (
    <div ref={bgValue} className='flex items-center justify-between ps-80 pr-80 bg-[#2B3743] h-16 text-white font-bold text-2xl'>
        <h1>Where in the world ?</h1>

        <div>
            <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <input  onClick={() => {props.setInputValue(!props.inputValue)}} type="checkbox" value="synthwave" className="toggle theme-controller"/>
                    {/* {
                        inputValue && bgValue.current.style.backgroundColor"red" 
                    } */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </div>
    </div>
  )
}
