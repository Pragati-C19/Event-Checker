import React from "react";
import "./App.css";
import AddEvent from "./components/modal";
import Navbar from "./components/navbar";
import Events from "./components/events";
import EventList from "./components/view-event-list"
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";

function App() {
  //Array of Event Objects
  const [events, setEvents] = useState([
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
  ]);

  function createData(
    title,
    eventType,
    startDate,
    endDate,
    viewEvent,
    editEvent,
    deleteEvent
  ) {
    return {
      title,
      eventType,
      startDate,
      endDate,
      viewEvent,
      editEvent,
      deleteEvent,
    };
  }
  
  const rows = [
    createData(
      "Pragati's Birthday",
      "Cake",
      "19/10/2022",
      "19/10/2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      "Company Google meet with Manager",
      "Bussiness",
      "13th Oct 2022",
      "13th Oct 2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      "Diwali Festival",
      "Fire",
      "13th Oct 2022",
      "13th Oct 2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      "Read your current book",
      "Book",
      "13th Oct 2022",
      "13th Oct 2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      "Meeting Alert",
      "Red Flags",
      "13th Oct 2022",
      "13th Oct 2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
  ];

  //to open and close modal
  const [modalOpen, setModalOpen] = useState(false);
  const isModalOpen = () => setModalOpen(true);
  const isModalClose = () => setModalOpen(false);

  
  /*/ query for search bar
  const [query, setQuery] = useState('');
  const filteredList=events.filter((item=>{
    return item.title.includes(query)
  }))
  const onChangeQuery=(e)=>{
    setQuery(e.target.value)
  }*/
  const [query, setQuery] = useState('');

  const filteredList=rows.filter((item)=>{
    return item.title.includes(query)
  })

  //Save Event
  const saveEvent = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1; //unique Id is able to give for new events after save
    const newEvent = { id, ...task };
    setEvents([...events, newEvent]);
    console.log(id);
    console.log(newEvent);
  };

  //Delete Event
  const deleteEvent = (id) => {
    //console.log("delete",id)
    setEvents(events.filter((task) => task.id !== id));
  };

  return (
    <>
      <Navbar onClick={isModalOpen}/> {/* query={query} filteredNames={filteredList} onChangeQuery={onChangeQuery} */}
      <EventList rows={rows} setQuery={setQuery} filteredList={filteredList}/>
      <AddEvent onSave={saveEvent} isModalClose={isModalClose} onClickCancel={isModalClose} modalOpen={modalOpen} />

      <h3>Pragati Chothe</h3>
      {events.length > 0 ? (
        <Events events={events} onDelete={deleteEvent} />
      ) : (
        "No Events to Show"
      )}
    </>
  );
}

export default App;
