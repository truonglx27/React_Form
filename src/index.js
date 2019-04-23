import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import FormInfo from "./components/FormInfo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <FormInfo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
