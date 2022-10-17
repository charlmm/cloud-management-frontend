import React from 'react'
import { FaFacebook, FaTwitter, FaGithub, FaTwitch, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-4 px-2'>
        <div className='max-w-[1240px] mx-4 grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    {['Marketing','Analytics','Commerce','Data','Cloud'].map((item) => (
                        <li key={item} className='py-1 px-0'>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    {['Pricing','Documentation','Guides','Api Status'].map((item) => (
                        <li key={item} className='py-1 px-0'>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul className='justify-start items-start'>
                    {['About','Blog','Jobs','Press','Partners   '].map((item) => (
                        <li key={item} className='py-1 px-0'>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    {['Claims','Privacy','Terms','Policies','Conditions'].map((item) => (
                        <li key={item} className='py-1 px-0'>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                <p className='py-4'>The latest news, articles, and resources sent to your inbox weekly.</p>
                <form className='flex flex-col md:flex-row'>
                    <input type="email" className='w-full p-2 mr-4 rounded-md mb-4'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex max-w-[1240px] m-auto justify-between sm:flex-row flex-col text-center text-gray-500'>
            <p className='pt-4'>2022 Workflow, LLC. All rights reserved</p>
            <div className='flex justify-between sm:max-w-[300px] pt-4 text-2xl text-white'>
                <FaFacebook className='w-6 ml-2'/>
                <FaTwitter className='w-6 ml-2'/>
                <FaGithub className='w-6 ml-2'/>
                <FaInstagram className='w-6 ml-2'/>
                <FaTwitch className='w-6 ml-2'/>
            </div>
        </div>
    </div>
  )
}

export default Footer