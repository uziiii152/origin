import React,{useState} from 'react'
import propstype from 'prop-types'
export default function Textform(props) {
    const handleupscale= (e)=>{
      e.preventDefault();
        console.log("enter your name here"+Text)
        let newText=Text.toUpperCase();
        setText(newText);
    }
    const handlelowscale= (e)=>{
      e.preventDefault();
        console.log("enter your name here"+Text)
        let newText=Text.toLowerCase();
        setText(newText);
    }
    const handleItalicscale = (e)=>{
      e.preventDefault();
      console.log(Text);
      let newText=Text.replace('Aoa','Greetings');
      setText(newText);
    }
    const handleonchange= (event)=>{
        console.log("onchange")
        setText(event.target.value);
    }
    const [Text,setText]=useState('');
    return (
      <>
    <form>
    <div className="form-group">
      <h1 className='hello'>{props.heading}</h1>
      <div className='mb-3'>
      <textarea className="form-control my-2 mx-2" onChange={handleonchange} value={Text} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className='btn btn-outline-warning mx-2 my-2' onClick={handleupscale}>convertToUppercase</button>
      <button className='btn btn-outline-primary mx-2 my-2' onClick={handlelowscale}>convertToLowercase</button>
      <button className='btn btn-outline-primary mx-2 my-2' onClick={handleItalicscale}>Convert to specific mean</button>
      {/* <button className='btn btn-outline-primary mx-2 my-2' onClick={handlepreviousscale}>convertToPrevious</button> */}
    </div>
<div className='container'>
  <h1>Your Text Summary Is</h1>
  <p> Characters {Text.length}
  </p>
  <p> Words {Text.split(' ').length}
  </p>
  <p>{Text.split(" ").length*0.005} Mins</p>
  <h1>Preview</h1>
  <p>
    {Text}
  </p>
</div>
  </form>
  </>
  )
}
Textform.propstype={heading : propstype.string}