import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'

const LineComponent = () => {
    return (
        <View style={styles.line} />
    )
}

export default LineComponent

const styles = StyleSheet.create({
    line: {
        width: SCREEN_WIDTH - 16 - 16,
        height: 1,
        marginTop: 16,
        backgroundColor: theme.global.Semi.usage.disabled['--color-disabled-border'].value
    }
})