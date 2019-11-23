import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default App;
