import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom';

function List() {
    const [data, setData] = useState();
    const route = useNavigate();
    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows').then(response => {
            setData(response?.data)
        })
            .catch(error => {
                console.error(error);
            })
    }, [])
    return (
        <>
            <p className='mt-4 z-100 absolute top-[250px] pl-4 pt-4 md:pt-0 md:pl-32 text-[#27221C] md:text-[#ffffff] md:mt-0 text-[24px]'>Last Added Shows</p>
            <div className='z-10 absolute justify-center top-[270px] md:mx-[80px] flex flex-wrap gap-2'>
                <br />
                {
                    data && data.length && data.map((data) => (
                        <div onClick={() => { route("/show/bcdjkbcsdjbcjkds") }} className='mt-8 transition ease-in-out w-[160px] mt-[70px] mx-4 delay-300 cursor-pointer hover:scale-110 '>
                            <img width={160} height={225} src={data.image.medium} alt="" />
                            <div class="flex items-center gap-2 text-[14px] mt-2 text-gray-500">
                                <p class="text-[#F79B34] text-[20px]">★</p><p class="text-[#F79B34] text-[20px]">★</p><p class="text-[#F79B34] text-[20px]">★</p><p class="text-[20px]">★</p><p class="text-[20px]">★</p>
                            </div>
                            <p className='mt-4 w-[180px]'>{data.summary.toString().replace(/(<([^>]+)>)/gi, "").substring(0, 70) + "..."}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default List