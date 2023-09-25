import React, {useState} from 'react'



export default function TextForm (props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
      }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = ("");
        setText(newText)
    
      }

      const handleCapitalisedClick = () => {
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
      
      }
      
      const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      }

      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      }
      
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const[text, setText] = useState('');
    
  return (
    <>
    <div className='container'style = {{color: props.mode === 'dark'?'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="15"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalisedClick}>Capitalised Case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark'?'white' : 'black'}}> 
       <h2>Your Text Summary</h2>
       <p>{text.split(" ").length} and {text.length} Characters</p>
       <p>Time to read {0.008 * text.split().length + " Minutes"}</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter Text to Preview"}</p>
    </div>
    </>
  )
}
