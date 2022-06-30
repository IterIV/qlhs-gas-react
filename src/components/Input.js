import styled from "styled-components";
export default function Input({ title, require, validation, id, ...props }) {
  return (
    <Container>
      <label htmlFor={id}>{`${title} ${require ? "*" : ""}`}</label>
      <input {...props}></input>
      {validation ? <p>{validation}</p> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  label {
    color: #939393;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  input {
    background-color: #f2f3f6;
    padding: 12px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    font-weight: 500;
  }
  input:disabled {
    opacity: 0.7;
    background-color: rgba(242, 243, 246, 0.6);
  }
  p {
    color: #f94c66;
    font-size: 13px;
    font-weight: 500;
  }
`;
