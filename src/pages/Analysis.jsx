import React from 'react'
import Intro from '../analysiscomponents/Intro'
import About from '../analysiscomponents/About'
import CropPredict from '../analysiscomponents/CropPredict'
import FertPredict from '../analysiscomponents/FertPredict'
import Map from '../analysiscomponents/Map'
import ContactUs from '../analysiscomponents/ContactUs'


function Analysis() {
  return (
    <div>
        <Intro />
        <About />
        <CropPredict />
        <FertPredict />
        <Map/>
        <ContactUs />
    </div>
  )
}

export default Analysis