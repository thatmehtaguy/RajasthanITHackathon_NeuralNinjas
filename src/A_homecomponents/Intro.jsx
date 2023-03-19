import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="item header-text">
                  <h6>Welcome to VGrow</h6>
                  <h2>
                    The <em>One</em> Stop <span>Shop</span> For All Your Farming Needs
                  </h2>
                  <p>
                    Leading online platform dedicated to providing an extensive range of farming solutions tailored to meet the needs of small-scale farmers and large agribusinesses. With a team of experienced experts in the farming industry, the company is committed to delivering top-notch service to its customers.
                  </p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <a href="#crop">Predict Your Crop</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
