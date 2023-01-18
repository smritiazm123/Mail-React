import React, { useState }  from "react";
import './EmailBody.css';
import EmailListItem from "./EmailListItem";
import search from './search_icon.png';
import { useRef } from "react";
import deleted from './deleted.png';

const inbox=[
    {
      "mId": "guid-1",
      "unread": true,
      "subject": "Training Program",
      "content": "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
    },
    {
      "mId": "guid-2",
      "unread": false,
      "subject": "Empower your future",
      "content": "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
    }
  ]

function EmailBody()
{
  const[query,setQuery]=useState();
  const[myclass,setMyclass]=useState();
  const[myclass1,setMyclass1]=useState();
  let myref=useRef();
  const clickHandler=()=>{
    let value=myref.current.value;
    setQuery(value);
    setMyclass("getsHide");
  }
  const deletehandler=()=>{
    setMyclass1("getsHide");
  }
    return(
        <><img className="sidebar_icon" onClick={deletehandler}src={deleted} alt={deleted}/>
          {inbox.filter((elem)=>
          elem.che).map((elem)=>(
          <EmailListItem  mId={elem.mId} subject={elem.subject} />
          )
        )
          }
         <img className="search_icon" src={search} alt="search_icon"/>
            <input className="box" type="text" ref={myref} placeholder='search here...'/>
            <button className="search" onClick={clickHandler}>Search</button>
<div className={`${myclass}`}>
           {inbox.map((elem)=>(
            <EmailListItem  mId={elem.mId} subject={elem.subject} />
        ))
        } 
</div>
        {inbox.filter((elem)=>
          elem.mId.includes(query)).map((elem)=>(
          <EmailListItem  mId={elem.mId} subject={elem.subject} />
          )
        )
          }
        </>

    )
}
export default EmailBody;