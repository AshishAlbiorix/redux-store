import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    return(  
    <div className="ui pointing menu">
        <Link to="/" className="item active">Home</Link>

    </div>        
    )
}
export default Header;