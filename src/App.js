import React from "react";
import Link from "./components/Links";
import {ToastContainer} from 'react-toastify'
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container p-5">
      <div className="row">
        <Link />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
