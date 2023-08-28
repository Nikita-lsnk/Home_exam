import React from 'react'
import styled from 'styled-components'


const ModalButton = ({openModal, setOpenModal}) => {
  return (
    <BlockBtn>
      <MainButton onClick={() => setOpenModal(!openModal)}>Ок</MainButton>
    </BlockBtn>
    
  )
}

export default ModalButton

const BlockBtn = styled.div``;

const MainButton = styled.button`
  background: transparent;
  text-transform: uppercase;
  border: none;
  border-radius: 15px;
  color: #ffffff;
  background-color: #86BE3F;
  padding: 15px 72px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;