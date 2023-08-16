import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("converted");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value)
    }

    const handleLowClick = () =>{
      console.log("converted");
      let newText = text.toLowerCase();
      setText(newText);
  }

    const [text, setText] = useState('');
  return ( 
    <>   
     <div className="container mb-3">
        <label htmlFor="myBox" className="form-label my-2">{props.heading}</label>
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
     </div>
     
     <div className='container'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} chararcters</p>
        <p>It will take {0.008*text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
     </div>
    </>
  )
}
