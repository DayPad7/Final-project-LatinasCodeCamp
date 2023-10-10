import React, { useState } from "react";
import Login from "./screens/Log-In";
import HomePage from "./screens/HomePage";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./index.css";

function App() {
  const [login, setLogin] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [cash, setCash] = useState(1000);
  const [appleStocks, setappleStock] = useState({
    name: " Apple Inc",
    price: 500,
    amount: 100,
    usershare: 30,
  });
  const [techStocks, settechStock] = useState({
    name: "🐱‍💻 Tech",
    price: 300,
    amount: 20,
    usershare: 40,
  });
  const [pin, setPin] = useState("1234");

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          {!login && (
            <Login
              realPin={pin}
              setLoginStatus={setLogin}
              fullname={fullname}
              setFullname={setFullname}
              username={username}
              setUsername={setUsername}
            />
          )}

          {login && (
            <HomePage
              realPin={pin}
              setRealPin={setPin}
              setLoginStatus={setLogin}
              initialCash={cash}
              setCash={setCash}
              appleStocks={appleStocks}
              setappleStock={setappleStock}
              techStocks={techStocks}
              settechStock={settechStock}
              fullname={fullname}
              username={username}
            />
          )}
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
