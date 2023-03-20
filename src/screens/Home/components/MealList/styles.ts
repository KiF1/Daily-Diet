import { Circle } from "phosphor-react-native";
import styled from "styled-components/native";
import { DietStyleProps } from "../Statistics/styles";


export const Container = styled.View`
  width: 100%;
  gap: 16px;
`

export const Title = styled.Text`
  margin-top: 24px;
  font-size: 18px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const MealContainer = styled.View`
  width: 100%;
  padding: 1rem;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  gap: 8px;
  `

export const Date = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100}
`

export const Content = styled.Text`
  flex: 1;
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Divider = styled.View`
  width: 2px;
  height: 15px;
  background-color: #B9BBBC;
  margin: 0 5px;
`

export const Icon = styled(Circle).attrs<DietStyleProps>(({theme, inDiet}) => ({
  size: 20,
  color: inDiet ? theme.COLORS.GREEN_400 : theme.COLORS.RED
}))``;