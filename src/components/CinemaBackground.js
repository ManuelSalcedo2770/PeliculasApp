import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const CinemaBackground = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/cinema-background.jpg')} // Asegúrate de tener esta imagen en la carpeta assets
        style={styles.backgroundImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CinemaBackground;