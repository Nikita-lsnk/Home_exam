import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const HomeModal = ({ openModal, setOpenModal }) => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <Wrapper onClick={() => setOpenModal(!openModal)}>
      <Container onClick={e => e.stopPropagation()}>

        <Title>This is modal window</Title>
        <SubTitle>Enter your personal information</SubTitle>
        <EntryBox>
          <InputBox>
            <LabelTitle>First name</LabelTitle>
            <Entry
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              name="lastname"
              placeholder='Enter your last name'
              

            />
          </InputBox>
          <InputBox>
            <LabelTitle>Last name</LabelTitle>
            <Entry
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              name="lastname"
              placeholder='Enter your last name'
             
            />
          </InputBox>
        </EntryBox>
        <MainButton onClick={() => setOpenModal(!openModal)}>Ок</MainButton>

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


const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #86BE3F;
`;
const SubTitle = styled.span`
  display: block;
  text-align: center;
  max-width: 500px;
  font-size: 16px;
  line-height: 19.5px;
`;
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

const InputBox = styled.div`
  position: relative;
`;

const Entry = styled.input`
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.$highlight ? "red" : "#DBDBDB"};
  height: 32px;
  width: 214px;
  outline: none;
  font-size: 14px;
  @media screen and (max-width:690px) {
    width: calc(100% - 20px);
    
  }
  
  
`;

const LabelTitle = styled.label`
  position: absolute;
  top: -7px;
  left: 10px;
  background: #fff;
  color: #252525;
  font-size: 12px;
  font-weight: 700;
  padding: 0 5px;
  
  
`;