import { useState } from "react";
import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import TypesOfEvent from "./type-of-event";
import DatePicker from "./date-picker";
import { Stack } from "@mui/system";

//css for modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddEvent = ({ onSave, isModalClose, onClickCancel, modalOpen }) => {
  //to add event after click on save
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  //below three is not working now
  const [typesOfEvent, setTypesOfEvent] = useState(" ");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onClickSaveButton = (e) => {
    e.preventDefault();
    onSave({ title, description, typesOfEvent, startDate, endDate});

    setTitle("");
    setDescription("");

    //Don't know how should it right yet
    setTypesOfEvent();
    setStartDate();
    setEndDate();
  };

  //this alert msg is to see wheather the event is added or not

  return (
    <div>
      {/*This is the content of modal */}
      <Modal
        open={modalOpen}
        onClose={isModalClose} //use to close modal by click anywhere on window
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            textAlign="center"
            fontFamily="serif"
          >
            Add New Event
          </Typography>

          {/* First we have Title Holder | we will get event title */}
          <div className="event-control">
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Title"
              placeholder="Add Event Title"
              multiline
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Second we have Description Holder | we will get event Description */}
          <div className="event-control">
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Description"
              placeholder="Add Event Description"
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Third we have Dropdown Menu for types of Event | we will get Event type */}
          <div>
            <TypesOfEvent
              value={typesOfEvent}
              onChange={(e) => setTypesOfEvent(e.target.value)}
            />
          </div>
          <br />

          <Stack direction="row" spacing={2}>
            {/* Forth we have Start date Holder | we will see when the event starts */}
            <DatePicker
              userName="Start Date"
              value={startDate}
              onChange={(e) => {
                console.log({ date: e.format("DD/MM/YYYY") });
                setStartDate(e.format("DD/MM/YYYY"));
              }}
            />

            {/* Fifth we have End date Holder | with the help of this we can see when the event ends */}
            <DatePicker
              userName="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Stack>
          <br />

          {/* You can add justifyContent="center" alignItems="center" here to center the buttons  */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              color="success"
              onClick={onClickSaveButton}
            >
              Save
            </Button>
            <Button variant="outlined" color="error" onClick={onClickCancel}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default AddEvent;
