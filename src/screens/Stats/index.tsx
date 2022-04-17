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

export function Stats() {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const [pokemonStats, setPokemonStats] = useState<any>();
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
                        <PokeballImage source={pokeball} />
                        <TouchableOpacity disabled={true}>
                            <ActiveItemText>Stats</ActiveItemText>
                        </TouchableOpacity>
                    </Item>

                    <Item>
                        <TouchableOpacity>
                            <ItemText>Evolution</ItemText>
                        </TouchableOpacity>
                    </Item>
                </NavBar>
            </Header>
            <Content showsVerticalScrollIndicator={false}>
                {isLoading ? <ActivityIndicator size={'large'} color={theme.colors.type[primaryType]} />
                    :
                    <>
                        <PokedexData>
                            <PokedexTitle type={primaryType}>Base Stats</PokedexTitle>

                            <Specs>
                                <SpecTitle>any</SpecTitle>
                                <SpecValue>any</SpecValue>
                            </Specs>


                        </PokedexData>
                    </>
                }

            </Content>
        </Container>
    );
}