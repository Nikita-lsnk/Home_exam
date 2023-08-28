import React from 'react'
import styled from 'styled-components'

const ModalMainText = ({title, subTitle}) => {
  return (
    <MainText>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </MainText>
  )
}

export default ModalMainText

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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