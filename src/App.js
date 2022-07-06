// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212559";
      ShowAlert("dark mode has been alert", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("dark mode has been disabled", "success");
    }
  };
  return (
    <>
      {" "}
      {/* <Router> */}
      <Navbar title="Navbar" mode={mode} togglemode={togglemode} />
      <Alert Alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="About" element={<About />} /> */}
        {/* <Route */}
        {/* exact
          path="/"
          element={ */}
        <TextForm ShowAlert={ShowAlert} heading="enter the text" mode={mode} />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
