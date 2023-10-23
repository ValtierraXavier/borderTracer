import React, {useState, useEffect} from 'react';
import './SquareClockwise.css'

export default function SquareClockwise (){
let num, 
    bigDeg = 0,
    numDeg = 0;
  
  const [thing, setThing] = useState(),
        [moveInt, setMoveInt] = useState(),
        [running, setRunning] = useState(false),
        [corner, setCorner] = useState(0)


  const start = () => {
    num = corner
    setRunning(prev => prev = true)
    follow()
    setMoveInt(setInterval(follow, 1200))
  }

  const pause = () => {
    clearInterval(moveInt)
    setRunning(prev => prev = false)
  }
  
  //Increments num and uses as case to move the smallDiv from corner to corner. 
  const follow  = () => {
    const bigone = document?.getElementById('bigOne')
    const smallone = document?.getElementById('smallOne')
    switch (num) {
        case 0:
            num++
            bigDeg += 1
            numDeg -= 1
            setThing(prev => prev = num)
            setCorner(prev => prev = num)
            smallone.style.backgroundColor = 'rgba(0,0,0,1)'
            smallone.style.top = `0px`
            smallone.style.right = `0px`  
            smallone.style.bottom = `${(bigone.offsetHeight - bigone.offsetHeight)}px`
            smallone.style.left = `${(bigone.clientWidth - smallone.offsetWidth)}px`
        break;
        case 1:
            num++
            bigDeg += 1
            numDeg -= 1
            setThing(prev => prev = num)
            setCorner(prev => prev = num)
            smallone.style.top = `${(bigone.clientHeight - smallone.offsetHeight)}px`
            smallone.style.right = '0px'
            smallone.style.bottom = `0px`
            smallone.style.left = `${(bigone.width + smallone.offsetWidth)}px`
        break;
        case 2:
            num++
            bigDeg += 1
            numDeg -= 1
            setThing(prev => prev = num)
            setCorner(prev => prev = num)
            smallone.style.top = `${bigone.clientHeight - (smallone.offsetHeight)}px`
            smallone.style.left = `0px`
            smallone.style.bottom = `0px`
            smallone.style.right = `${bigone.width}px`
            
        break;
        default:
            num++
            bigDeg += 1
            numDeg -= 1
            setThing(prev => prev = num)
            setCorner(prev => prev = num)
            smallone.style.backgroundColor = 'rgba(0,0,0,0)'
            smallone.style.top = `0px`
            smallone.style.right = `${bigone.offsetWidth}px`
            smallone.style.bottom = `${bigone.offsetHeight}px`
            smallone.style.left = `0px`
            num = 0
            setThing(prev => prev = num)
        break;           
    }
}

  return (
    <div className="SquareClockwise" onClick = {running == false ? start : pause} >
      {/* <button onClick={start} >do</button> */}
      <div id = 'bigOne'>
        <div id = 'number'>{thing}</div>
        <div id = 'smallOne'></div>
      </div>
      
    </div>
  );
}