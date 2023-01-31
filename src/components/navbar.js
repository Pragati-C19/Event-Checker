import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import logoImg from "../images/calendar-icon.png";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { signInWithGoogle, signOutWithGoogle } from "../Firebase";

//To create navbar Dark
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

//Give proper styling to search tab
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//Main navbar code
const Navbar = ({ onClick, setQuery, filteredList, onChangeQuery }) => {
  //anchorEl is for laptop view and mobileMoreAnchorEl is for mobile view
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  //open and close navbar menu in mobile view
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  //open and close user account setting //TODO : firebase signin pop up write here
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  var signIn = false;
  const authentication = () => {
    if (signIn === false) {
      signInWithGoogle();
      signIn = true;
    } else {
      signOutWithGoogle();
      signIn = false;
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {/* Add New Event Button */}
        <Button variant="contained" color="success" onClick={onClick}>
          {/* I had try to do some other feature but it didn't work so used onClick prop here */}
          Add New Event
        </Button>
      </MenuItem>
      <MenuItem>
        {/* User Account */}
        <Tooltip title="Login">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
            <Avatar alt="Pragati Chothe" src="" />
          </IconButton>
        </Tooltip>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {/* Logo */}
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <img src={logoImg} alt="Logo" height="50px" width="50px" />
            </IconButton>

            {/* Title */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Event Checker
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* Search bar*/}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search the Event…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Search>

              {/* Add New Event Button */}
              <Button variant="contained" color="success" onClick={onClick}>
                {/* I had try to do some other feature but it didn't work so used onClick prop here */}
                Add New Event
              </Button>

              {/* User Account */}
              <Tooltip title="Login">
                <IconButton onClick={authentication} sx={{ p: 0 }}>
                  <Avatar src={localStorage.getItem("profilePic")} />
                </IconButton>
              </Tooltip>
            </Box>

            {/* Three dots will show in mobile view instead of all */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search the Event…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Search>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
