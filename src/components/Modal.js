import React from 'react'
import styled from 'styled-components'
export default function Modal({show, setShow, children}) {

  return (
    <Container className={`${show ? "show":""}`} onClick = {()=> setShow(!show)}>{children}</Container>
  )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    opacity: 0;
    visibility: hidden;
    &.show{
        opacity: 1;
        visibility: visible;
    }
`