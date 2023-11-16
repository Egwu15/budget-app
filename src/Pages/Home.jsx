import React from 'react'
import {Input, Button} from "@material-tailwind/react";


function Home() {
  return (
    <div>

      <div className='flex justify-center pt-10 text-3xl text-green-500 hover:text-green-700 hover:font-bold'>Welcome Home</div>

     


      <div className='flex justify-center mt-10'>


        <Button className=' bg-green-500 hover:bg-red-500'>Button</Button>


      </div>


    </div>
  )
}

export default Home