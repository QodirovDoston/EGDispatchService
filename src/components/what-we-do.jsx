import React from 'react'
import ForWeDoCard from './for-we-do-card';
import { persondata } from '../utils';

const WhatWeDo = () => {
    
  return (
    <div className='text-center'>
        <h1 className='text-text-color text-2xl mt-10 mb-2'>What We Do</h1>
        <p className='text-text-color text-md'>We are the best in the industry at negotiating the highest paying rates and finding the best loads to meet your needs.</p>
        <p className='text-text-color text-md mb-10 mt-2'>Let our dedicated and experienced <span className='text-primary'> dispatchers</span> save you time and make you money so all you have to do is DRIVE!</p>
        <ForWeDoCard  data={persondata} sty='mx-auto'/>
    </div>
  )
}

export default WhatWeDo;