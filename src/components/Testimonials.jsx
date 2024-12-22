import React from 'react'
import {testimonials} from '../constants'
const Testimonials = () => {
  return (
    <div className="div mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying</h2>
        <div className="flex flex-wrap">
            {testimonials.map((t,index)=>(
                <div key={index} className="w-full lg:w-1/3 sm:w-1/2 py-2 px-4"> 
            <div className="div bg-neutral rounded-md p-6 text-md border-colour-neutral-800 font-thin">
                <p>{t.text}</p>
                <div className="flex mt-6 items-center">
                    <img src={t.image} className="rounded-full w-12 h-12 mr-6 border border-neutral-300"></img>
                    <div>
                    <h6>{t.user}</h6>
                    <span className="text-sm text-neutral-600 font-normal italic">
                        {t.company}
                    </span>
                    </div>
                </div>
            </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials