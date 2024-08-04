/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ChatBar = (props) => {
  const { socket } = props;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on("responseNewUser", (data) => {
      setUsers(data);
    });
  }, [socket]);
  return (
    <div>
      <h3>Open chat</h3>
      <h4>Active User</h4>
      <ul>
        {users.map((user) => (
          <div key={user.socketID}>
            <span>{user}</span>;
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatBar;
