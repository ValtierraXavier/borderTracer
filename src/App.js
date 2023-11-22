import React from 'react';
import './App.css';
import SquareClockwise from './Components/SquareClockwise/SquareClockwise.jsx';
import Clock from './Components/Clock/Clock.jsx'
import SvgPractice from './SVGPractice/svgPractice.jsx';
import CanvasPractice from './Components/CanvasPractice/CanvasPractice.jsx';
import Gridwork from './gridwork/Gridwork.jsx'

function App() {
  return(
    <div className = 'App'>
        {/* <Clock/> */}
        {/* <SvgPractice/> */}
        {/* <CanvasPractice/> */}
        <Gridwork/>
    </div>
  )
}

export default App;
