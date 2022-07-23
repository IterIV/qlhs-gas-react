import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewDesignAction,
  resetMessageSucess,
} from "../actions/DesignActions";
import DesignDocument from "../models/DesignDocument";

import styled from "styled-components";
import moment from "moment";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// Table
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

// ICON MATERIAL
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ModalDetail from "../components/UI/ModalDetail";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function DesignNew() {
  const designDocument = new DesignDocument({});
  const [openModal, setOpenModal] = useState(false);

  const [select, setSelect] = useState(designDocument);

  const { authData } = useSelector((state) => state.authReducer);
  const { arrData, loading, messageSuccess, messageError } = useSelector(
    (state) => state.designReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (authData && authData.token) {
      dispatch(getNewDesignAction(authData.token));
    }
  }, [authData, dispatch]);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleClickAdd = (obj = designDocument) => {
    setSelect((prev) => obj);
  };
  const handleCloseAlert = () => {
    dispatch(resetMessageSucess());
  };
  const headers = [
    { field: "id", name: "ID", width: 5 },
    { field: "congTrinh", name: "Tên công trình", width: 20 },
    { field: "chuDauTu", name: "Chủ đầu tư", width: 15 },
    { field: "donViTK", name: "Đơn vị tư vấn thiết kế", width: 15 },
    { field: "ngayNhan", name: "Ngày nhận", width: 10 },
    { field: "ngayTra", name: "Ngày trả", width: 10 },
    { field: "settings", name: "Chức năng", width: 15 },
  ];

  const renderHeader = () => (
    <TableRow>
      {headers.map((header) => {
        return (
          <TableCell key={header.field} sx={{ width: `${header.width}%` }}>
            {header.name}
          </TableCell>
        );
      })}
    </TableRow>
  );

  const renderRowData = () =>
    arrData.map((data) => {
      return (
        <TableRow key={data.id}>
          {headers.map((header) => {
            if (header.field === "settings") {
              return (
                <TableCell
                  component="th"
                  scope="row"
                  key={header.field}
                  sx={{ width: `${header.width}%` }}
                >
                  <IconButton
                    color="success"
                    component="label"
                    onClick={() => {
                      handleClickAdd(data);
                      handleClickOpen();
                    }}
                  >
                    <PersonAddAlt1Icon />
                  </IconButton>
                  <IconButton color="error" component="label">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              );
            }
            return (
              <TableCell
                component="th"
                scope="row"
                key={header.field}
                sx={{
                  width: `${header.width}%`,
                  fontWeight: `${header.field === "id" ? "bold" : "400"}`,
                }}
              >
                {header.field === "ngayNhan" || header.field === "ngayTra"
                  ? moment(data[header.field]).format("DD/MM/yyyy")
                  : data[header.field]}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });

  const renderSkeletonRow = () => (
    <TableRow>
      {headers.map((header) => (
        <TableCell
          component="th"
          scope="row"
          key={header.field}
          sx={{ width: `${header.width}%` }}
        >
          <Skeleton variant="text" height={40} />
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <Container>
      <Stack direction="row" spacing={1} mb={2}>
        <Typography variant="h6" component="h1" sx={{ color: "#2f80db" }}>
          Hồ thẩm duyệt sơ mới
        </Typography>
        <Chip label={`${arrData.length} hồ sơ`} color="primary" />
      </Stack>
      <TableContainer component={Paper} sx={{ position: "relative" }}>
        {arrData.length !== 0 && (
          <Backdrop
            sx={{ color: "#fff", zIndex: 1, position: "absolute" }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        <Table size="medium">
          <TableHead>{renderHeader()}</TableHead>
          <TableBody>
            {arrData.length === 0 ? renderSkeletonRow() : renderRowData()}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalDetail
        selectedValue={select}
        open={openModal}
        handleClose={handleClose}
      />
      <Snackbar
        open={messageSuccess !== ""}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={handleCloseAlert}
        >
          {messageSuccess}
        </Alert>
      </Snackbar>
      <Snackbar
        open={messageError !== ""}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={handleCloseAlert}
        >
          {messageError}
        </Alert>
      </Snackbar>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 280px;
  padding-top: 90px;
  padding-right: 20px;
  background-color: #fcfdff;
  .css-apqrd9-MuiTableBody-root {
    .css-1q1u3t4-MuiTableRow-root {
      transition: 0.5s;
    }
    .css-1q1u3t4-MuiTableRow-root:hover {
      background-color: #eee;
    }
  }
`;
