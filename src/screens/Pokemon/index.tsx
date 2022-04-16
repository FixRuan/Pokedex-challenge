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
    Description,
    PokedexData,
    PokedexTitle,
    Specs,
    SpecTitle,
    SpecValue,
    SpecSkills,
    WeaknessesWrapper
} from './styles';
import { Type } from '../../components/Type';

export function Pokemon() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.backgroundType.water} />
            <Header>
                <HeaderContent>
                    <BackIcon name="arrow-left" />
                    <PokemonName>Squirtle</PokemonName>
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
            <Content>
                <Description>
                    Squirtle's shell is not merely used for protection.
                    The shell's rounded shape and the grooves on its surface help
                    minimize resistance in water, enabling this Pokémon to
                    swim at high speeds.
                </Description>

                <PokedexData>
                    <PokedexTitle>Pokedex Data</PokedexTitle>
                    <Specs>
                        <SpecTitle>Species</SpecTitle>
                        <SpecValue>Tiny Turtle Pokémon</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>Height</SpecTitle>
                        <SpecValue>{'0.5m (1"08″)'}</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>Weight</SpecTitle>
                        <SpecValue>9.0kg (19.8 lbs)</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>Abilities</SpecTitle>
                        <SpecSkills>
                            <SpecValue>1. Torrent</SpecValue>
                            <SpecValue>Rain Dish (hidden ability)</SpecValue>
                        </SpecSkills>
                    </Specs>

                    <Specs>
                        <SpecTitle>Weaknesses</SpecTitle>
                        <WeaknessesWrapper>
                            <Type type='steel' />
                            <Type type='grass' />
                        </WeaknessesWrapper>
                    </Specs>
                </PokedexData>
            </Content>
        </Container>
    );
}