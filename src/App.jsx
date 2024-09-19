import { useState } from 'react'
import { MdEditDocument } from "react-icons/md";
import './App.css'
import { Button } from 'flowbite-react';
import NavigationBar from './Components/Navigation/NavigationBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <NavigationBar/>
      <h1 className="text-3xl font-bold underline flex items-center gap-4  ">
        Project template
        <MdEditDocument />
      </h1>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 " pill>
        Custom Button
      </Button>
    </div>
  )
}

export default App
