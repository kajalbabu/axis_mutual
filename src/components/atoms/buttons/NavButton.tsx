import React from "react";
import "./navbutton.css";
type Props = {
  onClick: () => void;
  disabled: boolean;
  label: string;
};
const NavButton = (props: Props) => {
  return (
    <div>
      <button
        className="nav-btn"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </div>
  );
};

export default NavButton;
