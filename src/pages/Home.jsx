import React from 'react'
import Intro from '../A_homecomponents/Intro'
import HomeAbout from '../A_homecomponents/HomeAbout'
import ContactUs from '../A_homecomponents/ContactUs'


function Home() {
  return (
    <div>
        <Intro />
        <HomeAbout/>
        {/* <MarketplaceHero/> */}
        {/* <AnalyticsHero/> */}
        {/* <LoanHero/> */}
        <ContactUs />
    </div>
  )
}

export default Home