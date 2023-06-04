import React from "react";
import "./SidebarButton.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
const SidebarButton = (props) => {
  const location = useLocation();
  const active = location.pathname === props.to;
  const activeClass = active ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div className={activeClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
