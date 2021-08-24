import React from 'react';
import styled from 'styled-components';
import img from './error.jpeg';

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
        <ErrorImg src={img}  alt="error"/>
        <Error> Error!! </Error>
        </>
    )
}

export default ErrorMessage;