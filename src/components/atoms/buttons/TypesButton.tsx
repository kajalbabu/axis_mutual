import React from 'react'
import "./typesbutton.css"
type Props={
  onClick:() => void;
  text:string;
  styleType:string;
}
function TypesButton(props:Props) {
 
  return (
    <>
        <button className={props.styleType} onClick={props.onClick}>{props.text}</button>
    </>
  )
}

export default TypesButton