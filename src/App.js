import React from "react";
import "./App.css";
import AddEvent from "./components/modal";
import Navbar from "./components/navbar";
import EventList from "./components/view-event-list";
import Events from "./components/events";
import { useState } from "react";

function App() {

  //Array of Event Objects
  const [events,setEvents]=useState(
    [
        {
          id: 1,
          title: "Event-1",
          typeOfEvent: "Cake",
          startDate: "13th Oct 2022",
          endDate: "13th Oct 2022",
          viewEvent: "ViewButton",
          editEvent: "EditButton",
          deleteEvent: "deleteButton",
        },
        {
          id: 2,
          title: "Event-2",
          typeOfEvent: "Cake",
          startDate: "13th Oct 2022",
          endDate: "13th Oct 2022",
          viewEvent: "ViewButton",
          editEvent: "EditButton",
          deleteEvent: "deleteButton",
        },
        {
          id: 3,
          title: "Event-3",
          typeOfEvent: "Cake",
          startDate: "13th Oct 2022",
          endDate: "13th Oct 2022",
          viewEvent: "ViewButton",
          editEvent: "EditButton",
          deleteEvent: "deleteButton",
        },
        {
          id: 4,
          title: "Event-4",
          typeOfEvent: "Cake",
          startDate: "13th Oct 2022",
          endDate: "13th Oct 2022",
          viewEvent: "ViewButton",
          editEvent: "EditButton",
          deleteEvent: "deleteButton",
        },
        {
          id: 5,
          title: "Event-5",
          typeOfEvent: "Cake",
          startDate: "13th Oct 2022",
          endDate: "13th Oct 2022",
          viewEvent: "ViewButton",
          editEvent: "EditButton",
          deleteEvent: "deleteButton",
        },
      ]
)

//Save Event
const saveEvent=(task)=>{
  console.log(task)
}

//Delete Event 
const deleteEvent =(id)=>{
  //console.log("delete",id)
  setEvents(events.filter ((task)=>task.id !==id))
}

  return (
    <>
      <Navbar />
      <EventList />
      <AddEvent onSave={saveEvent}/>

      <h3>Pragati Chothe</h3>
      {events.length > 0 ? <Events events={events} onDelete={deleteEvent}/> :"No Events to Show"}
    </>
  );
}

export default App;
