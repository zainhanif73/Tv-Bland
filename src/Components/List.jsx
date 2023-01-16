import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../Utils/Axios'

function List() {
    const [data, setData] = useState();
    const route = useNavigate();

    useEffect(() => {
        fetchData('https://api.tvmaze.com/shows').then(response => {
            setData(response)
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
                        <div onClick={() => { route("/show/"+data.id) }} className='mt-8 transition ease-in-out w-[160px] mt-[70px] mx-4 delay-300 cursor-pointer hover:scale-110 '>
                            <img width={160} height={225} src={data.image.medium} alt="" />
                            <div class="flex items-center gap-2 text-[14px] mt-2 text-gray-500">
                                <p class={data.rating.average>2? "text-[#F79B34] text-[20px]" :"text-[20px]"}>★</p>
                                <p class={data.rating.average>4? "text-[#F79B34] text-[20px]" :"text-[20px]"}>★</p>
                                <p class={data.rating.average>6? "text-[#F79B34] text-[20px]" :"text-[20px]"}>★</p>
                                <p class={data.rating.average>8? "text-[#F79B34] text-[20px]" :"text-[20px]"}>★</p>
                                <p class={data.rating.average>9? "text-[#F79B34] text-[20px]" :"text-[20px]"}>★</p>

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