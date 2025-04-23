import React from 'react';
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
  // Obtenemos la película de los parámetros de la ruta
  // En este caso, no usamos movie del contexto para mantener la película actualizada que viene de nuestra navegación
  const { movie } = route.params;
  const { deleteMovie } = useMovies();

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
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
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
    color: '#888',
    marginBottom: 3,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 5,
  },
  starIcon: {
    marginTop: 1,
  },
  synopsisLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  synopsis: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
    color: '#555',
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
    color: '#333',
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
  },
});