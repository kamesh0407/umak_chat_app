import React from "react";


const Navbar = () => {    
    return(
        <div className="navbar">
            <span className="logo">
                Kreedify
                </span>
            <div className="user">
                <img class="styled-image" src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>first_user</span>
                <button>Logout</button>
            </div>
        </div>
    )

}

export default Navbar;