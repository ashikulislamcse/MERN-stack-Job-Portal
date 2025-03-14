import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import CategoryCarousel from '../components/CategoryCarusel'
import LatestJobs from '../components/LatestJobs'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
