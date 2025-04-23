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
import { useMovies } from '../data/MoviesContext';

export default function EditMovieScreen({ route, navigation }) {
  const { movie } = route.params;
  const { updateMovie } = useMovies();

  const [title, setTitle] = useState(movie.title);
  const [image, setImage] = useState(movie.image);
  const [category, setCategory] = useState(movie.category);
  const [year, setYear] = useState(movie.year.toString());
  const [rating, setRating] = useState(movie.rating.toString());
  const [classification, setClassification] = useState(movie.classification);
  const [synopsis, setSynopsis] = useState(movie.synopsis);

  const handleUpdateMovie = () => {
    // Validación básica
    if (!title || !image || !category || !year || !rating || !classification || !synopsis) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Actualizar película
    const updatedMovie = {
      ...movie,
      title,
      image,
      category,
      year: parseInt(year),
      rating: parseFloat(rating),
      classification,
      synopsis,
    };

    updateMovie(updatedMovie);
    Alert.alert('Éxito', 'Película actualizada correctamente', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('MovieDetail', { movie: updatedMovie }),
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
          <Text style={styles.header}>Editar Película</Text>

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
            <Button title="Guardar Cambios" onPress={handleUpdateMovie} color="#2196F3" />
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