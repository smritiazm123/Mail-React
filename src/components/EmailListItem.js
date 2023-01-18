import React, { useState } from "react";
import './EmailListItem.css';
import deleted from './deleted.png';
function EmailListItem(props)
{
    const [c,setc]=useState("mybody");
    const deletehandler=()=>{
        setc("deleted");
    }

    return(
        <div className={`${c}`}>
        <input type="checkbox" />
        <h4>{props.mId}</h4>
        <p className="pad"><b>Subject : {props.subject}</b></p>
        <img  className="delete" src={deleted} alt={deleted} onClick={deletehandler}/>
    </div>
    )
}
export default EmailListItem;