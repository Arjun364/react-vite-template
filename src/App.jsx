import { useState } from 'react'
import { MdEditDocument } from "react-icons/md";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <h1 className="text-3xl font-bold underline flex items-center gap-4  ">
        Project template
        <MdEditDocument />
      </h1>
    </div>
  )
}

export default App
