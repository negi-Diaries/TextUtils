import React, {useState} from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("upperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text has been converted to Upper Case.", "success")
  }

  const handleLoClick = ()=>{
    let newLoText = text.toLocaleLowerCase();
    setText(newLoText);
    props.showAlert("text has been converted to Lower Case", "success")
  }

  const handleClClick = ()=>{
    let newClText = "";
    setText(newClText);
    props.showAlert("text has been cleared", "success")
  }

  const handleCopyClick = ()=>{
    let copiedText = navigator.clipboard.writeText(text);
    text = copiedText;
    props.showAlert("text copied!", "success")
  }

  const removeExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '));
    if(text === ""){
      props.showAlert("you first have to write to remove extra spaces", "warning");
    }else{
      props.showAlert("extra spaces has been removed", "success");
    }
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  let [text, setText] = useState('');
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h2 className="mb-2">{props.headings}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#212529' , color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8" placeholder="enter the text here"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClClick}>clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>remove extra spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>your text summary</h2>
      <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutues will take it to read it</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'nothing to preview'}</p>
    </div>
    </>
  );
}
