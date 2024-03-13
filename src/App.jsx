import axios from "axios"
import { useState, useEffect, useRef } from "react"
import SearchBar from "./components/Home/SearchBar"
import DarkMode from "./components/Home/DarkMode"
import Card from "./components/Home/Card"

function App() {
  const [dataCountry, setDataCountry] = useState([])

  const [inputValue, setInputValue] = useState(false)

  const [region, setRegion] = useState("")

  const bgBody = useRef(null)

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => setDataCountry(response.data))
    .catch((error) => console.log(error))

    darkModeChange(bgBody)

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

  const darkModeChange2 = (useref) => {
    if (!inputValue) {
      useref.current.style.backgroundColor = "#ADFCE0"
      useref.current.style.color = "black"
      // useref.current.style.border = "solid 1px #ADFCE0"
    } else {
      useref.current.style.backgroundColor = ""
      useref.current.style.color = ""
    }
  }

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
   
    setInputText(e.target.value.toLowerCase());
  };

   const filteredData = dataCountry.filter((el) => {
        if (inputText == '') {
            return el;
        } else {
            return el.name.common.toLowerCase().includes(inputText)
        }
    })
  
  return (
    <div ref={bgBody} className="bg-gray-800">
      <div>
        <DarkMode inputValue={inputValue}
                  setInputValue = {setInputValue}
                  darkModeChange2 = {darkModeChange2}
                  />
      </div>

      <div>
        <div>
          <SearchBar inputValue={inputValue}
                  setInputValue={setInputValue} 
                  darkModeChange = {darkModeChange}
                  dataCountry={dataCountry}
                  inputHandler={inputHandler}
                  region={region}
                  setRegion={setRegion}
                  />
        </div>

      </div>

      <div>
        <Card dataCountry={dataCountry}
              setDataCountry={setDataCountry}
              inputValue={inputValue}
              setInputValue={setInputValue} 
              darkModeChange2 = {darkModeChange}
              filteredData = {filteredData}
              region={region}
              setRegion={setRegion}
        />
      </div>
    </div>
  )
}

export default App


