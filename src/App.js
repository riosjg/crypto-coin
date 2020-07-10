import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios'
import img from './crypto.png'
import Form from './components/Form'
import Quote from './components/Quote'
import Spinner from './components/Spinner';

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect( () => {

    const fetchData = async () =>{
      if(currency === ''){
        return;
      }
  
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
  
      const res = await axios(url);

      setLoading(true);

      setTimeout( () => {
        setLoading(false)
      }, 3000)
  
      setResult(res.data.DISPLAY[crypto][currency]);
    }
    fetchData();
  }, [currency, crypto])

  //Show spinner or Quote
  const component = (loading) ? <Spinner /> : <Quote result={result} />

  return (
    <Container>
      <div>
        <Image
          src={img}
          alt="crypto photo"
        />
      </div>
      <div>
        <Heading>Quote crypto at the moment!</Heading>

        <Form 
          setCurrency={setCurrency}
          setCrypto={setCrypto}
        />

        {component}

      </div>
    </Container>
  );
}

export default App;
