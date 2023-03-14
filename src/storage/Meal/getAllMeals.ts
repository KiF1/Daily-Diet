import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "@storage/storageConfig"
import { MealsInDate } from "./MealStorageDTO";

export async function getAllMeals(){
  try{
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const data: MealsInDate[] = storage ? JSON.parse(storage) : [];
    return data
  }catch(error){
    throw error
  }
}