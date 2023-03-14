import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  gap: 20px;
  padding: 24px;
`

export const Box = styled.View`
  width: 100%;
  gap: 10px;
`

export const Text = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`