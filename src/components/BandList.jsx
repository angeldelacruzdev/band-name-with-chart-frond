import React, { useEffect, useState, useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export const BandList = () => {
  const { socket } = useContext(SocketContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("currents-brand", (data) => {
      setData(data);
    });

    return () => socket.off("currents-brand");
  }, [socket, setData]);

  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [setBands, data]);

  const handleChangeName = (e, id) => {
    const newName = e.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
        }
        return band;
      })
    );
  };

  const onBlurChange = (e, id) => {
    // TODO: disparar evento socket
    socket.emit("change-name-band", { id, name: e.target.value });
  };

  const handleVotes = (id) => {
    socket.emit("band-votes", { id });
  };

  const handleDeleteBand = (id) => {
    socket.emit("delete-band", { id });
  };

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => handleVotes(band.id)}
          >
            {" "}
            +1{" "}
          </button>{" "}
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={band.name}
            onChange={(e) => handleChangeName(e, band.id)}
            onBlur={(e) => onBlurChange(e, band.id)}
          />
        </td>
        <td>
          <h3>{band.votes}</h3>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteBand(band.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h2>Current bands</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};
