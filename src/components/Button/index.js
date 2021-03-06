import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid --white;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    /* transition: opacity .3s; */

    background-color: #141414;

    &:hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        color: var(--white);
        background-color: red;
        
        
    },
    &:focus {
        opacity: .5;
    }
`;

export default Button;