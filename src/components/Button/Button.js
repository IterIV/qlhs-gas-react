import styled from "styled-components";
import Spinner from "../Spinner";
export default function Button({ title, loading, full = false, ...props }) {
  return (
    <ButtonST {...props} disabled={loading} full={full}>
      {loading ? (
        <Spinner color="white" size="20" background="#367cdb" />
      ) : null}
      <span>{title}</span>
    </ButtonST>
  );
}

const ButtonST = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #367cdb;
  color: white;
  font-family: inherit;
  font-weight: 500;
  border-radius: 6px;
  padding: 12px;
  font-size: 14px;
  margin: 10px 0;
  cursor: pointer;
  ${(props) => (props.full ? "width: 100%;" : "")}
  transition: 0.3s;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:disabled:hover {
    opacity: 0.6;
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
  span {
    margin-left: 10px;
  }
`;
