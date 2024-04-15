import React from "react";
import MutualTypes from "../atoms/dropdowns/MutualTypes";
import TypesButton from "../atoms/buttons/TypesButton";
import MutualImages from "../atoms/images/MutualImages";
import "./headeraboutmutual.css";
import MutualHeading from "../atoms/headings/MutualHeading";

function HeaderAboutMutual() {
  const navigateToType=()=>{
    window.location.href='https://www.axismf.com/mutual-fund-knowledge-centre/learn-equity-mutual-fund';
  }
  return (
    <div>
      <MutualHeading text="Welcome to MoneyPlex" styleType="welcome-heading"/>
    <div className="header-about-mutual">
      <MutualImages imageUrl="mutual-img.png" />
      <MutualHeading text="I am looking for" styleType="text-in-header"/>
      {/* <TextInHeader text="I am looking for"/> */}
      <MutualTypes />
      <TypesButton styleType="types-btn" onClick={navigateToType} text="Continue"/>
    </div>
    </div>
  );
}

export default HeaderAboutMutual;
