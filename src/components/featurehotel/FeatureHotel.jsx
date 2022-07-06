import React from 'react'
import './featrueHotel.css'
import useFetch from '../../hooks/useFetch';
const FeatureHotel = () => {
  const {data,loading,error}=useFetch("http://localhost:8800/api/hotels?featured=true&limit=4");
  return (
    <div className='fp'>
     {  loading ? "loading": <>
    
    {data.map((item)=>(

    <div className='fpItem' key={item._id}>
        <img src="" alt="" className="fpImg" />
      <span className="fpName">{item.name}</span>
      <span className="fpCity">{item.city}</span>
      <span className="fPrice">Starting from ${item.CheapestPrice}</span>
     { item.rating &&
        <div className='fpRating'>
          <button>{item.rating}</button>
           <span>Excellent</span>
      </div>}
      </div>
       ))}
     
     
     </>
     }
    </div>
  )
}

export default FeatureHotel