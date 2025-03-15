import React from 'react'
import CategoryCarousel from '../components/CategoryCarusel'
import LatestJobs from '../components/LatestJobs'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
    </div>
  )
}

export default Home
