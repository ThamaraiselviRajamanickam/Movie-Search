import { useState } from 'react'

import './App.css'
import Home from './Component/Home'
import Samplefectch from './Component/Samplefectch'
import Search from './Component/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <Home/>
      {/* <Samplefectch/> 
      <Search/>  */}
    </>
  );
}

export default App
