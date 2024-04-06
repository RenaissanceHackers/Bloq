import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const DefaultUserIcon = ({ width = 80, height = 80 }) => {
    return (
        <LinearGradient
            colors={['#FF5C00', '#E58447', "#91B6FF"]} // 渐变色数组
            start={{ x: 0.25, y: 0.25 }} // 渐变色起点，0-1之间的数值
            end={{ x: 0.75, y: 0.75 }}   // 渐变色终点，0-1之间的数值
            style={[styles.defaultUserIcon, { width: width, height: height }]}    // 样式
        >
            {/* 其他组件内容 */}
        </LinearGradient>
    )
}

export default DefaultUserIcon

const styles = StyleSheet.create({
    defaultUserIcon: {
        borderRadius: 99,
    }
})