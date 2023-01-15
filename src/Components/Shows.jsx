import React from 'react'
import { useNavigate } from 'react-router-dom'
import SVG from '../Svg/BackArrow'

function Shows() {
  const navigate = useNavigate();
  return (
    <>
      <div className='z-100 absolute top-[140px] ml-24'>
        <img width={200} height={280} src="https://tv-maze-sooty.vercel.app/_next/image?url=https%3A%2F%2Fstatic.tvmaze.com%2Fuploads%2Fimages%2Fmedium_portrait%2F81%2F202627.jpg&w=2048&q=75" alt="" />
      </div>
      <div className="text-white pb-4 pl-24 md:pb-16 pt-16 bg-[#27221C]">
      <p className='text-[19px] flex gap-1 font-[600]'><span className='cursor-pointer' onClick={()=>navigate("/")}><SVG/></span>Tv Bland</p>
        <div class="flex items-center pl-56 mt-16 gap-2 text-[14px] mt-2 text-gray-500">
          <p class="text-[#F79B34] text-[20px]">★</p><p class="text-[#F79B34] text-[20px]">★</p><p class="text-[#F79B34] text-[20px]">★</p><p class="text-[20px]">★</p><p class="text-[20px]">★</p>
          <p>6.5/10</p>
        </div>
        <p className='pl-56 text-[24px]'>Under the Dome</p>
        <p className='pl-56 text-gray-300 text-[#D1D5D8] flex align-center pb-10 tracking-[1px] align-left'>
          Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.
        </p>
      </div>
      <div>
        Show Info
      </div>
    </>
  )
}

export default Shows