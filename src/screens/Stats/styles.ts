import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
    type: string;
}

export const Container = styled.View<Props>`
   flex: 1;
   background-color: ${({ theme, type }) => theme.colors.backgroundType[type]};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px 24px;
    margin-top: 50px;
`;

export const BackIcon = styled(Feather)`
    font-size: 35px;
    color: ${({ theme }) => theme.colors.white};
`;

export const PokemonName = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 70px;
`;

export const ShapeImage = styled.Image`
    width: 140px;
    height: 65px;
    right: -40px;
    position: absolute;
`;

export const NavBar = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px 30px;
    margin-top: 40px;
    justify-content: space-between;
`;

export const Item = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ActiveItemText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const ItemText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
`;

export const PokeballImage = styled.ImageBackground`
    width: 100px;
    height: 100px;
    position: absolute;
    top: -8px;
    left: -30px;
`;

export const Content = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 0px 30px;
    margin-top: -30px;
    padding-top: 25px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${RFValue(15)}px;
    margin-top: 20px;
    text-align: justify;
`;

export const PokedexData = styled.View``;

export const PokedexTitle = styled.Text<Props>`
    font-size: ${RFValue(16)}px;
    color: ${({ theme, type }) => theme.colors.backgroundType[type]};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const Specs = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const SpecType = styled.View`
    width: 80px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const SpecTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.medium};
`

export const SpecValue = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-left: 20px;
`;

export const StatsNumber = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StatsMin = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StatsMax = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-left: 10px;
`;

export const SpecSkills = styled.View``

export const WeaknessesWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
`;

export const Gender = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
`;

interface GenderProps {
    gender: 'male' | 'female';
}

export const GenderIcon = styled(Ionicons) <GenderProps>`
    font-size: 14px;
    margin-right: 3px;
    ${({ theme, gender }) => css`
        color: ${gender === 'male' ? theme.colors.type.flying : theme.colors.type.fairy}
    `}
`;

export const Percentage = styled.Text<GenderProps>`
    font-size: ${RFValue(14)}px;
    ${({ theme, gender }) => css`
        color: ${gender === 'male' ? theme.colors.type.flying : theme.colors.type.fairy}
    `}
`;
