import react, { useEffect, useState } from 'react'
import './Gridwork.css'

export default function Gridwork () {
    const [appState, setAppState] = useState({
        yAmount: 2,
        xAmount: 2,
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
    }

    const getTilePos = (e) => {
        const xpos = {
            ...appState,
            currentPosition:{
                x: e.target?.dataset.x,
                y: e.target?.dataset.y
            }
        }
        setAppState(prev => prev = xpos)
    }
    document?.addEventListener('keydown',(e)=>{  
        const col = document.getElementById('col')
        const row = document.getElementById('row')
        
        if(e.key === 'ArrowLeft'){
            row.focus()
        }else if(e.key === 'ArrowRight'){
            col.focus()
        }else if(e.key === 'Enter'){
            highLight()
        }

    })

    const highLight = () => {
    }
 
    useEffect(()=>{
    //  document?.getElementById('col').focus()
        setArrays()
    },[appState.xAmount, appState.yAmount])
    
    

    return(
        <div className='Gridwork'>
            <form>                
                <label htmlFor='xAmount'>Columns</label>
                <input name='xAmount' type='number' min = '0' onChange={setAxis} value={appState.xAmount} id = 'row' ></input>            
                <label htmlFor='yAmount'>Rows</label>
                <input name='yAmount' type='number'min = '0' onChange={setAxis} value={appState.yAmount} id = 'col' ></input>            
            </form>
            <div className='Grid'>
                {
                    appState?.yArray?.map((element1, i1) => {
                        return(
                            <div className="row" key = {i1} data-y = {i1} >
                                {
                                    appState?.xArray?.map((element2, i2) => {
                                        return(
                                            <div className="column"  key = {i2} data-y = {element1} data-x = {element2} onClick = {toggleIt} onMouseOver={getTilePos}></div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='Pos'>{`x: ${appState?.currentPosition?.x} y: ${appState?.currentPosition?.y}`}</div>
        </div>
    )
}