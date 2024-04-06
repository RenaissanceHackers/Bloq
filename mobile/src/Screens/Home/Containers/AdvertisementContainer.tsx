import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme';

const AdvertisementContainer = () => {
    return (
        <View style={styles.view}>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: "92%", // 容器宽度
        height: 184,
        marginTop: 12,
        borderRadius: 12,
        backgroundColor: theme.global.Semi.usage.default['--color-default-hover'].value,
    },
});


export default AdvertisementContainer