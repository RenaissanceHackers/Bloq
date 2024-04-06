import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react'
import theme, { getFontWeight } from '@/Assets/theme';
import { resolveThemeValue } from '@/Assets/theme';
import { Icons } from '@/Assets';
import { SCREEN_WIDTH } from '@/Utils/common';

type HeaderComponentProps = {
    showCard: boolean;
    text: string;
}

const HeaderComponent = ({ showCard, text }: HeaderComponentProps) => {
    return (
        <View style={styles.frame629415}>
            <View>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.frame629414}>
                <View style={
                    styles.searchContainer
                }>
                    <Icons.SearchSmIcon // 替换成你的搜索图标路径
                    />
                    <TextInput
                        placeholder="Search"
                        style={styles.inputStyle}
                    />
                </View>
                {showCard ? <View style={styles.greenCard}></View> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    frame629415: {
        width: SCREEN_WIDTH - 20 - 20,
        height: 32,
        flexDirection: 'row', // 横向排列
        alignItems: 'center', // 垂直居中
        justifyContent: 'space-between', // 水平居中
    },
    text: {
        // fontFamily: resolveThemeValue(theme.global.Header['header-3']['EN-Semi Bold'].fontFamily.value),
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: getFontWeight(theme.global.fontWeights['poppins-1'].value),
        fontSize: parseFloat(resolveThemeValue(theme.global.Header['header-3']['EN-Semi Bold'].fontSize.value)),
    },
    frame629414: {
        gap: 8,
        flexDirection: 'row',
    },
    greenCard: {
        width: 32,
        height: 32,
        borderRadius: 12,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value
    },
    searchContainer: {
        minWidth: 95,
        gap: 4,
        borderRadius: 20,
        paddingBottom: 8,
        paddingTop: 8,
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.global.Semi.usage.disabled['--color-disabled-fill'].value
    },
    inputStyle: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12, // 输入文字大小
        color: theme.global.Semi.usage.disabled['--color-disabled-text'].value
    },
});

export default HeaderComponent