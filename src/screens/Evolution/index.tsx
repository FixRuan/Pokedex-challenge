import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { ActivityIndicator, StatusBar, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import shape from '../../assets/all/shape.png';
import pokeball from '../../assets/all/Pokeball.png';

import { Type } from '../../components/Type';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FilterApiIdByType } from '../../utils/filterTypeStats';

import { TypesArray } from '../../utils/fiterIcon';
import { setDamages } from '../../utils/damages';

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
    StatsNumber,
    SpecType,
    Effectiveness,
    Effective,
    EffectiveNumber,
} from './styles';


interface StatsProps {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export function Evolution() {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const [isLoading, setIsLoading] = useState(true);

    const route: any = useRoute();
    const pokemon = route.params.pokemon;

    const primaryType = pokemon.types[0];

    function handleGoBack() {
        navigation.goBack();
    }

    function OpenAbout() {
        navigation.navigate('Pokemon', { pokemon });
    }

    function handleStats() {
        navigation.navigate('Stats', { pokemon });
    }

    useEffect(() => {
        async function loadPokemonData() {
            try {
                const id = FilterApiIdByType(pokemon.types[0]);



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
                        <TouchableOpacity onPress={OpenAbout}>
                            <ItemText>About</ItemText>
                        </TouchableOpacity>
                    </Item>

                    <Item>
                        <TouchableOpacity onPress={handleStats}>
                            <ItemText>Stats</ItemText>
                        </TouchableOpacity>
                    </Item>

                    <Item>
                        <PokeballImage source={pokeball} />
                        <TouchableOpacity disabled={true}>
                            <ActiveItemText>Evolution</ActiveItemText>
                        </TouchableOpacity>
                    </Item>
                </NavBar>
            </Header>
            <Content showsVerticalScrollIndicator={false}>
                {isLoading ? <ActivityIndicator size={'large'} color={theme.colors.type[primaryType]} />
                    :
                    <>
                        <PokedexData>
                            <PokedexTitle type={primaryType}>Evolution Chart</PokedexTitle>
                        </PokedexData>
                    </>
                }

            </Content>
        </Container>
    );
}