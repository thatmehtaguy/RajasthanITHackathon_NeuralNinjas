import React from 'react'
import j from './j.jpg';
import Agricultural from './Agricultural.jpg';
import moneyplant from './moneyplant.jpg';


import { Card, Col, Row } from 'antd';

function MainCategories() {
  
  return (
    
      <div className="flex w-[100vw] items-center justify-between px-24">
        <div className="w-[30vw] ">
           <div className="card w-96 bg-base-100 shadow-xl">
  <img src={Agricultural} alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
        <div className="w-[30vw]">
            <div className="card w-96 bg-base-100 shadow-xl">
                <img src={j} alt="Shoes" />
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
        </div>
        </div>
        <div className="w-[30vw]">
            <div className="card w-96 bg-base-100 shadow-xl">
              <img src={moneyplant} alt="Shoes" />
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
        </div>
    </div>
    </div>
  
    
);
  
}

export default MainCategories