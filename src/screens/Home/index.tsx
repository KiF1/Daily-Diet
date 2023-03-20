import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { MealsInDate } from "@storage/Meal/MealStorageDTO";
import { useState } from "react";
import { FlatList } from "react-native";
import { MealList } from "./components/MealList";
import { Statistics } from "./components/Statistics";
import { Box, Container, Text } from "./styles";

export function Home(){
  const [inDiet, setInDiet] = useState<boolean>(true);
  const [meals, setMeals] = useState<MealsInDate[]>([])
  const navigation = useNavigation();

  function handleNavigation(){
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Statistics inDiet={inDiet}/>
      <Box>
        <Text>Refeições</Text>
        <Button viewIcon title="Nova refeição" onPress={handleNavigation} />
      </Box>
      <FlatList data={meals} keyExtractor={meal => meal.title} renderItem={(meal) => (
        <MealList key={meal.index} meals={meal}  />
      ) } />
    </Container>
  )
}