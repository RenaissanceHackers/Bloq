import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'

import { navigate } from '@/Navigators/utils';
import { ArticleCard, RouteParamList } from '@/types';
import { RouteName } from '@/Constants';

type ArticleListItemProps = {
    article: ArticleCard
}


function SingleArticleComponent({ article }: ArticleListItemProps) {
    const handlePress = () => {
        // 使用navigation.navigate跳转到详情页面，同时传递新闻的ID或整个新闻对象作为参数
        navigate({ name: "home/article", params: { articleId: article.id } })
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.view}>
                <View style={styles.additionalInformation}>
                    <Text style={styles.articleSource}>{article.source}</Text>
                    <Text style={styles.articleDate}>{article.date}</Text>
                </View>
                <View style={styles.articleCard}>
                    <Image style={styles.articleImage} source={{ uri: article.image }} />
                    <View style={styles.contentArea}>
                        <Text style={styles.articleTitle} ellipsizeMode='tail' numberOfLines={2}>{article.title}</Text>
                        <Text style={styles.articleDescription} ellipsizeMode='tail' numberOfLines={2}>{article.description}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SingleArticleComponent

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        flexDirection: "column",
        width: 361,
        height: 144,
        paddingTop: 16,
        paddingRight: 0,
        paddingBottom: 16,
        paddingLeft: 0,
        gap: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#F4F4F5"
        // backgroundColor: theme.global.Semi.usage.default['--color-default'].value
    },
    additionalInformation: {
        flexDirection: "row",
        width: "100%",
        gap: 209
    },
    articleCard: {
        flexDirection: "row",
        width: "100%",
        gap: 10
    },
    contentArea: {
        flexDirection: "column",
        flex: 1,
        gap: 8
    },
    articleImage: {
        borderRadius: 12,
        width: 88,
        height: 88,
        backgroundColor: theme.global.Semi.usage.default['--color-default-hover'].value
    },
    articleTitle: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 22,
        color: theme.global.Semi.usage.text['--color-text-0'].value,
    },
    articleDescription: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
    articleSource: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
    articleDate: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    }
})