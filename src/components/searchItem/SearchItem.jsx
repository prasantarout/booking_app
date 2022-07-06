import React from 'react'
import './searchItem.css'
import {Link} from 'react-router-dom'
const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
        <img src={item.photo[0]} alt="" 
        className="searchItemImg" />
        <div className='searchItemDesc'>
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
         {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className='searchItemDetails'>
           { item.rating && <div className="searchItemRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="detailsText">
                <span className="lsPrice">${item.CheapestPrice}</span>
                <span className="lsTaxOp">include taxes and fees</span>
              <Link to={`/hotels/${item._id}`}><button className='lsCheckBtn'>See availability</button></Link>  
            </div>
        </div>
    </div>
  )
}

export default SearchItem