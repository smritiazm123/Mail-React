import React, { useRef, useState } from 'react';
import image from  './reorder_icon.png';
import './Header.css';
// import search from './search_icon.png';


function Header(){
    // const myref=useRef();
    // const [mystate,setMystate]=useState([]);
    // const handlesearch=()=>{
    //     let value=myref.current.value;
    //     console.log(value)
    // }

    return(
        <div className='content'>
        <div>
            <img className='image' src={image} alt="icon" />
        </div>
        <div>
            {/* <img className="search_icon" src={search} alt="search_icon"/>
            <input className="box" ref={myref} type="text" placeholder='search here...'/>
            <button className='search' onClick={handlesearch}>Search</button> */}
        </div>
        </div>
    )
}
export default Header;