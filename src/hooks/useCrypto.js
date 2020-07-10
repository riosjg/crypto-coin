import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCrypto = (label, initialState, options) => {

    console.log(options);

    const [state, setState] = useState(initialState);

    const SelectCrypto = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                <option value=''>Select</option>
                {options.map((o, i) => (
                    <option key={i} value={o.CoinInfo.Name}>{o.CoinInfo.FullName}</option>
                ))}
            </Select>
        </>
    );

    return [state, SelectCrypto]; 
}

export default useCrypto;