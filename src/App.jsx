import React from 'react'
import styled from 'styled-components'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  

  return (
    
      <Wrapper>
        <Container >
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        
      </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  min-height:100vh;
  
  /* display: flex; */
  margin: 0;
  background-color: ${props => props.$isDarkTheme ? "#22272B" : "white"};
    @media screen and (max-width: 1375px) { 
      /* width: fit-content; */
  }
    @media screen and (max-width: 415px) { 
      flex-direction:column;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
    @media screen and (max-width: 415px) { 
      margin: unset;
    }
`;
