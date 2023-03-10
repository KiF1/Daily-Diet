import { Container, Expand, Icon, StatisticsStyleProps } from "./styles";

export function Statistics({ inDiet, type = "primary" }: StatisticsStyleProps){
  return(
    <Container inDiet={inDiet}>
      <Expand><Icon type={type} /></Expand>
    </Container>
  )
}