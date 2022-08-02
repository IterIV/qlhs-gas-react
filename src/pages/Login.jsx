import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Paper } from "@mui/material";
import DialogMessage from "../components/DialogMessage";

export default function Login() {
  const { loading, errorMessage } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không để trống"),
      password: Yup.string().required("Mật khẩu không để trống"),
    }),
    onSubmit: (values) => {
      dispatch(login(values, navigate));
    },
  });

  return (
    <Box
      display="flex"
      sx={{ width: "100vw", height: "100vh", background: "#eee" }}
      justifyContent="center"
      alignItems="center"
    >
      <Paper sx={{ p: 3, width: "350px" }} elevation={0}>
        <Typography variant="h6" component="h1" align="center" sx={{ mb: 2 }}>
          Đăng nhập
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              name="email"
              type="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              name="password"
              type="password"
              label="Mật khẩu"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Stack>
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            startIcon={<LoginIcon />}
          >
            Đăng nhập
          </LoadingButton>
        </form>
      </Paper>
      {errorMessage !== "" && (
        <DialogMessage message={errorMessage} type="error" />
      )}
    </Box>
  );
}
