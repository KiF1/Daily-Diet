import { MealsInDate, MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { Container, Content, Date, Divider, Icon, MealContainer, Title } from "./styles";

type Props = {
  meals: MealsInDate
}

export function MealList({ meals }: Props){
  return(
    <>
    {meals.meals.map((meal: MealStorageDTO) => (
      <Container>
        <Title>{meal.date}</Title>
        <MealContainer>
          <Date>{meal.hour}</Date>
          <Divider />
          <Content>{meal.name}</Content>
          <Icon weight="fill" inDiet={meal.inDiet} />
        </MealContainer>
      </Container>
    ))}
    </>
  )
}