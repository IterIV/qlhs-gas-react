import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutAction } from "../actions/AuthActions";
export default function Header() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAction());
  };
  return (
    <Container>
      <div className="header__left">
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div className="header__right">
        <button onClick={handleLogOut}>Lout Out</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 260px;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
