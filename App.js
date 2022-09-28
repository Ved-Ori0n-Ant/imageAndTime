import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePickerScreen from './Src/screens/imagePicker';
import TimePickerScreen from './Src/screens/timePicker';

const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SelectTime" component={TimePickerScreen} />
      <Stack.Screen name="SelectImage" component={ImagePickerScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}