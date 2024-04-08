import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
const ChatPage = () => {
    return (
        <div className="chatpage">
           <div className="container">
                <Sidebar />
                <Chat />
           </div>
        </div>
    );
}

export default ChatPage;