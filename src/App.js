import React from "react";
import "./App.css";
import AddEvent from "./components/add-event";
import PrimarySearchAppBar from "./components/navbar";
import BasicTable from "./components/view-event-list";

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <BasicTable />
      <AddEvent />
    </>
  );
}

export default App;
