import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Authentication from "./component/Authentication";
import { ToastContainer } from "react-toastify";

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
import Privateroute from "./component/Privateroute";

function App() {
  return (
    <>
      <DataProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Authentication />}></Route>
            <Route
              path="/home"
              element={
                <Privateroute>
                  <Home />
                </Privateroute>
              }
            ></Route>

            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </DataProvider>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        closeOnClick={true}
      />
    </>
  );
}

export default App;
