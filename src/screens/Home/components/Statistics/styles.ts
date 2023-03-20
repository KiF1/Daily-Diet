import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type DietStyleProps = {
  inDiet: boolean;
}

export const Container = styled.View<DietStyleProps>`
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({theme, inDiet}) => inDiet ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
  padding: 15px;
  gap: 1rem;
`

export const Expand = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(ArrowUpRight).attrs<DietStyleProps>(({theme, inDiet}) => ({
  size: 24,
  color: inDiet ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
}))``;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Text = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`