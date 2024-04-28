import React, { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

function Loading({ loading }) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      <SyncLoader color="#840032" loading={loading} size={24} />
    </div>
  );
}

export default Loading;
