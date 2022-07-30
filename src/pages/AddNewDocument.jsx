import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment";
//Form
import { useFormik } from "formik";
import * as Yup from "yup";

const AddNewDocument = () => {
  const formik = useFormik({
    initialValues: {
      id: "4_HSTD",
      congTrinh: "Khach san Test",
      hangMuc: "Dieu chinh kien truc",
      diaDiem: "thanh pho Da Nang",
      chuDauTu: "Cong ty TNHH ABC",
      ngayNhan: moment().format("DD/MM/YYYY HH:MM"),
      ngayTra: "Thu Jun 16 2022 20:17:44 GMT+0700 (Giờ Đông Dương)",
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().required("Mã hồ sơ không để trống"),
      password: Yup.string().required("Mật khẩu không để trống"),
    }),
    onSubmit: (values) => {},
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
      <Typography variant="h6" component="h1" sx={{ mb: 2 }}>
        Thông tin hồ sơ
      </Typography>
      <form>
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
          id="congTrinh"
          name="congTrinh"
          type="text"
          label="Tên công trình/dự án/phương tiện"
          value={formik.values.congTrinh}
          onChange={formik.handleChange}
          error={formik.touched.congTrinh && Boolean(formik.errors.congTrinh)}
          helperText={formik.touched.congTrinh && formik.errors.congTrinh}
        />
        <TextField
          fullWidth
          id="hangMuc"
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
        <TextField
          fullWidth
          id="chuDauTu"
          name="chuDauTu"
          type="text"
          label="Chủ đầu tư"
          value={formik.values.chuDauTu}
          onChange={formik.handleChange}
          error={formik.touched.chuDauTu && Boolean(formik.errors.chuDauTu)}
          helperText={formik.touched.chuDauTu && formik.errors.chuDauTu}
        />
        <DateTimePicker
          label="Thời gian tiếp nhận"
          id="ngayNhan"
          name="ngayNhan"
          type="datetime-local"
          value={moment(formik.values.ngayNhan)}
          onChange={formik.handleChange}
          error={formik.touched.ngayNhan && Boolean(formik.errors.ngayNhan)}
          helperText={formik.touched.ngayNhan && formik.errors.ngayNhan}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Thời gian hẹn trả"
          id="ngayTra"
          name="ngayTra"
          value={formik.values.ngayTra}
          onChange={formik.handleChange}
          error={formik.touched.ngayTra && Boolean(formik.errors.ngayTra)}
          helperText={formik.touched.ngayTra && formik.errors.ngayTra}
          renderInput={(params) => <TextField {...params} />}
        />
      </form>
    </Box>
  );
};

export default AddNewDocument;
