import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const PricingSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="mt-20 ">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((pr,index)=>(
                <div key="index" className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-l-xl">
                        <p className="text-4xl mb-8">{pr.title}
                            {pr.title ==="Pro" && (
                                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">
                                {pr.price}
                            </span>
                            <span className="text-neutral-400 tracking-tight">
                                /Month
                            </span>
                        </p>
                        <ul>
                            {pr.features.map((f, index)=>(
                                <li key="index" className="mt-8 flex items-center">
                                    <CheckCircle2 />
                                    <span className="ml-3">
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default PricingSection