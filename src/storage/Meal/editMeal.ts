import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageconfig";
import { getAllMeals } from "./getAllMeals";
import { MealStorageDTO } from "./MealStorageDTO";

export async function editMeal(id: string, date: string, updatedMeal: MealStorageDTO) {
  try {
    const mealsInDate = await getAllMeals();
    const dateIndex = mealsInDate.findIndex(meals => meals.title === date);
    const mealIndex = mealsInDate[dateIndex].meals.findIndex(meal => meal.id === id);
    const mealToUpdate = mealsInDate[dateIndex].meals[mealIndex];
    const updatedMealObject = { ...mealToUpdate, ...updatedMeal };
    mealsInDate[dateIndex].meals[mealIndex] = updatedMealObject;
    
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsInDate));
  } catch (error) {
    throw error;
  }
}