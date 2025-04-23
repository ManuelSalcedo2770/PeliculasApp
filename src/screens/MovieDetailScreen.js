import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMovies } from '../data/MoviesContext';

export default function MovieDetailScreen({ route, navigation }) {
  const { movie } = route.params;
  const { deleteMovie } = useMovies();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: movie.title, // Título dinámico basado en la película
      headerStyle: {
        backgroundColor: '#1c1c1c', // Fondo oscuro
      },
      headerTintColor: '#FFD700', // Texto dorado
      headerTitleStyle: {
        fontFamily: 'CinematicFont', // Fuente personalizada
        fontSize: 35,
      },
    });
  }, [navigation, movie.title]);

  const handleDeleteMovie = () => {
    Alert.alert(
      'Eliminar Película',
      `¿Estás seguro de que deseas eliminar "${movie.title}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            deleteMovie(movie.id);
            Alert.alert('Éxito', 'Película eliminada correctamente', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Home'),
              },
            ]);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const reviewsCount = movie.reviews ? movie.reviews.length : 0;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: movie.image }} style={styles.image} />
          <View style={styles.editActionContainer}>
            <TouchableOpacity
              style={[styles.actionButton, styles.editButton]}
              onPress={() => navigation.navigate('EditMovie', { movie })}
            >
              <Ionicons name="pencil" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.deleteButton]}
              onPress={handleDeleteMovie}
            >
              <Ionicons name="trash" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          {/* Información de la película */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Categoría</Text>
              <Text style={styles.infoValue}>{movie.category}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Año</Text>
              <Text style={styles.infoValue}>{movie.year}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Calificación</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingValue}>{movie.rating}</Text>
                <Ionicons name="star" size={16} color="#FFD700" style={styles.starIcon} />
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Clasificación</Text>
              <Text style={styles.infoValue}>{movie.classification}</Text>
            </View>
          </View>
          <Text style={styles.synopsisLabel}>Sinopsis</Text>
          <Text style={styles.synopsis}>{movie.synopsis}</Text>
          {/* Sección de reseñas */}
          <View style={styles.reviewsSection}>
            <View style={styles.reviewsHeader}>
              <Text style={styles.reviewsTitle}>Reseñas ({reviewsCount})</Text>
              <TouchableOpacity
                style={styles.addReviewButton}
                onPress={() => navigation.navigate('AddReview', { movie })}
              >
                <Text style={styles.addReviewText}>Añadir Reseña</Text>
                <Ionicons name="add-circle-outline" size={18} color="#E91E63" />
              </TouchableOpacity>
            </View>
            <Button
              title="Ver Todas las Reseñas"
              onPress={() => navigation.navigate('Reviews', { movie })}
              color="#2196F3"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Volver a Inicio"
              onPress={() => navigation.navigate('Home')}
              color="#757575"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Fondo oscuro
  },
  imageContainer: {
    position: 'relative',
    borderBottomWidth: 5,
    borderBottomColor: '#FFD700', // Simula un marco dorado
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  editActionContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    flexDirection: 'row',
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
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
  infoContainer: {
    padding: 20,
    backgroundColor: '#2c2c2c', // Fondo oscuro para la información
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFD700', // Color dorado para el título
    textAlign: 'center',
    fontFamily: 'CinematicFont', // Fuente personalizada
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 3,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFD700',
    marginRight: 5,
  },
  starIcon: {
    marginTop: 1,
  },
  synopsisLabel: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#FFD700',
  },
  synopsis: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
    color: '#ddd',
  },
  reviewsSection: {
    marginTop: 5,
    marginBottom: 20,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD700',
  },
  addReviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addReviewText: {
    fontSize: 14,
    color: '#E91E63',
    marginRight: 5,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
});