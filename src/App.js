import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './Components/Phrase';
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [phrase, setPhrase] = useState({});
  const getPhrase = async () => {
    const response = await fetch(
      `https://breaking-bad-quotes.herokuapp.com/v1/quotes`,
    ).then((res) => res.json());
    setPhrase(response[0]);
  };
  useEffect(() => {
    getPhrase();
  }, []);
  return (
    <>
      <Container>
        <Phrase phrase={phrase} />
        <Button onClick={() => getPhrase()}>Get Phrase</Button>
      </Container>
    </>
  );
}

export default App;
