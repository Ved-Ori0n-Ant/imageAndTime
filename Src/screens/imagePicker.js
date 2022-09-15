import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import ImagePicker from 'react-native-image-crop-picker';
import timePickerScreen from './timePicker';

const imagePickerScreen = ({navigation}) => {
    const [image, setImage] = useState("../assets/heart_and_soul.jpg");
    const imagePickerFun = () => {
        ImagePicker.openPicker({
            croppingImageMaxWidth: 300,
            croppingImageMaxHeight: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path);
          });
    }
    return(
        <View style = {styles.container}>
            <View style = {styles.imgContainer}>
                <Image 
                    style = {styles.img}
                    source = {image}
                />
            </View>
            <Pressable onPress={imagePickerFun()} style = {styles.btn}>
                <Text style = {styles.text}>Pick the image!!</Text>
            </Pressable>
            <Pressable onPress={navigation.navigate(timePickerScreen)} style = {styles.btn}>
                <Text style = {styles.text}>Pick the time!!</Text>
            </Pressable>
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
        color: colors.secondary,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: spacing.md,
    },
    text: {
        margin: spacing.sm,
        fontSize: fontSizes.md,
        color: colors.primary,
    },
    imgContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: colors.gray,
        color: colors.white,
        padding: spacing.sm,
    },
});

export default imagePickerScreen;