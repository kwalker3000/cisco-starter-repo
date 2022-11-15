import { useEffect, useState } from "react";

const W3CWebSocket = require("websocket").w3cwebsocket;
const client = new W3CWebSocket("ws://localhost:55455");

const ClientSocket = () => {
  const [packetData, setPacketData] = useState({
    timeStamp: null,
    latency: null,
  });
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      setPacketData((prevData) => ({
        ...prevData,
        timeStamp: message.data,
        latency: message.data - prevData.timeStamp,
      }));
    };
  }, []);

  return (
    <div>
      <p>{packetData.latency && `${packetData.latency} ms`}</p>
    </div>
  );
};

export default ClientSocket;
