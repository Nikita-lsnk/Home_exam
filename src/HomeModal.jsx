import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ModalInput from './components/ModalInput';
import ModalMainText from './components/ModalMainText';
import ModalButton from './components/ModalButton';

const HomeModal = ({ openModal, setOpenModal }) => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <Wrapper onClick={() => setOpenModal(!openModal)}>
      <Container onClick={e => e.stopPropagation()}>

        <ModalMainText
          title="This is modal window"
          subTitle="Enter your personal information"
        />
        

        <EntryBox>
          <ModalInput
            labelTitle="First name"
            value={firstname}
            setValue={setFirstname}
            placeholder="Enter your first name"
          />
          <ModalInput
            labelTitle="Last name"
            value={lastname}
            setValue={setLastname}
            placeholder="Enter your last name"
          />


        </EntryBox>
        <ModalButton
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Container>
    </Wrapper>
  )
}

export default HomeModal



const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  border-radius: 20px;
  gap: 32px;
  background-color: #ffffff;
  padding: 35px 32px;
  @media screen and (max-width: 650px){
    margin-right: 20px;
    margin-left: 20px;
  }
  
  
`;




const StyledLink = styled(Link)`
  :hover, :focus{
    cursor: pointer;
  }
`;

const EntryBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 600px;
  @media screen and (max-width:690px) {
    flex-wrap: unset;
    flex-direction: column;
    
  }
`;

