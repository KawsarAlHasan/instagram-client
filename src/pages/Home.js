import React from 'react'
import GetAllPost from '../components/GetAllPost'
import GetStory from '../components/GetStory'
import NavbarBottom from '../components/NavbarBottom'
import NavbarTop2 from '../components/NavbarTop2'
import RightSide from '../components/RightSide'

function Home() {
  return (
    <div>
      <div className="pb-10 md:pb-0">
        <NavbarTop2 />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <div className="my-8 flex justify-center">
            <GetStory />
          </div>
          <div className="my-8 flex justify-center">
            <GetAllPost />
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <RightSide />
        </div>
      </div>
      <NavbarBottom />
    </div>
  )
}

export default Home
