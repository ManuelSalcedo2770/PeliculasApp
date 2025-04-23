import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMovies } from '../data/MoviesContext';

export default function ReviewsScreen({ route, navigation }) {
  const { movie } = route.params;
  const { deleteReview } = useMovies();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Reseñas de ${movie.title}`, // Título dinámico basado en la película
      headerStyle: {
        backgroundColor: '#1c1c1c', // Fondo oscuro
      },
      headerTintColor: '#FFD700', // Texto dorado
      headerTitleStyle: {
        fontSize: 20,
      },
    });
  }, [navigation, movie.title]);

  const handleEditReview = (review, index) => {
    navigation.navigate('EditReview', {
      movie,
      reviewIndex: index,
      review,
    });
  };

  const handleDeleteReview = (index, username) => {
    Alert.alert(
      'Eliminar Reseña',
      `¿Estás seguro de que deseas eliminar la reseña de "${username}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            deleteReview(movie.id, index);
            Alert.alert('Éxito', 'Reseña eliminada correctamente');
          },
          style: 'destructive',
        },
      ]
    );
  };

  const renderReview = ({ item, index }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Text style={styles.username}>{item.username}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.editButton]}
            onPress={() => handleEditReview(item, index)}
          >
            <Ionicons name="pencil" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.deleteButton]}
            onPress={() => handleDeleteReview(index, item.username)}
          >
            <Ionicons name="trash" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.comment}>{item.comment}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.movieTitle}>Reviews de {movie.title}</Text>
        <TouchableOpacity
          style={styles.addReviewButton}
          onPress={() => navigation.navigate('AddReview', { movie })}
        >
          <Ionicons name="add-circle" size={28} color="#E91E63" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={movie.reviews}
        renderItem={renderReview}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay reseñas disponibles</Text>
            <TouchableOpacity
              style={styles.emptyAddButton}
              onPress={() => navigation.navigate('AddReview', { movie })}
            >
              <Text style={styles.emptyAddText}>Añadir la primera reseña</Text>
            </TouchableOpacity>
          </View>
        }
        style={styles.reviewsList}
      />
      
      <View style={styles.footer}>
        <Button 
          title="Volver a Detalles" 
          onPress={() => navigation.navigate('MovieDetail', { movie })} 
          color="#2196F3"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1c1c1c', // Fondo oscuro
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    color: '#FFD700', // Color dorado
    textAlign: 'center',
    fontFamily: 'CinematicFont', // Fuente personalizada
  },
  addReviewButton: {
    padding: 5,
  },
  reviewsList: {
    flex: 1,
    marginBottom: 20,
  },
  reviewCard: {
    backgroundColor: '#2c2c2c', // Fondo oscuro para las tarjetas
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFD700', // Borde dorado
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Texto dorado
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
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
  comment: {
    fontSize: 14,
    lineHeight: 20,
    color: '#ddd', // Texto claro
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFD700', // Texto dorado
    marginBottom: 15,
  },
  emptyAddButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFD700', // Borde dorado
  },
  emptyAddText: {
    color: '#fff',
    fontWeight: '500',
  },
  footer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#FFD700', // Línea dorada
  },
});