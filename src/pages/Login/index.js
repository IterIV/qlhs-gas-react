import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, resetMessage } from "../../redux/actions/AuthActions";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const { loading, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );
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
      dispatch({ type: "RESET_STATE" });
      dispatch(loginAction(values, navigate));
    },
  });

  return (
    <Container>
      <div className="login__content">
        <Typography variant="h6" component="h1" align="center" sx={{ mb: 2 }}>
          Đăng nhập
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              id="email"
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
              id="password"
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
            loadingIndicator="Đang kết nối..."
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            Đăng nhập
          </LoadingButton>
        </form>
      </div>

      <Snackbar
        open={successMessage !== ""}
        autoHideDuration={4000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        onClose={() => dispatch(resetMessage())}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={() => dispatch(resetMessage())}
        >
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorMessage !== ""}
        autoHideDuration={4000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        onClose={() => dispatch(resetMessage())}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={() => dispatch(resetMessage())}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  .login__content {
    width: 300px;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .login__content > p {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
  }
`;
