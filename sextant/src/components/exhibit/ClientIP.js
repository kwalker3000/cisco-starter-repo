import { useEffect, useState } from "react";

const ClientIP = ({ path }) => {
  const [address, setAddress] = useState("");

  let getIP = async (path) => {
    let response = await fetch(`https://${path}.ipify.org?format=json`);
    let data = await response.json();
    setAddress((prev) => data.ip);
  };

  useEffect(() => {
    getIP(path);
  }, []);

  return (
    <div>
      <p className="ip-address">{address}</p>
    </div>
  );
};

export default ClientIP;
