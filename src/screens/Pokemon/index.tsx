import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import shape from '../../assets/all/shape.png';
import pokeball from '../../assets/all/Pokeball.png';

import {
    Container,
    Header,
    HeaderContent,
    BackIcon,
    PokemonName,
    ShapeImage,
    NavBar,
    Item,
    ItemText,
    ActiveItemText,
    PokeballImage,
    Content,
} from './styles';

export function Pokemon() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={theme.colors.white} />
            <Header>
                <HeaderContent>
                    <BackIcon name="arrow-left" />
                    <PokemonName>Clefairy</PokemonName>
                    <ShapeImage source={shape} />
                </HeaderContent>

                <NavBar>
                    <Item>
                        <PokeballImage source={pokeball} />
                        <ActiveItemText>About</ActiveItemText>
                    </Item>

                    <Item>
                        <ItemText>Stats</ItemText>
                    </Item>

                    <Item>
                        <ItemText>Evolution</ItemText>
                    </Item>
                </NavBar>
            </Header>
            <Content></Content>
        </Container>
    );
}