import styled from "styled-components";
export default function Spinner({ color, size = 1, background }) {
  return (
    <Container color={color} size={size} background={background}>
      <div className="spinner"></div>
    </Container>
  );
}

const Container = styled.div`
  .spinner {
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    border-radius: 50%;
    border: 4px solid ${(props) => props.color};
    border-left: 4px solid ${(props) => props.background};
    animation: spinner 1.5s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
