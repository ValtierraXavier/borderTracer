import React, { useEffect, useState } from "react"
import './Clock.css'

export default function Clock () {
    const [reset, setReset] = useState()
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [running, setRunning] = useState(false)
    const [checkTimeInterval, setCheckTimeInterval] = useState(null)

    
    
    const getTime = () => {  
        setRunning(prev => prev = true)
        setCheckTimeInterval(setInterval(whatsTheTime, 1000))
    }

    const stopTime = () => {
        setRunning(prev => prev = false)
        clearInterval(checkTimeInterval)
    }

    const whatsTheTime = () => {
        const secondsDiv = document?.getElementById('seconds')
        const secondsDiv2 = document?.getElementById('secondsTwo')
        const minutesDiv = document?.getElementById('minutes')
        const minutesDiv2 = document?.getElementById('minutesTwo')
        const hoursDiv = document?.getElementById('hours')
        const hoursDiv2 = document?.getElementById('hoursTwo')
        const date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        
        
        const secondsDeg = ((seconds * 6) * (Math.PI)/180)
        secondsDiv.style.rotate = `${secondsDeg}rad`
        const minutesDeg = minutes === 59 ? -1 * 6 : minutes * 6
        minutesDiv.style.rotate = `${minutesDeg}deg`
        // const hoursDeg = hours * 30
        // hoursDiv.style.rotate = `${hoursDeg}deg`
        
        setTime(prev => prev = {
            ...time,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
            
    }



    useEffect(()=>{getTime()},[])

    return(
        <div className = "Clock" onClick = {!running ? getTime : stopTime}>

                    {/* {time.hours} */}
                    {time.hours !== 12 ?
                        <div className = 'time hours' id = 'hours'>
                            <div className = 'hands' id = 'hourHand'></div>
                        </div>
                        :
                        <div className = 'time hours' id = 'hoursTwo'>
                            <div className = 'hands' id = 'hourHand'></div>
                        </div>
                    }
                    {/* {time.minutes} */}
                    {time.minutes !== 59 ?                        
                        <div className = 'time minutes' id = 'minutes'>
                            <div className = 'hands' id = 'minuteHand'></div>
                        </div>
                        :
                        <div className = 'time minutes' id = 'minutesTwo'>
                            <div className = 'hands' id = 'minuteHand'></div>
                        </div>
                    }
                    {/* {time.seconds} */}
                    {time.seconds !== 59 ?                        
                        <div className = 'time seconds' id = 'seconds'>
                            <div className = 'hands' id = 'secondHand'></div>
                        </div>
                        :
                        <div className = 'time seconds' id = 'secondsTwo'>
                            <div className = 'hands' id = 'secondHand'></div>
                        </div> 
                    }
            </div>
    )
}