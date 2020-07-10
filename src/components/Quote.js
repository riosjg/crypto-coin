import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Paragraph = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px;
`;

const Quote = ({result}) => {
    if(Object.keys(result).length === 0){
        return null;
    }
    console.log(result);

    return ( 
        <ResultDiv>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Paragraph>Highest price of the day: <span>{result.HIGHDAY}</span></Paragraph>
            <Paragraph>Lowest price of the day: <span>{result.LOWDAY}</span></Paragraph>
            <Paragraph>Variaton in the last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
            <Paragraph>Last update: <span>{result.LASTUPDATE}</span></Paragraph>
        </ResultDiv>
     );
}
 
export default Quote;