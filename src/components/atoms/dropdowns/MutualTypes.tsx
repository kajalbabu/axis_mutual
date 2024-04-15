import React from "react";
import "./mutualtypes.css"

function MutualTypes() {
  return (
    <>
      <select className="mutual-types">
      <option value="debt">Debt</option>
        <option value="equity" selected>Equity</option>
        <option value="retirement">Retirement</option>
        <option value="save tax">Save Tax</option>
      </select>
    </>
  );
}

export default MutualTypes;
