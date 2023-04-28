import React, { useEffect } from 'react'

import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    useEffect(()=>{
     if(!localStorage.getItem('otp-verfied')){
        navigate('/otp-verify')
     }   
    },[])
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}

export default Home
