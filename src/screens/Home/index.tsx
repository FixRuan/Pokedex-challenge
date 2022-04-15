import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import {
    Container,
    HomeTitle
} from './styles';

export function Home() {

    const theme = useTheme();

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.backgroundType.dark} />
            <HomeTitle>Home</HomeTitle>
        </Container>
    );
}