import React from 'react'
import Feature from '../../components/featured/Feature'
import FeatureHotel from '../../components/featurehotel/FeatureHotel'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertylist/PropertyList'
import './home.css'
const Home = () => {
  return (
    <div>
       <Navbar/>
       <Header/>
       <div className="homeContainer">
         <Feature/>
         <h1 className='homeTitle'>Browse by property type</h1>
         <PropertyList/>
         <h1 className='homeTitle'>Home guests love</h1>
         <FeatureHotel/>
         <MailList/>
         <Footer/>
       </div>
    </div>
  )
}

export default Home