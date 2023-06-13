import React from 'react'
import TopBar from '../components/TopBar/TopBar';
import Feed from '../components/Feed/Feed';
import RightBar from '../components/RightBar/RightBar';
import SideBar from '../components/SideBar/SideBar';
import './Home.css'
function Home() {
  return (

    <div>
      <TopBar />
       <div className='home-container'>
        <SideBar/>
        <Feed />
        <RightBar />
      </div>
  </div> 
  )
}
export default Home;