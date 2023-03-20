import React from "react";

const AnalyticsHero = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://picsum.photos/id/1/400/600" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Analytics Engine</h1>
      <p className="py-6">Our analytics engine is a powerful tool that has revolutionized the farming industry by providing farmers with data-driven insights that can help them optimize their operations and improve their yield. By analyzing data from various sources, including weather data, soil data, and crop yield data, farmers can gain a deeper understanding of their farm's performance and make informed decisions that can lead to better outcomes.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default AnalyticsHero;
