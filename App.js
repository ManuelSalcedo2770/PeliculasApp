import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator, View, StyleSheet } from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    CinematicFont: require('./assets/fonts/CinematicFont.otf'), 
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.warn(error);
      }
    };

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
      <NavigationStack />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
});