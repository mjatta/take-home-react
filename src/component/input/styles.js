import styled from "styled-components";

const Container = styled.div `

`;

const Label = styled.label `
    font-size: 18px !important;
    line-height: 1.25;
    text-align: left;
    color: black;
    positive: relative;
    margin-bottom: 6px;
    font-family: sans-serif;
`;

const InputField = styled.input `
    height: 32px;
    font-size: 20px;
    outline: none;
    width: 100%;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom-style: 2px solid #cce8ed 
    margin-bottom: 10px;    
    border-color: #cce8ed;

`;

export {
    Container,
    Label,
    InputField,
}