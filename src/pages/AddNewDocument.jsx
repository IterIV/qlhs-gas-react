import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
//Form
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  addNewDocument,
  resetDocumentMessage,
} from "../redux/actions/DocumentAction";
import { useSelector, useDispatch } from "react-redux";
import DialogMessage from "../components/UI/DialogMessage";
const AddNewDocument = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { loading, errorMessage } = useSelector((state) => state.document);

  const formik = useFormik({
    initialValues: {
      id: "",
      congTrinh: "",
      hangMuc: "",
      diaDiem: "",
      chuDauTu: "",
      ngayNhan: moment().format("YYYY-MM-DDTkk:mm"),
      ngayTra: moment().format("YYYY-MM-DDTkk:mm"),
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().required("Mã hồ sơ không để trống"),
      congTrinh: Yup.string().required("Tên công trình, dự án không để trống"),
      hangMuc: Yup.string().required("Hạng mục điều chỉnh không để trống"),
      diaDiem: Yup.string().required("Địa điểm không để trống"),
      chuDauTu: Yup.string().required("Chủ đầu tư không để trống"),
      ngayNhan: Yup.string().required("Không để trống ngày nhận"),
      ngayTra: Yup.string().required("Không để trống ngày trả"),
    }),
    onSubmit: (values) => {
      dispatch(addNewDocument(user.token, values, navigate));
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        paddingLeft: "280px",
        paddingTop: "90px",
        paddingRight: "20px",
        backgroundColor: "#fcfdff",
      }}
    >
      <Paper elevation={2} sx={{ px: 3, py: 3 }}>
        <Typography variant="h6" component="h1" sx={{ mb: 2 }}>
          Thông tin hồ sơ
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <TextField
                fullWidth
                id="id"
                name="id"
                type="text"
                label="Mã hồ sơ"
                value={formik.values.id}
                onChange={formik.handleChange}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              />
              <TextField
                fullWidth
                name="ngayNhan"
                type="datetime-local"
                label="Thời gian tiếp nhận"
                value={formik.values.ngayNhan}
                onChange={formik.handleChange}
                error={
                  formik.touched.ngayNhan && Boolean(formik.errors.ngayNhan)
                }
                helperText={formik.touched.ngayNhan && formik.errors.ngayNhan}
              />
              <TextField
                fullWidth
                name="ngayTra"
                type="datetime-local"
                label="Thời gian hẹn trả"
                value={formik.values.ngayTra}
                onChange={formik.handleChange}
                error={formik.touched.ngayTra && Boolean(formik.errors.ngayTra)}
                helperText={formik.touched.ngayTra && formik.errors.ngayTra}
              />
            </Stack>

            <TextField
              fullWidth
              name="congTrinh"
              type="text"
              label="Tên công trình/dự án/phương tiện"
              value={formik.values.congTrinh}
              onChange={formik.handleChange}
              error={
                formik.touched.congTrinh && Boolean(formik.errors.congTrinh)
              }
              helperText={formik.touched.congTrinh && formik.errors.congTrinh}
            />
            <TextField
              fullWidth
              name="hangMuc"
              type="text"
              label="Hạng mục điều chỉnh, bổ sung"
              value={formik.values.hangMuc}
              onChange={formik.handleChange}
              error={formik.touched.hangMuc && Boolean(formik.errors.hangMuc)}
              helperText={formik.touched.hangMuc && formik.errors.hangMuc}
            />
            <TextField
              fullWidth
              id="diaDiem"
              name="diaDiem"
              type="text"
              label="Địa điểm xây dựng (vùng hoạt động)"
              value={formik.values.diaDiem}
              onChange={formik.handleChange}
              error={formik.touched.diaDiem && Boolean(formik.errors.diaDiem)}
              helperText={formik.touched.diaDiem && formik.errors.diaDiem}
            />
            <Stack>
              <TextField
                fullWidth
                id="chuDauTu"
                name="chuDauTu"
                type="text"
                label="Chủ đầu tư"
                value={formik.values.chuDauTu}
                onChange={formik.handleChange}
                error={
                  formik.touched.chuDauTu && Boolean(formik.errors.chuDauTu)
                }
                helperText={formik.touched.chuDauTu && formik.errors.chuDauTu}
              />
            </Stack>

            <Stack direction="row">
              <LoadingButton
                loading={loading}
                loadingPosition="start"
                type="submit"
                startIcon={<SaveIcon />}
                variant="contained"
                sx={{ width: "200px" }}
              >
                Lưu hồ sơ
              </LoadingButton>
            </Stack>
          </Stack>
        </form>
      </Paper>
      <DialogMessage
        message={errorMessage}
        type="error"
        handleClose={() => dispatch(resetDocumentMessage())}
      />
    </Box>
  );
};

export default AddNewDocument;
