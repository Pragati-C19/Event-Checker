import React from "react";
import "./App.css";
import AddEvent from "./components/modal";
import Navbar from "./components/navbar";
import EventList from "./components/view-event-list";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";

function App() {
  //Array of Event Objects
  const [events, setEvents] = useState(createData);
  var [filteredList, setFilteredList] = useState();

  function createData(
    id,
    title,
    eventType,
    startDate,
    endDate,
    viewEvent,
    editEvent,
    deleteEvent
  ) {
    return {
      id,
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
      1,
      "Pragati's Birthday",
      "Cake",
      "19/10/2022",
      "19/10/2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      2,
      "Company Google meet with Manager",
      "Bussiness",
      "13th Oct 2022",
      "13th Oct 2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      3,
      "Diwali Festival",
      "Fire",
      "13th Oct 2022",
      "13th Oct 2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      4,
      "read your current book",
      "Book",
      "13th Oct 2022",
      "13th Oct 2022",
      <FaEye color="green" size="25px" />,
      <HiPencil color="royalblue" size="25px" />,
      <MdDeleteForever color="red" size="25px" />
    ),
    createData(
      5,
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

  // query for search bar
  const [query, setQuery] = useState("");

  filteredList = rows.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  //Save Event
  const saveEvent = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1; //unique Id is able to give for new events after save
    const newEvent = { id, ...task };
    setEvents([...rows, newEvent]);
    console.log(id);
    console.log(newEvent);
  };

  //Delete Event
  const deleteEvent = (id, e) => {
    console.log("delete", id);

    setFilteredList(rows.filter((task,e) => task.id !== rows.id));
  };

  return (
    <>
      <Navbar onClick={isModalOpen} setQuery={setQuery} />
      <EventList filteredList={filteredList} onClickDelete={deleteEvent} />
      <AddEvent
        onSave={saveEvent}
        isModalClose={isModalClose}
        onClickCancel={isModalClose}
        modalOpen={modalOpen}
      />

      <h3>Pragati Chothe</h3>
    </>
  );
}

export default App;
