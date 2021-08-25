import React from 'react';
import styled from 'styled-components';

const Error = styled.span`
    display: block;
    font-size: 36px;
    text-align: center;
`

const ErrorImg = styled.img`
    width: 100%;
`

const ErrorMessage = () => {
    return (
        <>
        <ErrorImg src={`https://cs9.pikabu.ru/post_img/big/2017/04/13/11/1492109737131780067.jpg`} alt="error"/>
        <Error> Error!! </Error>
        </>
    )
}

export default ErrorMessage;