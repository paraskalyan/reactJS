import React, { useState } from 'react';
import './App.css';

const TextArea = ()=>{
    let c;
    var [words, setWords] = useState(1);
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
        if(e.nativeEvent.data == null){
            c = words -1;
        }
        else{
            c = words +1;
        }
        setWords(c)
        document.querySelector('.show-words').innerHTML = words;
    }
    return(

        <div className='container'>
            <textarea rows= "6" value={text} placeholder="Enter Something" onChange={handleChange}></textarea>
            <div className='button-div'>
                <button className='primary-btn' onClick={handleUpper}>Convert To Uppercase</button>
                <button className='primary-btn' onClick={handleLower}>Convert To Lowercase</button>
            </div>

            <div className='show-words'>
                
            </div>
        
        </div>
    )

};


export default TextArea;