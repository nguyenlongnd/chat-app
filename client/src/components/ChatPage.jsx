import { useEffect, useState } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import "./styles.css";

/* eslint-disable react/prop-types */
const ChatPage = (props) => {
  const { socket } = props;
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  useEffect(() => {
    socket.on("responseMessages", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    socket.on("responseTyping", (data) => {
      setTypingStatus(data);
    });
  }, [socket]);
  return (
    <div className="chatPageStyle">
      <div className="chatBarStyle">
        <ChatBar socket={socket} />
      </div>
      <div className="chatBodyMain">
        <ChatBody messages={messages} typingStatus={typingStatus} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
