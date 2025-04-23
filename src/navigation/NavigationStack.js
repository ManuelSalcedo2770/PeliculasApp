import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import AddMovieScreen from '../screens/AddMovieScreen';
import EditMovieScreen from '../screens/EditMovieScreen';
import AddReviewScreen from '../screens/AddReviewScreen';
import EditReviewScreen from '../screens/EditReviewScreen';
import { MoviesProvider } from '../data/MoviesContext';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <MoviesProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f8f8f8',
            },
            headerTintColor: '#333',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Películas',
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetailScreen}
            options={({ navigation }) => ({
              title: 'Detalles de Película',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  })}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Reviews"
            component={ReviewsScreen}
            options={{
              title: 'Reseñas',
            }}
          />
          <Stack.Screen
            name="AddMovie"
            component={AddMovieScreen}
            options={{
              title: 'Añadir Película',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="EditMovie"
            component={EditMovieScreen}
            options={{
              title: 'Editar Película',
            }}
          />
          <Stack.Screen
            name="AddReview"
            component={AddReviewScreen}
            options={{
              title: 'Añadir Reseña',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="EditReview"
            component={EditReviewScreen}
            options={{
              title: 'Editar Reseña',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MoviesProvider>
  );
}