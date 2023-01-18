import React from "react";
import './Sidebar.css';
import SidebarOptions from "./SidebarOptions";
import inboxicon from './inbox.png';
import spam from './spam.png';
import deleted from './deleted.png';
import custom from './custom.png';
import meet_icon from './meet_icon.png';
import joinmeet from './joinmeet.png';
import EmailList from "./EmailList";
function Sidebar(){
return(
<div>  
        <SidebarOptions icon={inboxicon} title="Inbox" number="224" isActive={true}/>
        <SidebarOptions icon={spam} title="Spam" number="23"/>
        <SidebarOptions icon={deleted} title="Deleted Items" number="2"/>
        <SidebarOptions icon={custom} title="Custom Folders" number="2"/>
        <h4>Meet</h4>
        <SidebarOptions icon={meet_icon} title="New Meeting" />
        <SidebarOptions icon={joinmeet} title="Join a meeting" />
</div>
        
)
}
export default Sidebar;