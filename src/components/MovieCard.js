import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MovieCard = ({ movie, onEdit, onDelete }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: movie.image }} style={styles.image} />
        <Text style={styles.title}>{movie.title}</Text>
      </TouchableOpacity>
      <View style={styles.cardActions}>
        <TouchableOpacity style={[styles.actionButton, styles.editButton]} onPress={onEdit}>
          <Ionicons name="pencil" size={16} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={onDelete}>
          <Ionicons name="trash" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
    position: 'relative',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
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
  },
  editButton: {
    backgroundColor: '#2196F3',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
});

export default MovieCard;