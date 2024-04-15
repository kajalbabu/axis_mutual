import React from 'react'
import HeaderAboutMutual from '../molecules/HeaderAboutMutual'
import Carousel from '../molecules/Carousel'
import MutualFundTypes from '../molecules/MutualFundTypes'



const items=[
  {name:'Feel Good',content:'mutual-img.png'},
  {name:'Mutual Fund Basics',content:'img1.png'},
  {name:'Content of the Week',content:'img2.png'},
  {name:'Debt',content:'img3.png'},
  {name:'Hybrid',content:'img4.png'},
  {name:'Save Tax',content:'img5.png'},
  {name:'Long Term Investments',content:'img6.png'},
  {name:'Retirement',content:'img7.png'},
  {name:'Weather Creation',content:'mutual-img.png'},
  {name:'Equity',content:'img1.png'},
  {name:'5 Min Reads',content:'img2.png'},
  ]
function AboutMutual() {
  return (
    <>
        <HeaderAboutMutual/>
        <MutualFundTypes/>
        <Carousel items={items} />
    </>
  )
}

export default AboutMutual