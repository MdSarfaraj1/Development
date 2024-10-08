import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import Weather from './Weather';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather/>
    
    </>
  )
}

export default App
