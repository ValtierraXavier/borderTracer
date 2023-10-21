import React, { useState } from 'react';
import './App.css';

function App() {
  let int, num = 0
  const [thing, setThing] = useState()

  const start = () => {
    int = setInterval(follow, 200)
  }
  
  const follow  = () => {
    const bigone = document?.getElementById('bigOne')?.getBoundingClientRect()
    const smallone = document?.getElementById('smallOne')
    if(num === 3){
      num = 0
      if(num === 0){
        smallone.style.top = `0px`
        smallone.style.left = `0px`
        smallone.style.right = `${bigone.width}px`
        smallone.style.bottom = `${bigone.height}px`
      }
      setThing(prev => prev = num)
    }else{      
      num++
      setThing(prev => prev = num)
      if(num === 1){
        smallone.style.right = `0px`  
        smallone.style.top = `0px`
        smallone.style.bottom = `${bigone.height - 26}px`
        smallone.style.left = `${bigone.width - 26}px`
      }else if(num === 2){
              smallone.style.bottom = `0px`
              smallone.style.right = '0px'
              smallone.style.left = `${bigone.width - 26}px`
              smallone.style.top = `${bigone.height - 26}px`
            }else if(num === 3){
                    smallone.style.bottom = `0px`
                    smallone.style.left = `0px`
                    smallone.style.right = `${bigone.width - 26}px`
                    smallone.style.top = `${bigone.height - 26}px`
                  }
                }
      
  }

  return (
    <div className="App">

      <button onClick={start}>do</button>
      <div id = 'bigOne'>{thing}
        <div id = 'smallOne'></div>
      </div>
      
    </div>
  );
}

export default App;
