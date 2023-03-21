import React,{useState,useEffect} from 'react'
// import CropPredict from '.../analysiscomponents/CropPredict'
// import FertPredict from '.../analysiscomponents/FertPredict'
// import Map from '.../analysiscomponents/Map'
// import ContactUs from '.../analysiscomponents/ContactUs'
// import DiseaseDetection from '.../analysiscomponents/DiseaseDetection'

import {BsFillCloudSunFill} from 'react-icons/bs'
import {GiGroundSprout, GiInsectJaws, GiAnimalHide} from 'react-icons/gi'
import CropPredict from '../../analysiscomponents/CropPredict'
import FertPredict from '../../analysiscomponents/FertPredict'
import Map from '../../analysiscomponents/Map'
import ContactUs from '../../analysiscomponents/ContactUs'
import DiseaseDetection from '../../analysiscomponents/DiseaseDetection'




function Dashboard() {
    const [latitude, setLatitude] = useState(12);
    const [longitude, setLongitude] = useState(77);
  
    

    return (
    <div className='flex flex-col w-full'>
<div className="grid grid-cols-2 gap-4">
  <div className="card p-4 mx-20 bg-primary">
    <div className="card-body">
      <h2 className="card-title"><BsFillCloudSunFill size={80}/></h2>
      <p className="card-text ">
        <div className='text-3xl font-semibold font-color-primary underline'>Weather Details</div>
        <div className="card-actions justify-end text-3xl font-semibold">
               <div className='mt-12'>17 degree Celsius</div>
        </div>
    </p>
    </div>
  </div>
  <div className="card p-4 mx-20 bg-warning">
    <div className="card-body">
      <h2 className="card-title"><GiGroundSprout size={80}/></h2>
      <div className='text-3xl font-semibold font-color-primary underline'>Soil Status</div>
        <div className="card-actions justify-end text-3xl font-semibold">
               <div className='mt-12'>Silt soil</div>
        </div>
    </div>
  
  </div><div className="card p-4 mx-20 bg-accent">
    <div className="card-body">
      <h2 className="card-title"><GiInsectJaws size={80}/></h2>
      <p className="card-text ">
      <div className='text-3xl font-semibold font-color-primary underline'>Locust Warning</div>
        <div className="card-actions justify-end text-3xl font-semibold">
               <div className='mt-12'>No Locusts Detected Yet</div>
        </div>
    </p>
    </div>
  </div><div className="card p-4 mx-20 bg-error">
    <div className="card-body">
      <h2 className="card-title"><GiAnimalHide size={80}/></h2>
      <p className="card-text ">
      <div className='text-3xl font-semibold font-color-primary underline'>Wild Animals Detection</div>
        <div className="card-actions justify-end text-3xl font-semibold">
               <div className='mt-12'>Wild Animals Detected</div>
        </div>
    </p>
    </div>
</div>
</div>
    <CropPredict/>
    <FertPredict/>
    <Map/>
    <DiseaseDetection/>
    <ContactUs/>
</div>

  )
}

export default Dashboard

