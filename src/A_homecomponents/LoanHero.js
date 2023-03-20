import React from 'react'

function LoanHero() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `https://picsum.photos/id/22/400/600` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold color-blue-600">Financial Services</h1>
      <p className="mb-5">Superior Financial Services is dedicated to helping you achieve financial success. Our team of experts offers personalized solutions and expert advice to help you reach your financial goals. Partner with us today and experience the superior difference.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default LoanHero