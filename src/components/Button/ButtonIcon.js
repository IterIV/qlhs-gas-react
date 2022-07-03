import React from "react";
import styled from "styled-components";
export default function ButtonIcon({ icon, color = "primary", img, ...props }) {
  return (
    <Container className={`${color}`} {...props}>
      {img ? (
        <img src={img} alt={img} />
      ) : (
        <span className="material-symbols-outlined">{icon}</span>
      )}
    </Container>
  );
}
const Container = styled.button`
  background-color: transparent;
  padding: 0 5px;
  cursor: pointer;

  &.danger span {
    color: #d55454;
  }
  &.primary span {
    color: #347ddb;
  }
  &.success span {
    color: #14c38e;
  }
`;
