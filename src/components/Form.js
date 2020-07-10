import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import Axios from 'axios';
import Error from './Error'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({setCurrency, setCrypto}) => {

    //crypto list
    const [cryptoList, setCryptoList] = useState([]);
    const [error, setError] = useState(false);

    const currencies = [
        { code: 'USD', name: 'USA Dolar'},
        { code: 'ARS', name: 'Argentinian Peso'},
        { code: 'EUR', name: 'Euro'},
        { code: 'GBP', name: 'British pound sterling'}
    ]

    const [ currency, SelectCurrency] = useCurrency('Choose your currency', '', currencies);

    const [ crypto, SelectCrypto] = useCrypto('Choose your crypto', '', cryptoList);

    useEffect( () => {
        const fetchAPI = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const res = await Axios.get(url);

            setCryptoList(res.data.Data);
        }
        fetchAPI();
    }, []);

    const quoteCurrency = e => {
        e.preventDefault();

        if(currency.trim() === '' || crypto.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setCurrency(currency);
        setCrypto(crypto);
    }

    return ( 
        <form
            onSubmit={quoteCurrency}
        >

            {error ? <Error message='Every field must be completed.' /> : null}

            <SelectCurrency />

            <SelectCrypto />
            
            <Button
                type='submit'
                value='Calculate'
            />
        </form>
     );
}
 
export default Form;