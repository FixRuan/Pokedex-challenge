import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.backgroundType.dark};
   align-items: center;
   justify-content: center;
`;

export const HomeTitle = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   font-size: 24px;
   color: ${({ theme }) => theme.colors.type.fire}; 
`;