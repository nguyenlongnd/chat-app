/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ChatBody = (props) => {
  const { messages, typingStatus } = props;
  const navigate = useNavigate();
  const handleLeaveRoom = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>Hangout with colleagues</h4>
        <Button onClick={handleLeaveRoom}>Leave chat</Button>
      </div>
      <div>
        {messages?.map((message) => {
          return message.name === localStorage.getItem("userName") ? (
            <div key={message.socketID}>
              <p className="sender__name">You</p>
              <span className="myMessage">
                <p>{message} </p>
              </span>
            </div>
          ) : (
            <div key={message.socketID}>
              <span className="otherMessage">
                <p>{message} </p>
              </span>
            </div>
          );
        })}
      </div>
      {/*This is triggered when a user is typing*/}
      <div className="message__status">
        <p>{typingStatus}</p>
      </div>
    </div>
  );
};

export default ChatBody;
