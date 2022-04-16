import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, TouchableOpacity } from 'react-native';
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
    baseExp: string;
    catchRate: string;
    friendShipRate: string;
    growthRate: string;
}

export function Pokemon() {
    const theme = useTheme();
    const navigation = useNavigation();

    const [pokemonStats, setPokemonStats] = useState<PokemonSpecs>();
    const [pokemonWeaknesses, setPokemonWeaknesses] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const route: any = useRoute();
    const pokemon = route.params.pokemon;
    const primaryType = pokemon.types[0];

    function handleGoBack() {
        navigation.goBack();
    }

    useEffect(() => {
        async function loadPokemonData() {
            try {
                const id = FilterApiIdByType(pokemon.types[0]);

                const statsResponse = await api.get(pokemon.url);
                const waknessesResponse = await api.get(`https://pokeapi.co/api/v2/type/${id}`);
                const specRates = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.uuid}/`);



                const halfDamages = waknessesResponse.data.damage_relations.half_damage_to;
                const weaknesses = halfDamages.map(type => type.name);
                setPokemonWeaknesses(weaknesses);

                const catchRate = specRates.data.capture_rate;
                const friendShipRate = specRates.data.base_happiness;
                const growthRate = specRates.data.growth_rate.name;


                const data = {
                    species: statsResponse.data.species.name,
                    height: statsResponse.data.height,
                    weight: statsResponse.data.weight,
                    abilities: statsResponse.data.abilities.map(ability => ability.ability.name),
                    weaknesses: pokemonWeaknesses,
                    baseExp: statsResponse.data.base_experience,
                    catchRate,
                    friendShipRate,
                    growthRate,
                    ...pokemon,
                }

                setPokemonStats(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        loadPokemonData();
    }, [isLoading]);

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
                {isLoading ? <ActivityIndicator size={'large'} color={theme.colors.type[primaryType]} />
                    :
                    <>
                        <PokedexData>
                            <PokedexTitle type={primaryType}>Pokedex Data</PokedexTitle>
                            <Specs>
                                <SpecTitle>Species</SpecTitle>
                                <SpecValue>{pokemonStats.species}</SpecValue>
                            </Specs>

                            <Specs>
                                <SpecTitle>Height</SpecTitle>
                                <SpecValue>{pokemonStats.height}m</SpecValue>
                            </Specs>

                            <Specs>
                                <SpecTitle>Weight</SpecTitle>
                                <SpecValue>{pokemonStats.weight}</SpecValue>
                            </Specs>

                            <Specs>
                                <SpecTitle>Abilities</SpecTitle>
                                <SpecSkills>
                                    {pokemonStats.abilities.map(ability =>
                                        <SpecValue key={ability}>{ability}</SpecValue>
                                    )}
                                </SpecSkills>
                            </Specs>

                            <Specs>
                                <SpecTitle>Weaknesses</SpecTitle>
                                <WeaknessesWrapper>
                                    {pokemonStats?.weaknesses?.map(item => (
                                        <Type key={item} type={item} />
                                    ))}
                                </WeaknessesWrapper>
                            </Specs>

                            <PokedexTitle type={primaryType}>Training</PokedexTitle>
                            <Specs>
                                <SpecTitle>Catch Rate</SpecTitle>
                                <SpecValue>{pokemonStats.catchRate}</SpecValue>
                            </Specs>

                            <Specs>
                                <SpecTitle>Base Friendship</SpecTitle>
                                <SpecValue>{pokemonStats.friendShipRate}</SpecValue>
                            </Specs>

                            <Specs>
                                <SpecTitle>Base Exp</SpecTitle>
                                <SpecValue>{pokemonStats.baseExp}</SpecValue>
                            </Specs>

                            <Specs>
                                <SpecTitle>Growth Rate</SpecTitle>
                                <SpecValue>{pokemonStats.growthRate}</SpecValue>
                            </Specs>
                        </PokedexData>
                    </>
                }

            </Content>
        </Container>
    );
}