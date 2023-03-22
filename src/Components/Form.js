import React, {useState} from 'react'

export default function Form(props) {

    const [text,setText] = useState("")
    
  
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");

    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClear = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Textbox is Cleared", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces are removed", "success");
    }
    return (

        <>
        <div className = "container my-3">
            
            <h1>Enter a text to Analyse below: </h1>
            <div className="mb-3" >
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" placeholder='Enter the text here'></textarea> 
            </div>
            <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={handleLoClick} >Convert to LowerCase</button>
            <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={handleClear} >Clear Text</button>
            <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <h3>Time Taken to read this:</h3>
            <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!=0}).length} mins.</p>
            <h3>Preview</h3>
            <p>{text}</p>

        </div>
        </>
        
    )
}
