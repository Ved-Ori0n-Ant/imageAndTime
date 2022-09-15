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
      <Stack.Screen name="Select Time" children={timePickerScreen} />
      <Stack.Screen name="Select Image" children={imagePickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}