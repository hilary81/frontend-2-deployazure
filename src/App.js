import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./components/UploadFilesComponent";


function App() {
  return (

    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="btn-group mx-auto">
          <h4 className="text-white">Azure-bootstrap-upload-download-delete-getall
          </h4>
        </div>
      </nav>
      <br></br>
      <div className="container">
        <UploadFiles />
      </div>
      </div>
     
  );
}

export default App;