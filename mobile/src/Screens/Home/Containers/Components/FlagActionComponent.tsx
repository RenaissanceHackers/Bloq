import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icons } from '@/Assets';
export default function FlagActionComponent() {
    return (
        <View style={styles.view}>
            <TouchableOpacity>
                <Icons.FlagIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        position: "absolute",
        bottom: 115,
        left: 317,
        width: 52,
        height: 52,
        zIndex: 1,
    }
});