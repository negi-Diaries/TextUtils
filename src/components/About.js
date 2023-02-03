import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white',
  //   });
    
    let myStyle = {
      color: props.mode === 'dark'? 'white': 'black',
      backgroundColor: props.mode === 'dark'? 'rgb(44 106 120)': 'white'
    }
  
  return (
    <>
    <div className="container my-3" style={ {Color: props.mode === 'dark'? '#033e4b': 'white'}}>
    <h1 style={{color: props.mode === 'dark'? 'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==='dark'?'#0e1e21':'white'}}>
             textUtils gives you a way to analyse your text quickly and efficiently.Be it word count, character count or...
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==='dark'?'#0e1e21':'white'}}>
              textUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reporta the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==='dark'?'#0e1e21':'white'}}>
              this word counter software worls in any browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. it suits to count characters in facebook, blogs, books, excel document, pdf doucment, essays etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-2">
      <button type="button" className="btn btn-primary my-2" style={myStyle} onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
    </>
  );
}
