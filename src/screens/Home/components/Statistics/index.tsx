import { Container, Expand, Icon, StatisticsStyleProps, Text, Title } from "./styles";

export function Statistics({ inDiet }: StatisticsStyleProps){
  return(
    <Container inDiet={inDiet}>
      <Expand><Icon /></Expand>
      <Title>90,86%</Title>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  )
}