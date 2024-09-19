import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar className='border-b-[1px] '>
        <h1 className='text-[3rem]'>Prime budget</h1>
    </Navbar>
  )
}

export default NavigationBar