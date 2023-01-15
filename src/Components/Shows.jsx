import React from 'react'
import { useNavigate } from 'react-router-dom'
import SVG from '../Svg/BackArrow'

function Shows() {
  const navigate = useNavigate();
  return (
    <>
      <div className='z-100 absolute top-[170px] ml-24'>
        <img width={200} height={280} src="https://tv-maze-sooty.vercel.app/_next/image?url=https%3A%2F%2Fstatic.tvmaze.com%2Fuploads%2Fimages%2Fmedium_portrait%2F81%2F202627.jpg&w=2048&q=75" alt="" />
      </div>
      <div className="text-white pb-4 pl-24 md:pb-16 pt-16 bg-[#27221C]">
        <p className='text-[19px] flex gap-1 font-[600]'><span className='cursor-pointer' onClick={() => navigate("/")}><SVG /></span>Tv Bland</p>
        <div class="flex items-center pl-56 mt-16 gap-2 text-[14px] mt-2 text-gray-500">
          <p class="text-[#F79B34] text-[20px]">★</p><p class="text-[#F79B34] text-[20px]">★</p><p class="text-[#F79B34] text-[20px]">★</p><p class="text-[20px]">★</p><p class="text-[20px]">★</p>
          <p>6.5/10</p>
        </div>
        <p className='pl-56 text-[24px]'>Under the Dome</p>
        <p className='pl-56 text-gray-300 text-[#D1D5D8] flex align-center pb-10 tracking-[1px] align-left'>
          Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.
        </p>
      </div>
      <div className='flex flex-wrap justify-around'>
        <div>
          <p className='font-[600] mt-16 ml-[96px]'>
            Show Info
          </p>
          <div className='w-[500px] mt-4 ml-[106px] '>
            <div className='flex justify-between my-4'>
              <p className='font-[500]'>Streamed on</p>
              <p className='text-gray-500'>CBS</p>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
          </div>
          <div className='w-[500px] mt-4 ml-[106px] '>
            <div className='flex justify-between my-4'>
              <p className='font-[500]'>Schedule</p>
              <p className='text-gray-500'>Tuesday 22:00</p>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
          </div>
          <div className='w-[500px] mt-4 ml-[106px] '>
            <div className='flex justify-between my-4'>
              <p className='font-[500]'>Status</p>
              <p className='text-gray-500'>Ended</p>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
          </div>
          <div className='w-[500px] mt-4 ml-[106px] '>
            <div className='flex justify-between my-4'>
              <p className='font-[500]'>Genres</p>
              <p className='text-gray-500'>Action-Crime-Science-Fiction</p>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
          </div>
        </div>
        <div className='mr-16 mb-32'>
        <p className='font-[600] mt-16 '>
            Staring
          </p>
          <div className='font-[600]'>
            <div class="flex items-center w-[500px] justify-between text-[14px] my-4">
              <img class="rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/2/6581.jpg" alt="showcover" />
              <div class="flex items-center w-[50%] justify-between">
                <p class="font-[500] ml-[-100px]">James Caviezel</p>
                <p class="text-gray-500">John Reese</p>
              </div>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
            <div class="flex items-center w-[500px] justify-between text-[14px] my-4">
              <img class="rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/2/6581.jpg" alt="showcover" />
              <div class="flex items-center w-[50%] justify-between">
                <p class="font-[500] ml-[-100px]">James Caviezel</p>
                <p class="text-gray-500">John Reese</p>
              </div>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
            <div class="flex items-center w-[500px] justify-between text-[14px] my-4">
              <img class="rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/2/6581.jpg" alt="showcover" />
              <div class="flex items-center w-[50%] justify-between">
                <p class="font-[500] ml-[-100px]">James Caviezel</p>
                <p class="text-gray-500">John Reese</p>
              </div>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
            <div class="flex items-center w-[500px] justify-between text-[14px] my-4">
              <img class="rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/2/6581.jpg" alt="showcover" />
              <div class="flex items-center w-[50%] justify-between">
                <p class="font-[500] ml-[-100px]">James Caviezel</p>
                <p class="text-gray-500">John Reese</p>
              </div>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
            <div class="flex items-center w-[500px] justify-between text-[14px] my-4">
              <img class="rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/2/6581.jpg" alt="showcover" />
              <div class="flex items-center w-[50%] justify-between">
                <p class="font-[500] ml-[-100px]">James Caviezel</p>
                <p class="text-gray-500">John Reese</p>
              </div>
            </div>
            <hr className='bg-gray-400 mt-2 h-[2px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shows