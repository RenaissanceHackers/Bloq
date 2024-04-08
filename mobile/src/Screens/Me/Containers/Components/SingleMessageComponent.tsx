import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'

import { MessageCard } from '@/types';


type MessageCardItemProps = {
    message: MessageCard;
}

function getTimeDifferenceString(time: string): string {
    const date = new Date(time);
    const currentTime = new Date();

    // 计算时间差（毫秒）
    const diff = currentTime.getTime() - date.getTime();
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const diffMonths = Math.abs(currentTime.getMonth() - date.getMonth());
    const diffYears = Math.abs(currentTime.getFullYear() - date.getFullYear());

    // 时间差小于1分钟
    if (diffMinutes < 1) {
        return 'Just Now';
    }
    // 时间差小于1小时
    else if (diffHours < 1) {
        return `${diffMinutes}min`;
    }
    // 时间差小于24小时
    else if (diffDays < 1) {
        return `${diffHours}hours`;
    }
    // 时间差小于1周
    else if (diffWeeks < 1) {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }
    // 时间差小于1年
    else if (diffMonths < 12) {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    // 时间差大于1年
    else {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
}


function SingleMessageCardComponent({ message }: MessageCardItemProps) {
    return (
        <View style={styles.frame629410}>
            <View style={styles.frame629409}>
                <Image style={styles.image} source={{ uri: message.image }} />
                <View style={styles.frame629450}>
                    <Text style={styles.name} numberOfLines={1}>{message.name}</Text>
                    <Text style={styles.message} numberOfLines={1}>{message.message}</Text>
                </View>
                {message.unReadedMessageNumber === 0 ?
                    null : <View style={styles.frame629451}>
                        <Text style={styles.time} numberOfLines={1}>
                            {getTimeDifferenceString(message.recentTime)}
                        </Text>
                        <View style={styles.remind}>
                            <Text style={styles.cardNumber}>
                                {
                                    message.unReadedMessageNumber
                                }
                            </Text>
                        </View>
                    </View>}
            </View>

        </View>

    );
};

export default SingleMessageCardComponent

const styles = StyleSheet.create({
    frame629410: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 72,
        borderBottomColor: "#F4F4F5",
        borderBottomWidth: 1,
        paddingTop: 16,
        paddingRight: 0,
        paddingBottom: 16,
        paddingLeft: 0,
        // backgroundColor: theme.global.Semi.usage.default['--color-default'].value
    },
    frame629450: {
        flexDirection: "column",
        flex: 4,
    },
    frame629451: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "column",
        marginRight: 3,
        width: "auto",
        height: "100%",
    },
    frame629409: {
        width: "100%",
        height: 40,
        gap: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    image: {
        width: 40,
        height: 40,
        backgroundColor: "#F4F4F5",
        borderRadius: 16,
    },
    name: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        color: "#000000"
    },
    message: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        color: "#71717A"
    },
    time: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        color: "#71717A",
        alignSelf: "flex-end"
    },
    remind: {
        width: 16,
        height: 16,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        borderRadius: 99,
        backgroundColor: "#F31260",
        alignItems: "center",
        justifyContent: "center"
    },
    cardNumber: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        color: "#FFFFFF"
    },


})