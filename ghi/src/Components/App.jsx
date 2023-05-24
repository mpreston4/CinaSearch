import { useEffect, useState } from "react";
import Construct from "../Construct.js";
import ErrorNotification from "./ErrorNotification.jsx";
import "./App.css";
import MoviesList from "./MoviesList.jsx";
import Nav from "./Nav.jsx";
import Login from "./LoginForm.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Home.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [launchInfo, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //     console.log("fastapi url: ", url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
  // <BrowserRouter>
  // <Nav />
  //   <Routes>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="movies" element={<MoviesList />} />
  //     <Route path="login" element={<Login />} />
  //   </Routes>
  // </BrowserRouter>
    <>
    <Nav />
    <Outlet />
    </>
    );
}

export default App;