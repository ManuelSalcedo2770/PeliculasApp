import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMovies } from '../data/MoviesContext';

export default function HomeScreen({ navigation }) {
  const { movies, deleteMovie } = useMovies();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Películas',
      headerStyle: {
        backgroundColor: '#1c1c1c', // Fondo oscuro
      },
      headerTintColor: '#FFD700', // Texto dorado
      headerTitleStyle: {
        fontFamily: 'CinematicFont', // Fuente personalizada
        fontSize: 35,
      },
    });
  }, [navigation]);

  const handleDeleteMovie = (id, title) => {
    Alert.alert(
      'Eliminar Película',
      `¿Estás seguro de que deseas eliminar "${title}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            deleteMovie(id);
            Alert.alert('Éxito', 'Película eliminada correctamente');
          },
          style: 'destructive',
        },
      ]
    );
  };

  const renderMovie = ({ item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('MovieDetail', { movie: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <View style={styles.cardActions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => navigation.navigate('EditMovie', { movie: item })}
        >
          <Ionicons name="pencil" size={16} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleDeleteMovie(item.id, item.title)}
        >
          <Ionicons name="trash" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMovie')}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Fondo oscuro
    padding: 10,
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    position: 'relative',
  },
  card: {
    backgroundColor: '#2c2c2c', // Fondo oscuro para las tarjetas
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'gray', // Marco dorado
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color: '#FFD700', // Texto dorado
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E91E63', // Color del botón
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 2,
  },
  cardActions: {
    position: 'absolute',
    top: 5,
    right: 5,
    flexDirection: 'row',
  },
  actionButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  editButton: {
    backgroundColor: '#2196F3',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
});