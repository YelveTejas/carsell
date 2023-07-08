import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Authentication from "./component/Authentication";

import {
  Navigate,
  NavigationType,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./component/Login";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import { useState } from "react";
import DataProvider from "./component/DataProvide";

const Privateroute = ({ setAuthenticate }) => {
  return setAuthenticate ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <DataProvider>
        <div className="App">
          {/* <Navbar/> */}
          <Routes>
            <Route
              path="/login"
              element={<Login setAuthenticate={setAuthenticate} />}
            ></Route>

            <Route path="/" element={<Authentication />}></Route>

            <Route path="/home" element={<Home />}></Route>

            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
