import React from "react";
import "./App.css";
import AddEvent from "./components/add-event";
import Navbar from "./components/navbar";
import BasicTable from "./components/view-event-list";

function App() {
  return (
    <>
      <Navbar />
      <BasicTable />
      <AddEvent />
    </>
  );
}

export default App;
