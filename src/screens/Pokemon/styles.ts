import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.backgroundType.fairy};
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
    justify-content: space-between;
`;

export const BackIcon = styled(Feather)`
    font-size: 35px;
    color: ${({ theme }) => theme.colors.white};
`;

export const PokemonName = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 80px;
`;

export const ShapeImage = styled.Image`
    width: 140px;
    height: 65px;
    margin-left: 80px;
`;

export const NavBar = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px 30px;
    margin-top: 40px;
    justify-content: space-between;
`;

export const Item = styled.View``;

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
    left: -20px;
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;
