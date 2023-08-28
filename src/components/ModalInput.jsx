import React, { useState } from 'react'
import styled from 'styled-components'

const ModalInput = ({value, setValue, placeholder, labelTitle}) => {

  console.log(value)
  
  return (
    <InputBox>
      <LabelTitle>{labelTitle}</LabelTitle>
      <Entry
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name="lastname"
        placeholder={placeholder}

      />
    </InputBox>
  )
}

export default ModalInput


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
