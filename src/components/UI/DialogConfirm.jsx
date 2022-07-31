import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

const DialogConfirm = ({
  title,
  message,
  open,
  setOpen,
  handleOK,
  loading,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen((prev) => !prev);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Hủy
        </Button>
        <Button
          variant="contained"
          size="small"
          color="success"
          autoFocus
          onClick={handleOK}
        >
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogConfirm;
