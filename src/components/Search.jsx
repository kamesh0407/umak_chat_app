import React from "react";
const Search = () => {    
    return(
        <div>
            <div className="search">
                <div className="searchForm">
                    <input type="text" placeholder="Find a user"/>
                </div>
                <div className="userChat">
                    <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className="userChatInfo">
                        <span>first_user</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Search;