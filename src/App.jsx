import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TokenService } from "./service/token";
import KeyBody from "./components/key/KeyBody";
import RemoteBody from "./components/remote/RemoteBody";

function App() {
  const [token, setToken] = useState(false);
  const [refresh, setRefesh] = useState(false);

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    fetchToken();
  }, [refresh]);

  const fetchToken = () => {
    const token = TokenService.getSecretToken();
    if (token) {
      setToken(true);
    } else {
      setToken(false);
    }
  };

  return (
    <div className="p-3 m-3">
      {token ? (
        <RemoteBody refresh={refresh} setRefresh={setRefesh} />
      ) : (
        <KeyBody refresh={refresh} setRefresh={setRefesh} />
      )}
    </div>
  );
}

export default App;
