import React from "react";
import MutualHeading from "../atoms/headings/MutualHeading";
import TypesButton from "../atoms/buttons/TypesButton";
import './mutualfundtypes.css'

const MutualTypes = () => {
  const viewAllTypes=()=>{
    window.location.href='https://www.axismf.com/mutual-fund-knowledge-centre/articles';
  }
  return (
    <div className="mutual-fund-types">
      <MutualHeading
        text="Learn About Mutual Funds"
        styleType="learn-heading"
      />
      <TypesButton styleType="view-all" text="View All &gt;" onClick={viewAllTypes}/>
    </div>
  );
};

export default MutualTypes;
