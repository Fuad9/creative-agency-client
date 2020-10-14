import React, { createContext, useState } from "react";
import "./App.css";
import Routes from "./components/Routes/Routes";

export const AuthContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [servicesInfo, setServicesInfo] = useState([]);

  return (
    <div className="App">
      <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <ServiceContext.Provider value={[servicesInfo, setServicesInfo]}>
          <Routes />
        </ServiceContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
