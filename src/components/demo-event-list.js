import { Button } from "@mui/material";


const Event = ({ task, onDelete }) => {
  return (
    <div className="event">
      <h3>{task.title}</h3>
      <p>{task.typeOfEvent}</p>
      {/*the path is create a funtion onDelete in app.js and and give prop (onDelete) to delete button */}
      <Button onClick={onDelete}>Delete</Button>
    </div>
  );
};

export default Event;
