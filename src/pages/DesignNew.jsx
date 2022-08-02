import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNew } from "../redux/actions/documentActions";
import styled from "styled-components";
import moment from "moment";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
// Table
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";

// ICON MATERIAL
import PostAddIcon from "@mui/icons-material/PostAdd";
import DropdownUsers from "../components/DropdownUsers";
import DialogMessage from "../components/DialogMessage";

export default function DesignNew() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  let navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { token } = useSelector((state) => state.auth);
  const { listDocuments, errorMessage, successMessage } = useSelector(
    (state) => state.document
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNew(token));
  }, [token, dispatch]);
  const headers = [
    { name: "ID", width: 10 },
    { name: "Thời gian nhận/trả", width: 15 },
    { name: "Thông tin dự án", width: 30 },
    { name: "Chủ đầu tư", width: 25 },
    { name: "Chức năng", width: 20 },
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

  const renderRowData = () => {
    if (listDocuments.length === 0) {
      return (
        <TableRow key={document.id}>
          <TableCell colSpan={7}>
            <Typography variant="body1" align="center">
              Không có hồ sơ mới
            </Typography>
          </TableCell>
        </TableRow>
      );
    }
    if (listDocuments[0].id === "") {
      return headers.map((header, index) => (
        <TableCell
          component="th"
          scope="row"
          key={`header_${index}`}
          sx={{ width: `${header.width}%` }}
        >
          <Skeleton variant="text" height={40} />
        </TableCell>
      ));
    }
    return listDocuments
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((document) => {
        return (
          <TableRow key={document.id}>
            <TableCell sx={{ fontWeight: "bold" }}>{document.id}</TableCell>
            <TableCell>
              <Typography variant="body1">
                {moment(document.startTime).format("DD/MM/YYYY HH:mm")}
              </Typography>
              <Typography variant="body1">
                {moment(document.endTime).format("DD/MM/YYYY HH:mm")}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                {document.building}
              </Typography>
              <Typography variant="body2">{document.detail}</Typography>
            </TableCell>
            <TableCell>{document.investor}</TableCell>
            <TableCell>
              <DropdownUsers />
            </TableCell>
          </TableRow>
        );
      });
  };

  return (
    <Container>
      <Typography variant="h6" component="h1" sx={{ color: "#2f80db", mb: 2 }}>
        Hồ thẩm duyệt sơ mới
      </Typography>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6">Danh sách hồ sơ</Typography>
          </Stack>
          <Button
            variant="contained"
            color="success"
            startIcon={<PostAddIcon />}
            onClick={() => {
              navigate("../design/add", { replace: true });
            }}
          >
            Thêm mới
          </Button>
        </Stack>
        <Table size="medium">
          <TableHead>{renderHeader()}</TableHead>
          <TableBody>{renderRowData()}</TableBody>
        </Table>
        <TablePagination
          labelRowsPerPage="Tổng dữ liệu trên một trang"
          labelDisplayedRows={({ from, to, count }) =>
            `Từ ${from} đến ${to} / ${
              count !== -1 ? `${count} trang` : `more than ${to}`
            }`
          }
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={listDocuments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <DialogMessage message={errorMessage} type="error" />
      <DialogMessage message={successMessage} type="success" />
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
`;
