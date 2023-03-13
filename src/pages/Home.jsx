import React from 'react'
import motkraft_head from '../Assets/motkraft-head.png'
import smidig_prosjekt from '../Assets/smidig-prosjekt-head.png'
import strom_applikasjon from '../Assets/strom-applikasjon.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link, BrowserRouter, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-white'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center mt-3 px-20'>
        <div>
          <Link to="/Motkraft">
            <img src={motkraft_head} alt="my profile" className='mx-auto w2/3 md:w-full' />
          </Link>
        </div>
        <p className='text-30px font-normal inline mt-3 w-full'>
            Motkraft
        </p>
        <p className='w-full text-30px font-normal text-description '>
          App design
        </p>

        <div class="flex flex-col md:flex-row mt-4 space-x-16">

          <div>
            <Link to="/Motkraft">
              <img src={smidig_prosjekt} alt="smidig prosjekt" className='mx-auto w2/3 md:w-full' />
            </Link>
            <p className='text-30px font-normal inline mt-3 w-full'>
            Smidig prosjekt 2021-2022
            </p>
            <p className='w-full text-30px font-normal text-description '>
              App design
            </p>
          </div>


          <div>
             <Link to="/Motkraft">
              <img src={strom_applikasjon} alt="strom applikasjon" className='mx-auto w2/3 md:w-full' />
          </Link>
            <p className='text-30px font-normal inline mt-1 w-full'>
              Interaction design exam
            </p>
            <p className='w-full text-30px font-normal text-description '>
              Redesign of App
            </p>
          </div>

        </div>

      </div>




    </div>
    

    
  )
}

export default Home
