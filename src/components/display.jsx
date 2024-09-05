import React from 'react'

function Display({name ,temp , humidity}) {
  return (
    <>
    <div className="display  w-[30rem]  text-center  mx-auto text-blue-500 p-4 rounded-lg  mt-10">
    <h4 className="text-xl font-semibold mb-2">City: <span className="font-normal">{name}</span></h4>
    <br />
    <p className="text-lg">Temperature : {temp}<span className="font-bold">°C</span></p>
    <br />
    <p className="text-lg">Humidity : {humidity} <span className="font-bold"></span></p>
    
  </div>


    </>
  )
}

export default Display