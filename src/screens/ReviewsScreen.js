import React from 'react';
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
        <Text style={styles.movieTitle}>Reseñas de {movie.title}</Text>
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
    backgroundColor: '#f8f8f8',
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
    color: '#333',
  },
  addReviewButton: {
    padding: 5,
  },
  reviewsList: {
    flex: 1,
    marginBottom: 20,
  },
  reviewCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
    color: '#333',
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
    color: '#555',
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
    color: '#888',
    marginBottom: 15,
  },
  emptyAddButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  emptyAddText: {
    color: '#fff',
    fontWeight: '500',
  },
  footer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});