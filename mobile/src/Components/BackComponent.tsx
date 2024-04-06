import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '@/Assets';
import theme from '@/Assets/theme';

const BackButton = ({ text }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Icons.ChevronLeftIcon style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
    },
    image: {
        width: 24,
        height: 24,
    },
    text: {
        lineHeight: 24,
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 16,
        color: theme.global.Semi.usage.primary['--color-primary'].value
    }

})

export default BackButton
