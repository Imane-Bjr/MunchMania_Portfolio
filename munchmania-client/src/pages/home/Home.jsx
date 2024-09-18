import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import Specialities from './Specialities'
import Testimonials from './Testimonials'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <Specialities/>
      <Testimonials/>
      <OurServices/>
    </div>
  )
}

export default Home