import React, { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

function Loading({ loading }) {
  const [color, setColor] = useState("#840032");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      <SyncLoader color={color} loading={loading} size={24} />
    </div>
  );
}

export default Loading;
