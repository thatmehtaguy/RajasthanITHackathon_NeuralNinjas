import React from "react";
import about_left from "../assets/images/about-left-image.png";

const MarketplaceHero = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://picsum.photos/id/18/400/600" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Farmers Marketplace</h1>
      <p className="py-6">An ecommerce website for farmers would be an online platform designed to connect farmers directly with consumers, allowing them to sell their products online without the need for middlemen. The website would feature an easy-to-use interface that would enable farmers to list their products, set prices, and manage inventory. Consumers would be able to browse the selection of products, make purchases, and have them delivered directly to their doorstep.</p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default MarketplaceHero;
