import React from "react";

const ToggleSwitch = props => {
  return (
    <div className="toggle-switch">
      <label className="switch">
        <input
          type="checkbox"
          id="toggleSwitch"
          checked={props.isChecked}
          onChange={props.onChange}
        />
        <span className="slider round"></span>
      </label>
      <label htmlFor="toggleSwitch">{props.label}</label>
    </div>
  );
};

export default ToggleSwitch;
