import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type StatisticsStyleProps = {
  inDiet?: boolean;
  type?: 'primary' | 'secondary'
}


export const Container = styled.View<StatisticsStyleProps>`
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

export const Icon = styled(ArrowUpRight).attrs<StatisticsStyleProps>(({theme, type}) => ({
  size: 24,
  color: type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
}))``;