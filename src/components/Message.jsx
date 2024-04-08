import React from "react";
const Message = () => {    
    return(
        <div>
            <div className="message">
                <div className="messageInfo">
                    <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Just now</span>
                </div>
                <div className="messageContent">
                    <p>Hello</p>
                    {/* <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
                </div>


            </div>
        </div>
    )

}

export default Message;