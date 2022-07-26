import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewDesignAction,
  resetListDocumentMessage,
} from "../redux/actions/DocumentAction";

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
  const [openModal, setOpenModal] = useState(false);
  const [select, setSelect] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { listDocument, loading, errorMessage, successMessage } = useSelector(
    (state) => state.listDocument
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.token && !openModal) {
      dispatch(getNewDesignAction(user.token));
    }
  }, [user, dispatch, openModal]);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleClickAdd = (obj) => {
    setSelect((prev) => obj);
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
    listDocument.map((data) => {
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
        <Chip label={`${listDocument.length} hồ sơ`} color="primary" />
      </Stack>
      <TableContainer component={Paper} sx={{ position: "relative" }}>
        {listDocument.length !== 0 && (
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
            {listDocument.length === 0 ? renderSkeletonRow() : renderRowData()}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalDetail
        selectedValue={select}
        open={openModal}
        handleClose={handleClose}
      />
      <Snackbar
        open={successMessage !== ""}
        autoHideDuration={4000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        onClose={() => dispatch(resetListDocumentMessage())}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={() => dispatch(resetListDocumentMessage())}
        >
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorMessage !== ""}
        autoHideDuration={4000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        onClose={() => dispatch(resetListDocumentMessage())}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={() => dispatch(resetListDocumentMessage())}
        >
          {errorMessage}
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
