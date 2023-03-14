import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from '@utils/AppError';
import { getAllMeals } from './getAllMeals';
import { MealStorageDTO } from './MealStorageDTO';

export async function addMeal(meal: MealStorageDTO, date: string){
  try{
    const mealsInDate = await getAllMeals();
    const mealExists = mealsInDate.some(meals => {
      const mealInDate = meals.meals.find(m => m.name === meal.name && m.date === meal.date && m.hour === meal.hour);
      return !!mealInDate;
    });

    if (mealExists) {
      throw new AppError('Essa refeição já existe na data listada');
    } else if (mealsInDate.some(meals => meals.title === date)) {
      const mealDate = mealsInDate.find(meals => meals.title === date);
      mealDate?.meals.push(meal);
    } else {
      mealsInDate.push({
        title: date,
        meals: [meal]
      });
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsInDate));
  } catch(error){
    throw error;
  }
}