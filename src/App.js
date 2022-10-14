import React from "react";
import "./App.css";
import AddEvent from "./components/add-event";
import Navbar from "./components/navbar";
import EventList from "./components/view-event-list";

function App() {
  return (
    <>
      <Navbar />
      <EventList />
      <AddEvent />
    </>
  );
}

export default App;
