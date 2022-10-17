import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-semibold text-white py-8'>The right place for your research.</h3>
                <p>Learning react and web 3 development feels like the right thing to do right now!</p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white m-4 text-slate-900 p-8 shadow-2xl relative rounded-xl'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-5xl font-semibold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span> </p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Learning react and web 3 development feels like the right thing to do right now!</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white m-4 text-slate-900 p-8 shadow-2xl relative rounded-xl'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-5xl font-semibold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span> </p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Learning react and web 3 development feels like the right thing to do right now!</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Check solidity & alchemy</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing