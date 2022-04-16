import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import grass from '../../assets/all/types/grass.png';

import {
    Container,
    TypeImage,
    TypeName,
} from './styles';

interface TypeCardProps {
    type: string;
}

export function TypeCard({ type }: TypeCardProps) {
    const theme = useTheme();
    const FormattedType = type[0].toUpperCase() + type.slice(1);

    function handleTypeIcon() { }

    return (
        <Container types={type}>
            <TypeImage source={grass} />
            <TypeName>{FormattedType}</TypeName>
        </Container>
    );
}