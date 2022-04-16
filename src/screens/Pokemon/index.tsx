import React, { useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
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
    WeaknessesWrapper,
    Gender,
    GenderIcon,
    Percentage,
} from './styles';
import { Type } from '../../components/Type';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../services/api';
import { FilterApiIdByType } from '../../utils/filterTypeStats';

import { PokemonDataProps } from '../Home';

interface PokemonSpecs extends PokemonDataProps {
    species: string;
    height: string;
    weight: string;
    abilities?: string[];
    weaknesses?: string[];
}

export function Pokemon() {
    const theme = useTheme();
    const navigation = useNavigation();

    const [pokemonStats, setPokemonStats] = useState<PokemonSpecs>();
    const [pokemonWeaknesses, setPokemonWeaknesses] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const route: any = useRoute();
    const pokemon = route.params.pokemon;
    const primaryType = pokemon.types[0];

    function handleGoBack() {
        navigation.goBack();
    }

    useEffect(() => {
        async function loadPokemonData() {
            try {
                setIsLoading(true);
                const id = FilterApiIdByType(pokemon.types[0]);
                const waknessesResponse = await api.get(`https://pokeapi.co/api/v2/type/${id}`);
                const halfDamages = waknessesResponse.data.damage_relations.half_damage_to;
                const weaknesses = halfDamages.map(type => type.name);
                setPokemonWeaknesses(weaknesses);

                const statsResponse = await api.get(pokemon.url);
                const data = {
                    species: statsResponse.data.species.name,
                    height: statsResponse.data.height,
                    weight: statsResponse.data.weight,
                    abilities: statsResponse.data.abilities.map(ability => ability.ability.name),
                    weaknesses: pokemonWeaknesses,
                    ...pokemon,
                }
                setPokemonStats(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        loadPokemonData();
    }, []);

    if (!isLoading) {
        console.log(pokemonStats);
    }

    return (
        <Container type={primaryType}>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.backgroundType[primaryType]} />
            <Header>
                <HeaderContent>
                    <TouchableOpacity onPress={handleGoBack}>
                        <BackIcon name="arrow-left" />
                    </TouchableOpacity>

                    <PokemonName>{pokemon.name}</PokemonName>
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
            <Content showsVerticalScrollIndicator={false}>
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

                    {/* <PokedexTitle>Breeding</PokedexTitle>
                    <Specs>
                        <SpecTitle>Gender</SpecTitle>
                        <Gender>
                            <GenderIcon name="male" gender="male" />
                            <Percentage gender='male'>87.5%,</Percentage>
                            <GenderIcon name="female" gender="female" />
                            <Percentage gender='female'>12.5%,</Percentage>
                        </Gender>
                    </Specs>

                    <Specs>
                        <SpecTitle>Egg Groups</SpecTitle>
                        <SpecValue>Monster, Water 1</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>Egg Cycles</SpecTitle>
                        <SpecValue>20 (4,884 - 5,140 steps)</SpecValue>
                    </Specs>

                    <PokedexTitle>Location</PokedexTitle>
                    <Specs>
                        <SpecTitle>007</SpecTitle>
                        <SpecValue>(Red/Blue/Yellow)</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>232</SpecTitle>
                        <SpecValue>(Gold/Silver/Crystal)</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>007</SpecTitle>
                        <SpecValue>(FireRed/LeafGreen)</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>237</SpecTitle>
                        <SpecValue>(HeartGold/SoulSilver)</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>086</SpecTitle>
                        <SpecValue>(X/Y - Central Kalos)</SpecValue>
                    </Specs>

                    <Specs>
                        <SpecTitle>007</SpecTitle>
                        <SpecValue>(Let's Go Pikachu/Let's Go Eevee)</SpecValue>
                    </Specs> */}
                </PokedexData>
            </Content>
        </Container>
    );
}