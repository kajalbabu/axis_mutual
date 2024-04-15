import React from 'react'
import "./mutualheading.css"
type Props = {
  text: string;
  styleType:string;
};
function MutualHeading(props:Props) {
  return (
    <>
    <h1 className={`mutual-heading-${props.styleType || ''}`}>{props.text}</h1>
    </>
  )
}

export default MutualHeading