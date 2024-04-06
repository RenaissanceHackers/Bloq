import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'
import { postCard } from '@/types';



type PostCardProps = {
    post: postCard

}

function SinglePostCardComponent({ post }: PostCardProps) {
    // const handlePress = () => {
    //     // 使用navigation.navigate跳转到详情页面，同时传递新闻的ID或整个新闻对象作为参数
    //     navigate({ name: "community/detail", params: { groupId: group.id } })
    // };
    return (
        // <TouchableOpacity onPress={handlePress}>
        <View style={styles.frame629410}>
            <Image style={styles.image} source={{ uri: post.image }} />
            <View>
                <Text style={styles.name} numberOfLines={2}>{post.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{post.description}</Text>
            </View>
        </View>
        // </TouchableOpacity>
    );
};

export default SinglePostCardComponent

const styles = StyleSheet.create({
    frame629410: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: 120,
        borderBottomColor: "#F4F4F5",
        borderBottomWidth: 1,
        paddingTop: 16,
        paddingRight: 0,
        paddingBottom: 16,
        paddingLeft: 0,
        gap: 8,
        // backgroundColor: theme.global.Semi.usage.default['--color-default'].value
    },
    image: {
        width: 88,
        height: 88,
        backgroundColor: "#F4F4F5",
        borderRadius: 16,
    },
    name: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 16,
        fontWeight: "600",
        width: 263,
        lineHeight: 24,
        color: "#000000"
    },
    description: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
    }
})