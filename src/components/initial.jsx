import React from 'react'

export default function Initial({feeds,clickfeed}) {
  return (
    <div className='flex justify-around'>
        <div>
      <div className='h-[40vh] w-full flex justify-center'>
        <img src="https://i.pinimg.com/originals/a5/ff/6d/a5ff6d9555aaab304b82dbbeb097d70e.png" alt="" className='h-52'/>
      </div>
      <div className='grid grid-cols-2 m-5 gap-4 '>
        {feeds.map(e=>{
            return(
                <button className='w-[100%] bg-black opacity-70 hover:opacity-90 text-white p-3 rounded-lg' onClick={()=>clickfeed(e)}>
                    {e.message}
                </button>
            )
        })}
      </div>
      </div>
    </div>
  )
}
