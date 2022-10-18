import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";

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
    "Event-1",
    "Cake",
    "13th Oct 2022",
    "13th Oct 2022",
    <FaEye color="green" size="25px" />,
    <HiPencil color="royalblue" size="25px" />,
    <MdDeleteForever color="red" size="25px" />
  ),
  createData(
    "Event-2",
    "Bussiness",
    "13th Oct 2022",
    "13th Oct 2022",
    <FaEye color="green" size="25px" />,
    <HiPencil color="royalblue" size="25px" />,
    <MdDeleteForever color="red" size="25px" />
  ),
  createData(
    "Event-3",
    "Fire",
    "13th Oct 2022",
    "13th Oct 2022",
    <FaEye color="green" size="25px" />,
    <HiPencil color="royalblue" size="25px" />,
    <MdDeleteForever color="red" size="25px" />
  ),
  createData(
    "Event-4",
    "Book",
    "13th Oct 2022",
    "13th Oct 2022",
    <FaEye color="green" size="25px" />,
    <HiPencil color="royalblue" size="25px" />,
    <MdDeleteForever color="red" size="25px" />
  ),
  createData(
    "Event-5",
    "Red Flags",
    "13th Oct 2022",
    "13th Oct 2022",
    <FaEye color="green" size="25px" />,
    <HiPencil color="royalblue" size="25px" />,
    <MdDeleteForever color="red" size="25px" />
  ),
];

export default function EventList() {
  return (
    //it's just a simple table
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event Title</TableCell>
              <TableCell> Event Type </TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date </TableCell>
              <TableCell>View</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{row.eventType}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>{row.viewEvent}</TableCell>
                <TableCell>{row.editEvent}</TableCell>
                <TableCell>{row.deleteEvent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
