import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import ImagePicker from 'react-native-image-crop-picker';
import timePickerScreen from './timePicker';

const imagePickerScreen = ({navigation}) => {
    const [imagePath, setImagePath] = useState("../assets/heart_and_soul.jpg");
    const imagePickerFun = () => {
        ImagePicker.openPicker({
            croppingImageMaxWidth: 180,
            croppingImageMaxHeight: 240,
            cropping: true
          }).then(image => {
            console.log(image);
            setImagePath(image.path);
          });
    }
    return(
        <View style = {styles.container}>
            <View style = {styles.imgContainer}>
                <Image 
                    style = {styles.img}
                    source = {{imagePath}}
                />
            </View>
            <TouchableOpacity onPress={imagePickerFun()} style = {styles.btn}>
                <Text style = {styles.text}>Pick the image!!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigation.navigate(timePickerScreen())} style = {styles.btn}>
                <Text style = {styles.text}>Pick the time!!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.navyBlue,
    },
    btn: {
        color: colors.white,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: spacing.md,
    },
    text: {
        margin: spacing.sm,
        fontSize: fontSizes.md,
        color: colors.white,
    },
    imgContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: colors.gray,
        color: colors.white,
        padding: spacing.sm,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: 180,
        width: 240,
    },
});

export default imagePickerScreen;