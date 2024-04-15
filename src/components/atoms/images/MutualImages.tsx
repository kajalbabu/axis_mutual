import React from 'react'
import "./mutualimages.css"

function MutualImages(props:any) {
  return (
    <>
        <img className='mutual-img' src={props.imageUrl}></img>
    </>
  )
}

export default MutualImages