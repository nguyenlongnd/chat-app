/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const { socket } = props;

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    if (userName) {
      localStorage.setItem("userName", userName);
      socket.emit("newUser", { userName, socketID: socket.id });
      navigate("/chat");
    }
  };
  return (
    <Form onSubmit={handleSignIn}>
      <h3>Sign in to Open Chat</h3>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="Username"
          placeholder="Username"
          onChange={(e) => setUserName(e?.target?.value)}
          name="userName"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        SIGN IN
      </Button>
    </Form>
  );
};

export default HomePage;
