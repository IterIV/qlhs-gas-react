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
import { addNew } from "../redux/actions/documentActions";
import { useSelector, useDispatch } from "react-redux";
const AddNewDocument = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.document);

  const formik = useFormik({
    initialValues: {
      id: "",
      building: "",
      detail: "",
      address: "",
      investor: "",
      startTime: moment().format("YYYY-MM-DDTkk:mm"),
      endTime: moment().format("YYYY-MM-DDTkk:mm"),
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().required("Mã hồ sơ không để trống"),
      building: Yup.string().required("Tên công trình, dự án không để trống"),
      detail: Yup.string().required("Hạng mục điều chỉnh không để trống"),
      address: Yup.string().required("Địa điểm không để trống"),
      investor: Yup.string().required("Chủ đầu tư không để trống"),
      startTime: Yup.string().required("Không để trống ngày nhận"),
      endTime: Yup.string().required("Không để trống ngày trả"),
    }),
    onSubmit: (values) => {
      dispatch(addNew(token, values, navigate));
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
                name="startTime"
                type="datetime-local"
                label="Thời gian tiếp nhận"
                value={formik.values.startTime}
                onChange={formik.handleChange}
                error={
                  formik.touched.startTime && Boolean(formik.errors.startTime)
                }
                helperText={formik.touched.startTime && formik.errors.startTime}
              />
              <TextField
                fullWidth
                name="endTime"
                type="datetime-local"
                label="Thời gian hẹn trả"
                value={formik.values.endTime}
                onChange={formik.handleChange}
                error={formik.touched.endTime && Boolean(formik.errors.endTime)}
                helperText={formik.touched.endTime && formik.errors.endTime}
              />
            </Stack>

            <TextField
              fullWidth
              name="building"
              type="text"
              label="Tên công trình/dự án/phương tiện"
              value={formik.values.building}
              onChange={formik.handleChange}
              error={formik.touched.building && Boolean(formik.errors.building)}
              helperText={formik.touched.building && formik.errors.building}
            />
            <TextField
              fullWidth
              name="detail"
              type="text"
              label="Hạng mục điều chỉnh, bổ sung"
              value={formik.values.detail}
              onChange={formik.handleChange}
              error={formik.touched.detail && Boolean(formik.errors.detail)}
              helperText={formik.touched.detail && formik.errors.detail}
            />
            <TextField
              fullWidth
              name="address"
              type="text"
              label="Địa điểm xây dựng (vùng hoạt động)"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <Stack>
              <TextField
                fullWidth
                name="investor"
                type="text"
                label="Chủ đầu tư"
                value={formik.values.investor}
                onChange={formik.handleChange}
                error={
                  formik.touched.investor && Boolean(formik.errors.investor)
                }
                helperText={formik.touched.investor && formik.errors.investor}
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
    </Box>
  );
};

export default AddNewDocument;
