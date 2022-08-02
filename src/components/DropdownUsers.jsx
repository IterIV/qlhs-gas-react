import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getAllUsers } from "../redux/actions/userActions";
import DialogMessage from "./DialogMessage";

const DropdownUsers = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);
  const { listUsers, errorMessage } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenuItems = () => {
    if (listUsers.length === 0) {
      return (
        <MenuItem>
          <Typography variant="body1">Không có dữ liệu</Typography>
        </MenuItem>
      );
    }
    return listUsers.map(
      (user) =>
        user.enabled === 1 && (
          <MenuItem
            key={user.id}
            onClick={() => {
              setSelected((prev) => ({ ...user }));
            }}
          >
            <Avatar src={user.image} /> {user.lastName}
          </MenuItem>
        )
    );
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers(token));
  }, [token, dispatch]);
  return (
    <>
      {selected ? (
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          onClick={handleClick}
          sx={{
            cursor: "pointer",
            p: 1,
            borderRadius: "10px",
            transition: "0.5s",
            "&:hover": {
              backgroundColor: "#eee",
            },
          }}
        >
          <Avatar src={selected.image} />
          <Typography variant="button" sx={{ textTransform: "capitalize" }}>
            {selected.lastName}
          </Typography>
        </Stack>
      ) : (
        <IconButton color="primary" component="label" onClick={handleClick}>
          <PersonAddAlt1OutlinedIcon />
        </IconButton>
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {renderMenuItems()}
      </Menu>
      <DialogMessage message={errorMessage} type="error" />
    </>
  );
};

export default DropdownUsers;
