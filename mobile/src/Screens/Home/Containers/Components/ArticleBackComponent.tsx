import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'
import { Texts } from '@/Constants'
import BackButton from '@/Components/BackComponent'
import { Icons } from '@/Assets'
import { SCREEN_WIDTH } from '@/Utils/common'

const ArticleBackComponent = () => {
    return (
        <View style={styles.header}>
            <BackButton text={Texts.ExploreBack} />
            <View style={styles.image}>
                <Icons.TextIcon />
            </View>
        </View>
    )
}

export default ArticleBackComponent

const styles = StyleSheet.create({
    image: {
        width: 24,
        height: 24,
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        borderRadius: 99,
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: "row",
        width: SCREEN_WIDTH - 20 - 20,
        justifyContent: "space-between",
        alignItems: "center",

    }
})