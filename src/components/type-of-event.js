import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useState, useRef } from "react";
import { HiCake } from "react-icons/hi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { GiSecretBook } from "react-icons/gi";

const types = [
  "Types",
  <HiCake color="rgb(255, 0, 128)" size="25px" />,
  <MdOutlineBusinessCenter color="rgb(141, 69, 17)" size="25px" />,
  <MdOutlineFestival color="orange" size="25px" />,
  <GiSecretBook color="rgb(0, 174, 255)" size="25px" />,
  <MdFamilyRestroom color="green" size="25px" />,
  <MdNotificationsActive color="red" size="25px" />,
];

const TypesOfEvent = () => {
  const [typesMenu, setTypesMenu] = useState(false);
  const anchorRef = useRef(null);
  const [selectedType, setSelectedType] = useState(0);

  //to check which type is selected
  const handleClick = () => {
    console.info(`You clicked ${types[selectedType]}`);
  };

  const handleMenuItemClick = (event, index) => {
    console.log({ event, index });
    setSelectedType(index);
    setTypesMenu(false);
  };

  const handleToggle = () => {
    setTypesMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setTypesMenu(false);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        {/* select the type side button */}
        <Button onClick={handleClick} color="inherit">
          {types[selectedType]}
        </Button>
        <Button
          size="small" //this is for arrow button size
          color="inherit"
          aria-controls={typesMenu ? "split-button-menu" : undefined}
          aria-expanded={typesMenu ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper //you can't change it this effects dropdown arrow
        open={typesMenu}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {
          // this function is for list
          ({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "top" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {types.map((option, index) => (
                      <MenuItem
                        key={index}
                        disabled={index === 0}
                        selected={index === selectedType}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )
        }
      </Popper>
    </>
  );
};

export default TypesOfEvent;
