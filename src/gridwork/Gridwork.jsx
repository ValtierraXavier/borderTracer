import react, { useEffect, useState } from 'react'
import './Gridwork.css'

export default function Gridwork () {
    const [appState, setAppState] = useState({
        yAmount: 0,
        xAmount: 0,
        yArray: [],
        xArray:[],
        currentPosition:{
            x: 0,
            y: 0
        },
        previousPosition:{
            x:0,
            y:0
        }
    })

    const setAxis = (e) => {
        const axisValues ={
            ...appState,
            [e.target.name]: e.target.value
        }
        setAppState(prev => prev = axisValues);
    }

    const setArrays = () =>{
        const arrs = {
            ...appState,
            xArray: [],
            yArray: []
        }
        for(let i = 0; i < appState.yAmount; i++){
            arrs.yArray.push(i)
        }
        for(let j = 0; j < appState.xAmount; j++){
            arrs.xArray.push(j)
        }
        setAppState(prev => prev = arrs)
    }

    const toggleIt = (e) => {
        if(e.target.style.backgroundColor === 'black'){
            e.target.style.backgroundColor = 'white'
        }else{
            e.target.style.backgroundColor = 'black'
        }
        console.log(e.target.style.backgroundColor)
    }

    useEffect(()=>{
        setArrays()
    },[appState.xAmount, appState.yAmount])


    return(
        <div className='Gridwork'>
            <form>                
                <label htmlFor='xAmount'>Columns</label>
                <input name='xAmount' type='number' onChange={setAxis} value={appState.xAmount}></input>            
                <label htmlFor='yAmount'>Rows</label>
                <input name='yAmount' type='number' onChange={setAxis} value={appState.yAmount}></input>            
            </form>
            <div className='Grid'>
                {
                    appState?.yArray?.map((element, i1)=>{
                        return(
                            <div className="row" key = {i1} y = {i1}>
                                {
                                    appState?.xArray?.map((element, i2)=>{
                                        return(
                                            <div className="column"  key = {i2}x = {i2} onClick = {toggleIt}></div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}