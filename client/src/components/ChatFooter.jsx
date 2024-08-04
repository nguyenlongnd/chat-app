/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ChatFooter = (props) => {
  const { socket } = props;
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    const dataSend = {
      text: message,
      name: localStorage.getItem("userName"),
      id: `${socket?.id}${Math.random()}`,
      socketID: socket?.id,
    };
    socket.emit("message", dataSend);
  };
  const handleTyping = () => {
    const userName = localStorage.getItem("useName");
    socket.emit("typing", `${userName} is typing`);
  };
  return (
    <Form onSubmit={handleSendMessage}>
      <Form.Control
        as="textarea"
        placeholder="type message"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleTyping}
      />
      <Button type="summit">SEND</Button>
    </Form>
  );
};

export default ChatFooter;
