import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import AppProvider from './context';

const AppStructure = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppStructure />
    </AppProvider>
  );
};

export default App;
