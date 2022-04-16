import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import Filter from '../../assets/all/filter.svg';
import Filter2 from '../../assets/all/filter2.svg';
import Filter3 from '../../assets/all/filter3.svg';
import { Card } from '../../components/Card';
import { InputFilter } from '../../components/InputFilter';

import {
    Container,
    Filters,
    FilterWrapper,
    Header,
    SubTitle,
    Title,
    Content,
} from './styles';

export function Home() {

    const theme = useTheme();

    const pokemon = {
        id: '001',
        name: 'Bulbasaur',
        types: ['ground', 'bug'],
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.white} />
            <Filters>
                <FilterWrapper>
                    <Filter height={30} />
                </FilterWrapper>

                <FilterWrapper>
                    <Filter2 height={30} />
                </FilterWrapper>

                <FilterWrapper>
                    <Filter3 height={30} />
                </FilterWrapper>
            </Filters>

            <Header>
                <Title>Pokédex</Title>
                <SubTitle>
                    Search for Pokémon by name or using the{'\n'}National Pokédex number.
                </SubTitle>
                <InputFilter />
            </Header>

            <Content>
                <Card pokemon={pokemon} />
            </Content>
        </Container>
    );
}