import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CountryScreen from './src/screens/CountryScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Continentes' }}
        />
        <Stack.Screen
          name="Country"
          component={CountryScreen}
          options={{ title: 'Paises' }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'Informacion' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;