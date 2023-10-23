import React, { useEffect, useState } from "react"
import './Clock.css'

export default function Clock () {

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
        const secondsDiv = document.getElementById('seconds')
        const minutesDiv = document.getElementById('minutes')
        const hoursDiv = document.getElementById('hours')
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const secondsDeg = seconds * 6
        secondsDiv.style.rotate = `${secondsDeg}deg`
        const minutesDeg = minutes * 6
        minutesDiv.style.rotate = `${minutesDeg}deg`
        const hoursDeg = hours * 30
        hoursDiv.style.rotate = `${hoursDeg}deg`

        const currentTime = {
            ...time,
            hours: hours === 0 ? 12 : hours > 12 ? (hours - 12) : hours,
            minutes: minutes,
            seconds: seconds
        }
        setTime(prev => prev = currentTime)
    }



    useEffect(()=>{getTime()},[])

    return(
        <div className = "Clock" onClick = {!running ? getTime : stopTime}>
            {/* <div className = 'clockFace'> */}
                <div className = 'time hours' id = 'hours'>
                    {/* {time.hours} */}
                    <div className = 'hands' id = 'hourHand'></div>
                </div>
                <div className = 'time minutes' id = 'minutes'>
                    {/* {time.minutes} */}
                    <div className = 'hands' id = 'minuteHand'></div>
                </div>
                <div className = 'time seconds' id = 'seconds'>
                    {/* {time.seconds} */}
                    <div className = 'hands' id = 'secondHand'></div>
                </div>
            {/* </div> */}
        </div>
    )
}