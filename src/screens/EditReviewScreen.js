import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useMovies } from '../data/MoviesContext';

export default function EditReviewScreen({ route, navigation }) {
  const { movie, reviewIndex, review } = route.params;
  const { updateReview } = useMovies();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Editar Reseña', // Título del header
      headerStyle: {
        backgroundColor: '#1c1c1c', // Fondo oscuro
      },
      headerTintColor: '#FFD700', // Texto dorado
      headerTitleStyle: {
        fontSize: 20,
      },
    });
  }, [navigation]);

  const [username, setUsername] = useState(review.username);
  const [comment, setComment] = useState(review.comment);

  const handleUpdateReview = () => {
    if (!username || !comment) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    const updatedReview = {
      username,
      comment,
    };

    updateReview(movie.id, reviewIndex, updatedReview);
    Alert.alert('Éxito', 'Reseña actualizada correctamente', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Reviews', { movie }),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          <Text style={styles.header}>Editar Review</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nombre de Usuario:</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Tu nombre o pseudónimo"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Comentario:</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={comment}
              onChangeText={setComment}
              placeholder="Escribe tu opinión sobre la película..."
              multiline
              numberOfLines={6}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Guardar Cambios" onPress={handleUpdateReview} color="#2196F3" />
            <View style={styles.buttonSpacer} />
            <Button title="Cancelar" onPress={() => navigation.goBack()} color="#757575" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Fondo oscuro
  },
  content: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFD700', // Color dorado
    fontFamily: 'CinematicFont', // Fuente personalizada
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFD700', // Color dorado
  },
  input: {
    backgroundColor: '#2c2c2c', // Fondo oscuro para los campos
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#FFD700', // Borde dorado
    fontSize: 16,
    color: '#fff', // Texto blanco
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonSpacer: {
    height: 15,
  },
});