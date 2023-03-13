export type MealStorageDTO = {
    meal: {
        id: string;
        name: string;
        date: string;
        hour: string;
        inDiet: boolean;
    },
    date: string;
}