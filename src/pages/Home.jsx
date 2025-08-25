import React from 'react'
import Headerfile from '../components/Headerfile'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'



const Home = () => {
  return (
    <div>
        <Headerfile />
        <SpecialityMenu/>
        <TopDoctors/>
        <Banner/>
      
    
        
    </div>
  )
}

export default Home