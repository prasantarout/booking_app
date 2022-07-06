import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import './lisst.css'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch.js'
const List = () => {

  const location=useLocation();
  const [destination,setDestination]=React.useState(location.state.destination);
  const [dates,setDates]=React.useState(location.state.dates);
  const [options,setOptions]=React.useState(location.state.options);
  const [min,setMin]=React.useState(undefined);
  const [max,setMax]=React.useState(undefined);
  const [openDate,setOpenDate]=React.useState(false);
  const {data,loading,error,reFetch}=useFetch(`http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);
 
  const handleClick=()=>{
    reFetch();
  }
   return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
             onChange={items=>setDates([items.selection])}
             minDate={new Date()}
             ranges={dates}
             />}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listItemOption">
              <div className="listSearchOptionItem">
                <span className="listSearchText">
                  min price <small>Per night</small>
                </span>
                <input type="number" onChange={(e)=>setMin(e.target.value)} className="listSearchOptionInput" />
              </div>
            <div className="listSearchOptionItem">
                <span className="listSearchText">
                  max price <small>Per night</small>
                </span>
                <input type="number" onChange={(e)=>setMax(e.target.value)} className="listSearchOptionInput" />
              </div>
           <div className="listSearchOptionItem">
                <span className="listSearchText">
                  Adult <small>Per night</small>
                </span>
                <input type="number" min={1} className="listSearchOptionInput" placeholder={options.adult}/>
              </div>
           <div className="listSearchOptionItem">
                <span className="listSearchText">
                Children
                </span>
                <input type="number"  min={0} className="listSearchOptionInput" placeholder={options.children}/>
              </div>
            <div className="listSearchOptionItem">
                <span className="listSearchText">
               Room
                </span>
                <input type="number"  min={1} className="listSearchOptionInput" placeholder={options.room}/>
              </div>
              </div>
              </div>
            <button className='btn' onClick={handleClick}>Search</button>
            </div>
          <div className="listResult">
           {loading ? "loading ":<>
           {data.map((item)=>(
            <SearchItem item={item} key={item._id}/>
           ))}
          </>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List