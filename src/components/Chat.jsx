import React from "react";
import Video from "../images/video.png";
import Add1 from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";   
const Chat = () => {    
    return(
        <div>
            <div className="chat">
                <div className="chatInfo">
                    <span>first_user</span>
                    <div className="chatIcons">
                        <img id="videoIcon" src={Video} alt="" />
                        <img src={Add1} alt="" />
                        <img src={More} alt="" />
                    </div>
                    
                </div>
                
            </div>
            <Messages/>
            <Input/>
        </div>
    )

}

export default Chat;