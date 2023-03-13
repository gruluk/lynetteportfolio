import React from "react";
import user_test from '../Assets/user-test.png'
import profile from '../Assets/profile.png'
import linkedin from '../Assets/linkedin.png'
import contact from '../Assets/contact.png'
import { Link, BrowserRouter, Routes } from 'react-router-dom'

function About() {
    return (
        <div class="max-w-screen-lg mx-auto flex flex-row items-center justify-center mt-3 px-20">

            <div>
                <img src={profile} className='w-auto mr-64' />
            </div>


            <div className="mt-44">
            <p className='text-[30px] font-bold ml-20 mx-auto'>
                Hi, I'm Lynette, a passionate interface and experience designer based in Oslo, Norway
            </p>
            <div className="px-20 ml-48 mt-32 flex">
                <img src={linkedin} className='' />
                <img src={contact} className='ml-5' />
            </div>
            </div>


            


        </div>
    );
};

export default About;