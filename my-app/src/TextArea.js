import React, { useState } from 'react';
import './App.css';

const TextArea = (props)=>{
    // const myStyle = {
    //     color: 'white',
    //     backgroundColor: 'grey'
    // };
    const[mode, setMode] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [text, setText] = useState('');
    const handleUpper = ()=>{
        let uptext = text.toUpperCase();
        setText(uptext);
    }
    const handleLower = ()=>{
        let lotext = text.toLowerCase();
        setText(lotext);
    }
    const handleChange= (e)=>{
        setText(e.target.value);
    }

    const handleClear = ()=>{
        setText('')
    }
    const changeModetoBlck  = ()=>{
            setMode({
                color: 'white',
                backgroundColor: '#000'
            })  
    }
    const changeModetoBlue  = ()=>{
            setMode({
                color: 'black',
                backgroundColor: 'rgb(255, 217, 0'
            }) 
    }
    const changeModetoGrn  = ()=>{
            setMode({
                color: 'white',
                backgroundColor: 'rgb(19, 97, 19)'
            })   
    }

    const changeModetoWhite = ()=>{
        setMode({
            color: 'black',
            backgroundColor: 'rgb(255, 255, 255)'
        })   
    }

    return(

        <div className='container'style={mode} >
            <textarea rows= "6" value={text} placeholder="Enter Something" onChange={handleChange}></textarea>
            <div className='button-div'>
                <button className='primary-btn' onClick={handleUpper}>Convert To Uppercase</button>
                <button className='primary-btn' onClick={handleLower}>Convert To Lowercase</button>
                <button className='primary-btn' onClick={handleClear}>Clear</button>
            </div>

            <div className='show-words'>
                <p>{text.length}</p>
            </div>
            <div>
                <button className='primary-btn c-pal' id='blck-btn' onClick={changeModetoBlck}></button>
                <button className='primary-btn c-pal' id='blue-btn' onClick={changeModetoBlue}></button>
                <button className='primary-btn c-pal' id='grn-btn' onClick={changeModetoGrn}></button>
                <button className='primary-btn c-pal' id='white-btn' onClick={changeModetoWhite}></button>

            </div>
    
        </div>
    )

};


export default TextArea;