import React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const DialogMessage = ({ message, type, handleClose }) => {
  return (
    <Snackbar
      open={message !== ""}
      autoHideDuration={4000}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      onClose={handleClose}
    >
      <Alert severity={type} sx={{ width: "100%" }} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default DialogMessage;
