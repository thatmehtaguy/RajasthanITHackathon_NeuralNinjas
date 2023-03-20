import React from 'react'
import Intro from '../A_homecomponents/Intro'
import MarketplaceHero from '../A_homecomponents/MarketplaceHero'
import AnalyticsHero from '../A_homecomponents/AnalyticsHero'
import LoanHero from '../A_homecomponents/LoanHero'
import ContactUs from '../A_homecomponents/ContactUs'


function Home() {
  return (
    <div>
        <Intro />
        <MarketplaceHero/>
        <AnalyticsHero/>
        <LoanHero/>
        <ContactUs />
    </div>
  )
}

export default Home