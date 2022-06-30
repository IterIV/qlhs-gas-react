import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../actions/AuthActions";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
export default function Login() {
  const { loading, error, messageError } = useSelector(
    (state) => state.authReducer
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
        <p>Đăng nhập</p>
        <form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            disabled={loading}
            require={true}
            title="Email"
            validation={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null
            }
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            disabled={loading}
            require={true}
            title="Mật khẩu"
            validation={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null
            }
          />
          {error ? <p>{messageError}</p> : null}
          <Button type="submit" loading={loading} title="Đăng nhập" full />
        </form>
      </div>
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
