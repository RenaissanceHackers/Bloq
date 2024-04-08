import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'

import { navigate } from '@/Navigators/utils';
import { GroupCard } from '@/types';

type GroupCardItemProps = {
    group: GroupCard
}


function MyContentSingleGroupCardComponent({ group }: GroupCardItemProps) {
    const handlePress = () => {
        // 使用navigation.navigate跳转到详情页面，同时传递新闻的ID或整个新闻对象作为参数
        navigate({ name: "me/mycontent/group/detail", params: { groupId: group.id } })
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.frame629410}>
                <Image style={styles.groupImage} source={{ uri: group.image }} />
                <Text style={styles.groupName} numberOfLines={2}>{group.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyContentSingleGroupCardComponent

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
    groupImage: {
        width: 88,
        height: 88,
        backgroundColor: "#F4F4F5",
        borderRadius: 16,
    },
    groupName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 16,
        fontWeight: "600",
        width: 263,
        lineHeight: 24,
        color: "#000000"
    },
})