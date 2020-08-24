import React from 'react';
import Search from "./search.js"
import "./nav.css"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo bold">Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Employee Search: </div>
                <Search />
            </div>
        </div>
    )
}
export default Navbar;