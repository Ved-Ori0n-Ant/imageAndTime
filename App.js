import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import imagePickerScreen from './Src/screens/imagePicker';
import timePickerScreen from './Src/screens/timePicker';

const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Slect Image" component={imagePickerScreen} />
      <Stack.Screen name="Slect Time" component={timePickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}