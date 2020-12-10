import React, { useState, useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export const AddBand = () => {
    
  const { socket } = useContext(SocketContext);

  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      socket.emit("create-new-band", { name: value });
      setValue("");
    }
  };

  return (
    <>
      <h2>Add Band</h2>
      <form onSubmit={handleOnChange}>
        <input
          type="text"
          name="band"
          className="form-control"
          placeholder="Bad name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};
