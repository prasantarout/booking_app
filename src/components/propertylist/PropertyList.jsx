import React from 'react'
import './propertylist.css'
import useFetch from '../../hooks/useFetch';
const PropertyList = () => {
  const {data,loading,error}=useFetch("http://localhost:8800/api/hotels/countByType");
  const images=[
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4716785/pexels-photo-4716785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  ]
  console.log(data);
  return (
    <div className='pList'>
     { 
     loading ? "please wait ":(

    <>
    {data && images.map((item,index)=>(
   <div className="plistItem" key={index}>
        <img src= {item} alt=""
         className="pListImg" />
        <div className="pListTitle">
          <h1>{data[index] ?.type}</h1>
          <h2>{data[index] ?.count} {data[index] ?.type}</h2>
        </div>
      </div>
      ))}
     </>
      ) }
    </div>
  )
}

export default PropertyList