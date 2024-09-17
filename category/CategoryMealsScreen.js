import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CategoryMealsScreen = () => {
  const route = useRoute();
  const { categoryId } = route.params;

  return (
    <View style={styles.screen}>
      <Text>Meals in Category ID: {categoryId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default CategoryMealsScreen;
