import React from 'react';
import chatbot from "./../../../assets/imgHome/buttonChatbot.png";
import "./chatbot.css";

function Chatbot() {
    return (
        <div className="fixed bottom-5 right-10 w-[80px] cursor-pointer rounded-shadow">
            <img src={chatbot} alt="Imagen del chatbot" />
        </div>
    );
}

export default Chatbot;
