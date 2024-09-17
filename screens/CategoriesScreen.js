// screens/CategoryMealsScreen.js

import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function CategoryMealsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  
  // Lấy categoryTitle từ params
  const { categoryTitle } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Meals in ${categoryTitle}`,
      headerRight: () => (
        <Button 
          title="Favorite" 
          onPress={() => {
            // Xử lý nút yêu thích ở đây
          }} 
        />
      ),
    });
  }, [navigation, categoryTitle]);

  return (
    <View style={styles.screen}>
      <Text>Meals Screen for {categoryTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

