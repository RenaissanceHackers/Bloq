import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'
import { SCREEN_WIDTH } from '@/Utils/common'
import { Texts } from '@/Constants'

const CommentDepthZeroComponent = ({ name, content, date, id }) => {
    return (
        <View style={styles.frame629456} key={id}>
            <Image style={styles.userImage1} source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png" }}></Image>
            <View style={styles.frame629455}>
                <View style={styles.frame629453}>
                    <Text style={styles.userName}>
                        {name}
                    </Text>
                    <Text style={styles.commentContent}>
                        {content}
                    </Text>
                </View>
                <View style={styles.frame629454}>
                    <Text style={styles.commentDate}>
                        {date}
                    </Text>
                    <Text style={styles.reply}>
                        {Texts.CommentReply}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const CommentDepthOneComponent = ({ name, content, date, id }) => {
    return (
        <View style={styles.frame629460} key={id}>
            <Image style={styles.userImage2} source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png" }}></Image>
            <View style={styles.frame629459}>
                <View style={styles.frame629453}>
                    <Text style={styles.userName}>
                        {name}
                    </Text>
                    <Text style={styles.commentContent}>
                        {content}
                    </Text>
                </View>
                <View style={styles.frame629454}>
                    <Text style={styles.commentDate}>
                        {date}
                    </Text>
                    <Text style={styles.reply}>
                        {Texts.CommentReply}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const CommentDepthGreaterThanOneComponent = ({ name, content, date, id, replyName }) => {
    return (
        <View style={styles.frame629460} key={id}>
            <Image style={styles.userImage2} source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png" }}></Image>
            <View style={styles.frame629459}>
                <View style={styles.frame629453}>
                    <View style={styles.frame629461}>

                        <Text style={styles.userName}>
                            {name}
                        </Text>
                        <Text style={styles.reply2}>
                            {Texts.CommentReply}:
                        </Text>
                        <Text style={styles.userName}>
                            {replyName}
                        </Text>
                    </View>

                    <Text style={styles.commentContent}>
                        {content}
                    </Text>
                </View>
                <View style={styles.frame629454}>
                    <Text style={styles.commentDate}>
                        {date}
                    </Text>
                    <Text style={styles.reply}>
                        {Texts.CommentReply}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export { CommentDepthZeroComponent, CommentDepthOneComponent, CommentDepthGreaterThanOneComponent }

const styles = StyleSheet.create({
    frame629455: {
        width: SCREEN_WIDTH - 16 - 16 - 36,
        alignItems: "flex-start",
        gap: 4
    },
    frame629461: {
        height: 16,
        gap: 4,
        flexDirection: "row"
    },
    frame629459: {
        width: SCREEN_WIDTH - 16 - 16 - 36 - 28,
        alignItems: "flex-start",
        gap: 4
    },
    frame629460: {
        width: SCREEN_WIDTH - 16 - 16 - 36,
        gap: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        marginLeft: 36,
    },
    frame629456: {
        width: SCREEN_WIDTH - 16 - 16,
        gap: 4,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    userImage1: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        backgroundColor: theme.global.Semi.usage.fill['--color-fill-0'].value
    },
    userImage2: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        backgroundColor: theme.global.Semi.usage.fill['--color-fill-0'].value
    },

    frame629453: {
        width: "100%",
        alignItems: "flex-start"
    },
    frame629454: {
        gap: 16,
        height: 16,
        flexDirection: "row"
    },
    userName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
    commentContent: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: theme.global.Semi.usage.text['--color-text-0'].value
    },
    reply: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: theme.global.Semi.usage.primary['--color-primary'].value
    },
    reply2: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#3F3F46"
    },
    commentDate: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
})