import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export const Container = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) =>  theme.COLORS.GRAY_200 };
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(Plus).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.WHITE
}))``;