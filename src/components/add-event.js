import { useState } from "react";
import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

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

const AddEvent = ({ onAdd }) => {
  //title and description are input from user
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //to open and close modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const isModalOpen = () => setModalOpen(true);
  const isModalClose = () => setModalOpen(false);

  //this alert msg is to see wheather the event is added or not
  const onClick = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a Event");
      return;
    }

    onAdd({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Button onClick={isModalOpen}>Open modal</Button>
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
          <div className="add-event" onClick={onClick}>
            <div className="event-control">
              <label>Event Title</label>
              <input
                type="text"
                placeholder="Add Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="event-control">
              <label>Description</label>
              <input
                type="text"
                placeholder="Add Event Description"
                value={description}
                
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <input type="submit" value="Save Event" className="btn btn-block" />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddEvent;
