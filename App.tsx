import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CountryScreen from './src/screens/CountryScreen';
import MapScreen from './src/screens/MapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
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
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={MainStack}
          options={{
            headerShown: false,
            title: 'Continentes'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;