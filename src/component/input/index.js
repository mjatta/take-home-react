import React from 'react'

import { Container, InputField, Label } from '../../component/input/styles'

const Input = ({
    type,
    name,
    label,
    placeholder,
    value,
    onChange
                }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <InputField type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
        </Container>
        
    )
}

export default Input
