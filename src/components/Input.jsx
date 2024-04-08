import React from "react";
import Attach from "../images/attach.png";
import Img from "../images/img.png";
const Input = () => {    
    return(
        <div>
            <div className="input">
                <input type="text" placeholder="Type a message" />
                <div className="send">
                    <img src={Attach}  alt="" width="23" height="" />
                    <input type="file" style={{display:"none"}}  id="file"/>
                        <label htmlFor="file">
                            <img src={Img} alt="" width="30" height="" />
                        </label>
                        <button>Send</button>
                </div>

            </div>
        </div>
    )

}

export default Input;