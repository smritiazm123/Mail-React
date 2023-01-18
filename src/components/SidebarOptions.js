import React  from "react";
import './SidebarOptions.css';

function SidebarOptions({icon,title,number,isActive}){

    return(
        <div className={`all_items  ${isActive && 'sidebaroptions--active'}`}>
        <img className="sidebar_icon" src={icon} alt={icon} />
        <h6>{title}</h6>
        <h4 className="number">{number}</h4>
        </div>
    )
}
export default SidebarOptions;