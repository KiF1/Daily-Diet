export type MealsInDate = {
    title: string;
    meals: MealStorageDTO[];
}

export type MealStorageDTO = {
    id: string;
    name: string;
    date: string;
    hour: string;
    inDiet: boolean;
}