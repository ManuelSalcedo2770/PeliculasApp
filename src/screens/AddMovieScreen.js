import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useMovies } from '../data/MoviesContext';

export default function AddMovieScreen({ navigation }) {
  const { addMovie } = useMovies();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [classification, setClassification] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleAddMovie = () => {
    // Validación básica
    if (!title || !image || !category || !year || !rating || !classification || !synopsis) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Crear nueva película
    const newMovie = {
      id: uuidv4(),
      title,
      image,
      category,
      year: parseInt(year),
      rating: parseFloat(rating),
      classification,
      synopsis,
      reviews: [],
    };

    addMovie(newMovie);
    Alert.alert('Éxito', 'Película añadida correctamente', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home'),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.header}>Añadir Nueva Película</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Título:</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Título de la película"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>URL de la imagen:</Text>
            <TextInput
              style={styles.input}
              value={image}
              onChangeText={setImage}
              placeholder="https://example.com/image.jpg"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Categoría:</Text>
            <TextInput
              style={styles.input}
              value={category}
              onChangeText={setCategory}
              placeholder="Drama, Comedia, Acción, etc."
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Año:</Text>
            <TextInput
              style={styles.input}
              value={year}
              onChangeText={setYear}
              placeholder="Año de lanzamiento"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Calificación:</Text>
            <TextInput
              style={styles.input}
              value={rating}
              onChangeText={setRating}
              placeholder="Calificación (0-10)"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Clasificación:</Text>
            <TextInput
              style={styles.input}
              value={classification}
              onChangeText={setClassification}
              placeholder="G, PG, PG-13, R, etc."
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Sinopsis:</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={synopsis}
              onChangeText={setSynopsis}
              placeholder="Escribe la sinopsis de la película..."
              multiline
              numberOfLines={6}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Añadir Película" onPress={handleAddMovie} color="#E91E63" />
            <View style={styles.buttonSpacer} />
            <Button title="Cancelar" onPress={() => navigation.goBack()} color="#757575" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  buttonSpacer: {
    height: 15,
  },
});