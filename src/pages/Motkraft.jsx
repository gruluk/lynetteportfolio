import React from 'react'
import motkraft_in_head from '../Assets/motkraft-in-head.png'
import motkraft_app_1 from '../Assets/motkraft-app-1.png'
import motkraft_app_2 from '../Assets/motkraft-app-2.png'
import user_test from '../Assets/user-test.png'
import fire_flower from '../Assets/fire-flower.png'
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

            <div className='max-w-screen-lg mx-auto flex flex-row justify-center space-x-40 mt-28 px-20'>

                <div className='mt-10 text-[30px]'>
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

            {/* Process */}

            <div className='max-w-screen-lg mx-auto flex flex-row justify-center space-x-28 mt-28 px-20'>

                <div className='text-[30px]'>
                    <p className='justify-start'>Research & Design Thinking</p>
                </div>

                <div className='space-y-10 justify-start'>

                    <div className='flex justify-start space-x-16'>
                        <div>
                            <p className="text-lynette-red">1.</p>
                            <p>Competitive analysis</p>
                        </div>
                        <div>
                            <p className="text-lynette-red">2.</p>
                            <p>Customer journey</p>
                        </div>
                    </div>

                    <div className='flex justify-start space-x-36'>
                        <div>
                            <p className="text-lynette-red">3.</p>
                            <p>Personas</p>
                        </div>
                        <div>
                            <p className="text-lynette-red">4.</p>
                            <p>User interviews</p>
                        </div>
                    </div>

                    <div className='flex justify-start space-y-20'>
                        <div>
                            <p className="text-lynette-red">5.</p>
                            <p>Sketches and Wireframing</p>
                        </div>
                        <div>
                            <p className="text-lynette-red">6.</p>
                            <p>Information archetecture</p>
                        </div>
                    </div>
                    
                    <div className='flex justify-start'>
                        <div>
                            <p className="text-lynette-red">7.</p>
                            <p>User testing</p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>

                    <div className='max-w-screen-lg flex mt-10 mb-10 px-20'>
                        <p>By synthesising the research findings, we were able to identify several key areas for improvement in the app redesign. </p>
                    </div>

                </div>

            </div>

            {/* user test */}

            <div className='max-w-screen-lg mx-auto flex flex-col mt-28 px-20'>
                <div>
                    <img src={user_test} alt="my profile" className=' w-54 md:w-96' />
                </div>
                <p className='text-[13px] justify-center'>
                    Board of notes after user testing some of our customers
                </p>

                <div className='mt-28 px-20'>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                        <p className="text-lynette-red">1.</p>
                        <p>Simplify the app's navigation to make it easier for users to find speciffic features.</p>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                        <p className="text-lynette-red">2.</p>
                        <p>Remove clutter. There were several screens connected in the app that had no functionality</p>
                    </div>

                    <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                        <p className="text-lynette-red">3.</p>
                        <p>Addressing remaining pain points identified through usability testing.</p>
                    </div>

                    <div className='max-w-screen-lg flex mt-10 mb-10 px-20'>
                        <p>By synthesising the research findings, we were able to identify several key areas for improvement in the app redesign. </p>
                    </div>
                </div>

            </div>

        {/* Version Fire Flower */}
        <div className='mt-10 mb-28 flex justify-center'>
            <h1 className="text-[25px]">Version Fire Flower</h1>
        </div>

        <div className='flex justify-center'>
            <img src={fire_flower} alt="my profile" className=' w-32 md:w-96' />
        </div>

        <div className='flex justify-center mt-10 mb-10 ml-72 mr-72'>
            <p className='text-[14px]'>The application is still in development and I am working closely with the product owner to finalise this project before taking on new exciting adventures.</p>
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

        {/* Reach goal? */}

        <div className='mt-20 mb-28 max-w-screen-lg mx-auto px-20 items-center'>
            <h1 className="text-[20px]">Reach goals?</h1>
        </div>

        <div className='mt-28 px-20'>

            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                <p className="">1.</p>
                <p>New brand identity - collaborated with Workhorse AS</p>
            </div>

            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                <p className="">2.</p>
                <p>Complete new navigation and information architecture</p>
            </div>

            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                <p className="">3.</p>
                <p>Includes more functionality in order for the users to havea more interactive and informational experience with their energy consumption</p>
            </div>

            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                <p className="">4.</p>
                <p>Rating went from .. in App stor and .. in Google play to </p>
            </div>

            <div className='max-w-screen-lg mx-auto flex items-center mt-10 mb-10 px-20 space-x-5'>
                <p className="">5.</p>
                <p>Customers are more content with their application and has positive feedback regarding both the dark and light mode</p>
            </div>

        </div>

        {/* Lessons */}
        <div className='mt-20 mb-10 max-w-screen-lg mx-auto px-20 items-center'>
            <h1 className="text-[20px]">Lessons</h1>
        </div>

        <div className='max-w-screen-lg mx-auto px-20 items-center mb-10'>
            <div className='text-[14px] whitespace-pre-line'>Working on Motkrafts application as the only designer and being a fulltime student working on a bachelors degree in interaction design has been challenging but extremely rewarding. I have learnt a lot about both myself and how to navigate working on an app that is in constant change with a hectic environment where we had to deliver good results often. 

            The app is still in evolvement and new tasks are added everyday. </div>
        </div>

    </div>
    

    
    );
}

export default Motkraft;