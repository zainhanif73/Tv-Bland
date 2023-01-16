import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SVG from '../Svg/BackArrow'
import { fetchData } from '../Utils/Axios'

function Shows() {
  const navigate = useNavigate();
  const [character, setCharacter] = useState()
  const [stream, setStream] = useState()

  useEffect(() => {
    let id = window.location.pathname.split('/').at(-1)

    fetchData(`https://api.tvmaze.com/shows/${id}/cast`).then(response => {
      setCharacter(response)
    })
      .catch(error => {
        console.error(error);
      });

    fetchData(`https://api.tvmaze.com/shows/${id}`).then(response => {
      setStream(response)
    })
      .catch(error => {
        console.error(error);
      });
  }, [])
  return (
    <>
      {
        stream && <>
          <div className='text-white pb-4 pl-8 md:pl-8 md:pb-8 pt-8  bg-[#27221C]'>
            <p className='text-[19px] md:hidden flex gap-1 font-[600]'><span className='cursor-pointer' onClick={() => navigate("/")}><SVG /></span>Tv Bland</p>
            <div className='z-100 pt-8 md:pt-0 md:absolute top-[170px] md:ml-24 '>
              <img width={200} height={280} className="rounded hidden md:block object-cover" src={stream.image?.original} alt="" />
              <img style={{ marginLeft: "-6px" }} class="rounded object-cover pr-[20px] w-full md:hidden" src={stream.image?.original} alt="showcover"></img>
            </div>
            <div className="text-white pb-4 md:pl-24 md:pb-8 pt-16 bg-[#27221C]">
              <p className='hidden md:flex text-[19px] flex gap-1 font-[600]'>
                <span className='hidden md:block cursor-pointer' onClick={() => navigate("/")}><SVG />
                </span>
                Tv Bland
              </p>
              <div class="flex items-center md:pl-56 mt-16 gap-2 text-[14px] mt-2 text-gray-500">
                <p class={stream?.rating.average > 2 ? "text-[#F79B34] text-[20px]" : "text-[20px]"}>★</p>
                <p class={stream?.rating.average > 4 ? "text-[#F79B34] text-[20px]" : "text-[20px]"}>★</p>
                <p class={stream?.rating.average > 6 ? "text-[#F79B34] text-[20px]" : "text-[20px]"}>★</p>
                <p class={stream?.rating.average > 8 ? "text-[#F79B34] text-[20px]" : "text-[20px]"}>★</p>
                <p class={stream?.rating.average > 9 ? "text-[#F79B34] text-[20px]" : "text-[20px]"}>★</p>
                <p>{stream?.rating.average}/10</p>
              </div>
              <p className='md:pl-56 text-[24px]'>{stream?.name}</p>
              <p className='md:pl-56 text-gray-300 text-[#D1D5D8] flex align-center pb-10 tracking-[1px] align-left'>
                {stream.summary.toString().replace(/(<([^>]+)>)/gi, "")}
              </p>
            </div>
          </div>
          <div className='flex flex-wrap justify-around'>
            <div>
              <p className='font-[600] mt-16 md:ml-[96px]'>
                Show Info
              </p>
              <div className='w-[350px] md:w-[500px] mt-4 md:ml-[106px] '>
                <div className='flex justify-between my-4'>
                  <p className='font-[500]'>Streamed on</p>
                  <p className='text-gray-500'>{stream.network.name}</p>
                </div>
                <hr className='bg-gray-400 h-[2px]' />
              </div>
              <div className='w-[350px] md:w-[500px] mt-4 md:ml-[106px] '>
                <div className='flex justify-between my-4'>
                  <p className='font-[500]'>Schedule</p>
                  <p className='text-gray-500'>{stream?.schedule?.days[0] + " " + stream?.schedule?.time}</p>
                </div>
                <hr className='bg-gray-400 h-[2px]' />
              </div>
              <div className='w-[350px] md:w-[500px] mt-4 md:ml-[106px] '>
                <div className='flex justify-between my-4'>
                  <p className='font-[500]'>Status</p>
                  <p className='text-gray-500'>{stream.status}</p>
                </div>
                <hr className='bg-gray-400 h-[2px]' />
              </div>
              <div className='w-[350px] md:w-[500px] mt-4 md:ml-[106px] '>
                <div className='flex justify-between my-4'>
                  <p className='font-[500]'>Genres</p>
                  <p className='text-gray-500'>{stream.genres.join(" - ")}</p>
                </div>
                <hr className='bg-gray-400 h-[2px]' />
              </div>
            </div>
            <div className='md:mr-16 mb-32'>
              <p className='font-[600] mt-16 '>
                Staring
              </p>
              <div className='font-[600]'>
                {character && character.length && character.map((data) => (
                  <>
                    <div class="flex items-center w-[350px] md:w-[500px] justify-between text-[14px] my-4">
                      <img class="rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover" src={data?.person?.image?.medium} alt="showcover" />
                      <div class="flex items-center w-[50%] justify-between">
                        <p class="font-[500] ml-[-100px]">{data?.person?.name}</p>
                        <p class="text-gray-500">{data.character.name}</p>
                      </div>
                    </div>
                    <hr className='bg-gray-400 h-[2px]' />
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Shows