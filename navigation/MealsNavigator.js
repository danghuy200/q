// MealsNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import các màn hình mà bạn đã tạo
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options={{ title: 'Meal Categories' }}
        />
        <Stack.Screen 
          name="CategoryMeals" 
          component={CategoryMealsScreen} 
        />
        <Stack.Screen 
          name="MealDetail" 
          component={MealDetailScreen}
          options={({ route }) => ({ title: route.params.mealTitle })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
