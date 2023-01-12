import React from 'react'
import List from './List'

function Main() {
    return (
        <>
            <div className="text-white pl-32 pb-16 pt-16 bg-[#27221C]">
                <p className='text-[19px] font-[600]'>Tv Bland</p>
                <p className='text-gray-300 flex align-center py-10 tracking-[1px] align-left'>
                    TV Shows and web series database.
                    <br />
                    Create personalised schedules. Episode guid, cast, crew and
                    <br />
                    character information.
                </p>
                <p className='text-[24px]'>Last Added Shows</p>
            </div>
            <List />
        </>
    )
}

export default Main