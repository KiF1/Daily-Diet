import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageconfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(id: string, date: string){
  try{
    const mealsInDate = await getAllMeals();
    const dateIndex = mealsInDate.findIndex(meals => meals.title === date);
    const mealsWithoutDeleted = mealsInDate[dateIndex].meals.filter(meal => meal.id !== id);
    if(mealsWithoutDeleted.length === 0){
      const filteredMeals = mealsInDate.filter(meals => meals.title !== date);
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals));
    } else{
      mealsInDate[dateIndex].meals = mealsWithoutDeleted;
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsInDate));
    }
  } catch (error) {
    throw error;
  }
}