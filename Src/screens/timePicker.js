import React, { useState } from 'react';
import { Pressable, StyleSheet, Platform } from 'react-native';
import { colors } from '../utils/colors';
import imagePickerScreen from './imagePicker';
import DateTimePicker from '@react-native-community/datetimepicker';

const timePickerScreen = ({navigation}) => {
    const [date, setDate] = useState(new Date);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
        let fTime = tempDate.getHours() + " Hrs and " + tempDate.getMinutes() + " Mins.";

        setText(fDate + "\n" + fTime )
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
      <>
        <View>
            <Pressable onPress={() => showMode('time')} style={styles.btn}>
                <Text>Pick the time!!</Text>
            </Pressable>
            <Pressable onPress={() => showMode('date')} style={styles.btn}>
                <Text>Pick the date!!</Text>
            </Pressable>

            {show && (
            <DateTimePicker 
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='spinner'
                onChange={onChange}
            />)}

        </View>
        <View>
          <Pressable
            onPress={navigation.navigate(imagePickerScreen)}
            style={styles.btn}>
            <Text style={styles.text}>Pick the image!!</Text>
          </Pressable>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
    btn: {
        color: colors.navyBlue,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
});

export default timePickerScreen;