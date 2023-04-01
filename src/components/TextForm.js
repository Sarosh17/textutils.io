import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleExtraSpaces=()=>{
        let newText=text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra spaces removed","success")
    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied","success")
    }
    const [text,setText]=useState('')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#302020'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'brown':'white',color:props.mode==='dark'?'white':'#302020'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-2" style={{color:props.mode==='dark'?'white':'#302020'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length}Minutes Read</p>
    <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
  </div>
  </>
  )
}
