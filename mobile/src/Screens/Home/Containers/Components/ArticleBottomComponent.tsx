import { StyleSheet, TouchableOpacity, View, Text, Share } from 'react-native'
import React from 'react'

import { Icons } from '@/Assets'
import theme from '@/Assets/theme'


import { SCREEN_WIDTH } from '@/Utils/common'

type BottomTabsProps = {
    like: number,
    favorite: number,
    comment: number,
    share: number,
    setCommentVisible: () => void,
}

const ArticleBottomComponent = ({ like, favorite, comment, share, setCommentVisible }: BottomTabsProps) => {
    const shareContent = () => {
        Share.share({
            message: 'Check out this awesome app!', // 分享的消息内容
            title: 'Awesome App', // 分享消息的标题
            url: 'https://example.com', // 分享的链接地址（iOS 可选）
        }, {
            excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'], // 在 iOS 上排除 Twitter 分享选项
            tintColor: '#FF0000', // 在 iOS 上设置分享对话框的主题颜色
            dialogTitle: 'Share with', // 在 Android 上设置分享对话框的标题
        });
    };
    return (
        <>
            <View style={styles.frame629397}>
                <View style={styles.view}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.iconArea}>
                            <Icons.LikeIcon />
                            <Text style={styles.number}>
                                {like}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={setCommentVisible}>
                        <View style={styles.iconArea}>
                            <Icons.CommentIcon />
                            <Text style={styles.number}>
                                {comment}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.iconArea}>
                            <Icons.BookMarkIcon />
                            <Text style={styles.number}>
                                {favorite}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={shareContent}>
                        <View style={styles.iconArea}>
                            <Icons.ShareArticleIcon />
                            <Text style={styles.number}>
                                {share}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View >
            </View >

        </>
    )
}




export default ArticleBottomComponent

const styles = StyleSheet.create({
    frame629397: {
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        borderWidth: 1,
        borderColor: theme.global.Semi.usage.border['--color-border'].value,
        width: SCREEN_WIDTH,
        height: 83,
        zIndex: 2,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 16,
        paddingLeft: 16,
    },
    view: {
        flexDirection: "row",
        width: "100%",
        height: 40,
        justifyContent: "space-between",
    },
    number: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: theme.global.Semi.usage.black['--color-black'].value,
    },
    iconArea: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 81,
        gap: 8
    }
})