import React from 'react'
import {
  About,
  Banner,
  Faq,
  Features,
  Lead,
  Speakers,
  Sponsors,
  Staff,
  Tickets,
} from '../sections'

import content from '../data/content'

import './Home.scss'
import Partners from '../sections/Partners'
import Program from '../sections/Program'

const Home = () => (
  <main className='home'>
    <Banner {...content.banner} />
    <Lead />
    <About />
    <Features />
    <Speakers />
    <Tickets />
    <Program />
    <Sponsors />
    <Faq />
    <Staff />
    <Partners />
  </main>
)

export default Home
