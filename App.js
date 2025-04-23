import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <NavigationStack />
    </SafeAreaProvider>
  );
}