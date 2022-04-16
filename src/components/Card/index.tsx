import React from 'react';

import pattern from '../../assets/all/Pattern.png';
import PokeballShape from '../../assets/all/PokeballShape.png';
import pokemon from '../../assets/all/01.png';

import {
    Container,
    Section,
    Id,
    Patern,
    Name,
    Types,
    ImageWrapper,
    Shape,
    Pokemon,
} from './styles';
import { TypeCard } from '../TypeCard';

export function Card() {
    return (
        <Container>
            <Section>
                <Id>#001</Id>
                <Patern source={pattern} />
                <Name>Bulbasaur</Name>
                <Types>
                    <TypeCard type='grass' />
                    <TypeCard type='poison' />
                </Types>
            </Section>
            <ImageWrapper>
                <Shape source={PokeballShape} />
                <Pokemon source={pokemon} />
            </ImageWrapper>
        </Container>
    );
}