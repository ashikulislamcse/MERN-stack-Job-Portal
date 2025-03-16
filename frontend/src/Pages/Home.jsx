import React, { useEffect } from 'react'
import LatestJobs from '../components/LatestJobs'
import HeroSection from '../components/HeroSection'
import useGetAllJobs from '../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <HeroSection/>
      <LatestJobs/>
    </div>
  )
}

export default Home
