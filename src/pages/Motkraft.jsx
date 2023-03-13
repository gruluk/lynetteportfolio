import React from 'react'
import motkraft_in_head from '../Assets/motkraft-in-head.png'
import motkraft_app_1 from '../Assets/motkraft-app-1.png'
import motkraft_app_2 from '../Assets/motkraft-app-2.png'
import smidig_prosjekt from '../Assets/smidig-prosjekt-head.png'
import strom_applikasjon from '../Assets/strom-applikasjon.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link, BrowserRouter, Routes } from 'react-router-dom'

function Motkraft() {
    return (
    <div name='home' className='h-screen w-full bg-white'>
      
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center mt-3 px-20'>
            {/* Top image */}
            <div>
                <img src={motkraft_in_head} alt="my profile" className='mx-auto w2/3 md:w-full' />
            </div>
        
            {/* Image description */}
            <div className='flex flex-row justify-center space-x-20 mt-10'>
                <div className='flex flex-col space-y-2'>
                    <p className='text-[18px]'>Company</p>
                    <p className='text-[25px]'>Motkraft</p>
                </div>

                <div className='flex flex-col space-y-2'>
                    <p className='text-[18px]'>My role</p>
                    <p className='text-[25px]'>UX Design</p>
                    <p className='text-[25px]'>UI Desing</p>
                </div>

                <div className='flex flex-col space-y-2'>
                    <p className='text-[18px]'>Duration</p>
                    <p className='text-[25px]'>Internship summer of 2022</p>
                    <p className='text-[25px]'>Part-time job from September 2022</p>
                </div>

                <div className='flex flex-col space-y-2'>
                    <p className='text-[18px]'>Summary</p>
                    <p className='text-[25px]'>I lead UI and UX design on the Mokraft app</p>
                </div>
            </div>

        </div>

            {/* About Motkraft */}
            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                <h1 className="text-[25px] text-lynette-red">Motkraft</h1>
            </div>

            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                <p>Motkraft is a startup energy company making a great mark on the Norwegian population. They started as a non-profit organisation wanting to change the energy market which is highly motivated by money within the industry. Their goal is to keep the prices as low as possible and not earn money on their customers. </p>
            </div>

            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                <p>Their goal is to keep the prices as low as possible and not earn money on their customers. </p>
            </div>

            {/* Motkraft app images */}

            <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-center mt-28 px-20'>
                <div>
                    <img src={motkraft_app_1} alt="my profile" className='mx-auto w-24 md:w-48' />
                </div>

                <div>
                    <img src={motkraft_app_2} alt="my profile" className='mx-auto w-24 md:w-48' />
                </div>
            </div>

            {/* Problem statement and process */}

            <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-center space-x-80 mt-28 px-20'>

                <div>
                    <p></p>
                </div>

                <div>
                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                        <h1 className="text-[25px] text-lynette-red">Problem statement</h1>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                        <p>As their customer base continues to grow, with thousands of daily users on their app, and with exciting plans for business expansion, it became crucial to redesign their product to provide value both for their users and their business.</p>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                        <p>Motkraft had an existing app that was not meeting the needs of their users. They wanted to redesign the app to improve its usability, increase engagement, and grow its user base.</p>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                        <h1 className="text-[25px] text-lynette-red">NB!</h1>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20'>
                        <p>Throughout my tenure as a UX/UI designer at Motkraft, the complex project has undergone several sprints, scope changes, and shifts in priorities. Due to this, it's worth noting that this case study doesn't include all the information work. Some data is also not included due to confidentiality reasons.</p>
                    </div>
                </div>

            </div>

            {/* Project Goals */}

            <div className='max-w-screen-lg mx-auto flex flex-row justify-center space-x-28 mt-28 px-20'>

                <div className='mt-10 text-[40px]'>
                    <p className='hover:break-all'>Project Goals</p>
                </div>

                <div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                        <p className="text-lynette-red">1.</p>
                        <p>Create a satisfied and loyal customer base</p>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5 space-y-6'>
                        <p className="text-lynette-red">2.</p>
                        <p>Have a design that compliments the essence of Motkraft</p>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5 space-y-6'>
                        <p className="text-lynette-red">3.</p>
                        <p>Make their App effective and easy-to-use for their customers</p>
                    </div>
                    
                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                        <p className="text-lynette-red">4.</p>
                        <p>Increase rating on the App</p>
                    </div>
                </div>

            </div>


    </div>
    

    
    );
}

export default Motkraft;