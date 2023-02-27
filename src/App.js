import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCGaqUCFX254RMTF1H10_uLdcMvdzAYpU",
  authDomain: "pushauth-fc821.firebaseapp.com",
  projectId: "pushauth-fc821",
  storageBucket: "pushauth-fc821.appspot.com",
  messagingSenderId: "403884574568",
  appId: "1:403884574568:web:7a99ca22d65af7cc0d78dd",
  measurementId: "G-ZZJZMJYHLJ",
};

initializeApp(firebaseConfig);

function App() {
  const message = getMessaging();
  const [isToken, setisToken] = React.useState(null);
  const vapidKey =
    "BD5vDCFCO2F69RfQrcPNmIPd5Z2y_0EmHQwX84Ko-7cPKm_zIZa0_9rHiZ6oWqXy4g70L3SgdWzn1XO29eoZwEY";

  const requestFroToken = () => {
    return getToken(message, { vapidKey: vapidKey })
      .then((res) => {
        setisToken(res);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    requestFroToken();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button className="btn btn-primary">make notifcation</button>
      </header>
    </div>
  );
}

export default App;
