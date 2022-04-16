import React from 'react';
import Feather from '@expo/vector-icons/Feather';

import {
    Container,
    Input,
    InputIcon,
} from './styles';

export function InputFilter() {
    return (
        <Container>
            <InputIcon name="search" />
            <Input placeholder='What Pokémon are you looking for?' />
        </Container>
    );
}