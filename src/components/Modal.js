import styled from "styled-components";
export default function Modal({ show = false, handleHide, children }) {
  return (
    <Container className={`${show ? "show" : ""}`}>
      <div className="modal__bgoverlay" onClick={handleHide}></div>
      <Content>{children}</Content>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  .modal__bgoverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

const Content = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  min-width: 300px;
`;
