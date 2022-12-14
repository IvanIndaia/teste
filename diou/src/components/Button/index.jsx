import React from 'react'
import { ButtonContainer } from './styles'

const button = ({ title, variant="primary", onClick })  =>  {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}

export { Button }