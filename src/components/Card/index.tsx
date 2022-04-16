import React from 'react';

import pattern from '../../assets/all/Pattern.png';
import PokeballShape from '../../assets/all/PokeballShape.png';
import pokemonPng from '../../assets/all/01.png';

import { TypeCard } from '../TypeCard';

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

interface CardProps {
    pokemon: {
        id: string;
        name: string;
        types: string[];
        pokemonImage?: string;
    }
}

export function Card({ pokemon }: CardProps) {

    const primaryType = pokemon.types[0];

    return (
        <Container primaryType={primaryType}>
            <Section>
                <Id>{pokemon.id}</Id>
                <Patern source={pattern} />
                <Name>{pokemon.name}</Name>
                <Types>
                    {pokemon.types.map(type => <TypeCard key={type} type={type} />)}
                </Types>
            </Section>
            <ImageWrapper>
                <Shape source={PokeballShape} />
                <Pokemon source={{ uri: pokemon.pokemonImage }} />
            </ImageWrapper>
        </Container>
    );
}