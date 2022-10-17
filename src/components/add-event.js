import { useState } from "react";
import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import TypesOfEvent from "./type-of-event";


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

const AddEvent = ({}) => {

  //to open and close modal
  const [modalOpen, setModalOpen] = useState(false);
  const isModalOpen = () => setModalOpen(true);
  const isModalClose = () => setModalOpen(false);

  //this alert msg is to see wheather the event is added or not

  return (
    <div>
      {/* When you click on mopen modal then modal will open */}
      <Button onClick={isModalOpen}>Open modal</Button>

      {/*This is the content of modal */}
      <Modal
        open={modalOpen}
        onClose={isModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
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
            />
          </div>

          {/* Third we have Dropdown Menu for types of Event | we will get Event type */}
          <div>
            <TypesOfEvent/>
          </div>

          {/* Forth we have Start date Holder | we will see when the event starts */}
          <div className="event-control">
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Description"
              placeholder="Add Event Description"
              multiline
            />
          </div>

          {/* Fifth we have End date Holder | with the help of this we can see when the event ends */}
          <div className="event-control">
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Description"
              placeholder="Add Event Description"
              multiline
            />
          </div>

          <input type="submit" value="Save Event" className="btn btn-block" />
        </Box>
      </Modal>
    </div>
  );
};

export default AddEvent;
