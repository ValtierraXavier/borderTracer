import React, {useState} from 'react'
import './SvgPractice.css'

export default function SvgPractice () {
    const [radius, setRaius] = useState(0)
    const [a, setA] = useState('')
    
    const pauseTime = (ms) => {
        return new Promise(
            resolve => setTimeout(()=>(resolve()), ms)
            )
        }
        
        const test = async () => {            
            let rads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25]
            
            try{
                for(let i = 0; i <= rads.length; i++){
                setRaius(prev => prev = rads[i])
                await pauseTime(100)
                if(i === rads.length){
                    for(let j = rads.length-1; j >= (0); j--){
                        setRaius(prev => prev = rads[j])
                        await pauseTime(100)
                        if(j == 0){
                            i = 0
                            if(i == 0){
                                j = rads.length-1
                            }
                        }
                }
            }
        }
            }catch(error){console.log(error)}

    }

    
    return(
        <div className='SvgPractice'>
            <svg className='circ' width="400" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="200" r={radius}/>    
            </svg>
            <button onClick = {test}>Click Me</button>
            <div>{a}</div>
        </div>
        )   
}