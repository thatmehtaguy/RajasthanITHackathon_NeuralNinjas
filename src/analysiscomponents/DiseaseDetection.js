import React, { useState } from "react";
import crop_left from "../assets/images/crop-left-dec.png";
import "./CropPredict.css";

const DiseasePredict = () => {
  const [crop, setCrop] = useState("maize");
  const [imageFiles, setImageFile] = useState([]);
    

    // const changeColour = (e) => {
    //     const active= document.getElementById(e.target.id)
    //     active.style.backgroundColor = "#2c3e50";
    //     active.style.color = "#fff";
    //     if(e.target.id="active")
    // }

  const getData=()=>{
    const formData = new FormData();
    formData.append('image', imageFiles[0]);

    fetch("http://127.0.0.1:5000/"+crop, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
    
  }

  return (
    <div id="disease" className="our-prediction section">
      <div className="prediction-left-dec">
        <img src={crop_left} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Predict <em>Diseases</em> in your
                <span>Crops </span>
              </h2>
              <span>Use our precise model to take care of your crops</span>
            </div>
          </div>
        </div>
        <div className="flex w-[100vw] justify-center items-center flex-col gap-y-20">
            <div className="btn-group">
                <button className="btn"  id="button1"   onClick={(e)=>{setCrop("maize");}}>Maize</button>
                <button className="btn"  id="button2"   onClick={(e)=>{setCrop("wheat");}}>Wheat</button>
                <button className="btn"  id="button3"   onClick={(e)=>{setCrop("rice");}}>Rice</button>
                <button className="btn"  id="button4"   onClick={(e)=>{setCrop("potato");}}>Potato</button>
            </div>

            <input id="dropzone-file" type="file" accept="image/*" className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={(e) => setImageFile([...e.target.files])} />

            <button className="btn btn-primary " type="submit" onClick={getData}>Submit</button>
        </div>
        
        {/* {response ? (<div> {response} </div>) : <div></div>} */}
        </div>
    </div>
  );
};

export default DiseasePredict;
