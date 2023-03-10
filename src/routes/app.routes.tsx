import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditMeal } from '@screens/EditMeal';
import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { RegisteredMeal } from '@screens/RegisteredMeal';
import { Statistics } from '@screens/Statistics';
import { ViewMeal } from '@screens/ViewMeal';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name="new" component={NewMeal} />
      <Screen name="registered" component={RegisteredMeal} />
      <Screen name="view" component={ViewMeal} />
      <Screen name="edit" component={EditMeal} />
    </Navigator>
  )
}