import React from 'react'
import useFetch from '../../hooks/useFetch.js'
import './feature.css'
const Feature = () => {

  const {data,loading,error}=useFetch("http://localhost:8800/api/hotels/countByCity?cities=london,japan,dubai");
  console.log(data);

  return (
    <div className='feature'>
    { 
    loading ? "Loading please wait":(

   
    <>
    <div className='featureItem'>
        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='featureImg'/>
        <div className='featureTitle'>
            <h1>London</h1>
            <h2>{data[0]} properties</h2>
        </div>
     </div>
     <div className='featureItem'>
        <img src="https://images.pexels.com/photos/10628388/pexels-photo-10628388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='featureImg'/>
        <div className='featureTitle'>
            <h1>Japan</h1>
            <h2>{data[1]} properties</h2>
        </div>
     </div>
     <div className='featureItem'>
        <img src="https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='featureImg'/>
        <div className='featureTitle'>
            <h1>Dubai</h1>
            <h2>{data[2]} properties</h2>
        </div>
     </div>
     </>
     ) }
    </div>
  )
}

export default Feature