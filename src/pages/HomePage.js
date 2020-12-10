import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
 
import { Brand } from "../components/Band";
 
function HomePage() {

  const {online} = useContext( SocketContext );

  return (
    <>
      <div className="container">
        <div className="alert mt-5">
          <p>
            <span>Service status:</span>
            {online ? (
              <span className="text-success">Online</span>
            ) : (
              <span className="text-danger">Offline</span>
            )}
          </p>
        </div>
        <Brand/>
      </div>
    </>
  );
}

export default HomePage;
