import axios from "axios";
import {  useRef, useState } from "react";
import Display from "./components/display.jsx";

function App() {
  let valInput = useRef();
  let [arr ,setArr] = useState([])
 

  // Function to fetch weather data
  async function show() {
    let city = valInput.current.value ; // Use the input value or a default city
if(city == ""){
  alert('enter city name')
  return
}
    
    // try 
    try {
      let res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ded885d2b011a5823848c4d12e1dabf`
      );
      console.log(res.data);

      if (city.toLowerCase() === res.data.name.toLowerCase()){
  let arrObj = {
    name :res.data.name,
    temp : res.data.main.feels_like - 273.15 , 
    humidity: res.data.main.humidity 
  
  }   
  setArr([...arr , arrObj])
  
      }
    
}
     

    
  //  catch  
    catch (err) {
      console.log(err);
      alert('city not match')

    }
valInput.current.value = ""

  }




  return (
    <>
      <div className="weather bg-blue-500 p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
        <div className="country text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Country</h3>
        </div>
        <input
          type="text"
          placeholder="Enter city"
          ref={valInput}
          className="city w-full p-2 text-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />
        <button
          className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300"
          onClick={show} 
        >
          Enter
        </button>
      </div>

     <div className="list flex justify-center items-center flex-wrap">
{

  arr.map((item , index)=>{
    return(

      <Display key={index} name = {item.name} temp  = {item.temp}  humidity = {item.humidity}   />
    )
})

}

     </div>

    </>
  );
}

export default App;



//

