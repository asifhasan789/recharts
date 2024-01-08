import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AreaComp from './component/AreaComp'
import BarComp from './component/BarComp'
import LineComp from './component/LIneComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center gap-5 m-10 border border-black p-4 rounded-lg">
      <h1 className='font-bold text-2xl'>Develop 3 charts using re charts library in react js.</h1>
      <h1 className="font-semibold text-xl">
        These Charts displays the data of number of domestic and
        international passengers travelled in millions for each respective year. (INDIA)
      </h1>
      <LineComp />
      <BarComp />
      <AreaComp />
    </div>
  );
}

export default App
