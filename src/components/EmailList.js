import React  from "react";
import './EmailList.css';
import EmailBody from "./EmailBody";
function EmailList()
{

    return(
        <div className="heading">
            <p>1-50 of 10,890</p>
            <EmailBody />
        </div>
    )
}
export default EmailList;