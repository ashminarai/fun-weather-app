import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  display: block;
  width: 70%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top:10px;
  margin-left:30px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Response = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;

const Loading = styled.span`
  font-style: italic;
  color: #007bff;
`;

function App() {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate gathering information
    setResponse('Gathering information...');
    await delay(2000); // Wait for 2 seconds

    // Simulate analyzing clouds
    setResponse('Analyzing the clouds...');
    await delay(2000); // Wait for 2 seconds

    // Simulate looking outside your window
    setResponse('Looking outside your window...');
    await delay(2000); // Wait for 2 seconds

    // Simulate gathering last information
    setResponse('Gathering last information...');
    await delay(2000); // Wait for 2 seconds

    // Finally, display the response message
    setLoading(false);
    setResponse(`I don't know, go and look outside. Thank you, regards Ashmina.`);
  };

  // Helper function to simulate delays
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <Container>
      <Title>Weather App</Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="location-input">Enter the name of a location:</Label>
        <Input
          type="text"
          id="location-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={loading}
          placeholder="E.g., City or Place"
          required
        />
        <br></br>
        <Button type="submit" disabled={loading}>
          Submit
        </Button>
      </form>
      <Response>
        {loading ? <Loading>{response}</Loading> : response}
      </Response>
    </Container>
  );
}

export default App;
