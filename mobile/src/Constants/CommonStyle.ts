import theme from "@/Assets/theme"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/Utils/common"
import { StyleSheet } from "react-native"
import AspectRatio from "./AspectRatio"
const CommonStyles = StyleSheet.create({
    baseFrame: {
        marginTop: SCREEN_HEIGHT * AspectRatio.marginTopRatio,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * (1 - AspectRatio.marginTopRatio),
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-1'].value,
    },
    frame629426: {
        width: 24,
        height: 24,
        borderRadius: 99,
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    frame629473: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        width: SCREEN_WIDTH - 24 - 24,
        height: 24,
        gap: 227
    },
    frame629428: {
        marginTop: 24,
        width: SCREEN_WIDTH - 6 - 6,
        height: SCREEN_HEIGHT - 342,
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingTop: 24,
        paddingRight: 10,
        paddingBottom: 24,
        paddingLeft: 10,
    },
    frame629419: {
        gap: 8,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        height: 56,
        width: SCREEN_WIDTH - 16 - 16,
        flexDirection: "row",
        borderColor: "#F4F4F5",
        alignItems: "center",
    },
    frame629409: {
        gap: 10,
        height: 40,
        width: SCREEN_WIDTH - 16 - 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    frame629407: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 24,
        width: SCREEN_WIDTH - 16 - 50 - 16,
    },
    frame629489: {
        justifyContent: "center",
        alignItems: "center",
        width: 88,
        height: 88,
        marginTop: 27,
        backgroundColor: theme.global.Semi.usage.primary["--color-primary"].value,
        borderRadius: 99,
        padding: 8,
        gap: 8
    },
    list: {

    },
    tabBar: {
        flexDirection: "row",
        alignSelf: "flex-start",
        width: 140,
        height: 24,
        gap: 4
    },
    rectangle56: {
        paddingTop: 122,
        height: SCREEN_HEIGHT,
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        justifyContent: "flex-end",
    },
    rectangle54: {
        height: SCREEN_HEIGHT - 122,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        width: SCREEN_WIDTH,
        justifyContent: "space-between"

    },
    rectangle53: {
        height: 318,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        width: SCREEN_WIDTH,
        justifyContent: "space-between"
    },
    line10: {
        backgroundColor: "#F4F4F5",
        width: 146,
        height: 1,
    },
    textXs_leading4_fontNormal: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        color: "#A1A1AA",
        fontWeight: "400"
    },
    textXs_leading4_SemiBold: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        color: "#000000",
        fontWeight: "600"
    },
    text2xl_leading8_fontSemibold: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 24,
        lineHeight: 32,
        color: "#000000",
        fontWeight: "600"
    },
    textTiny: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        color: "rgba(0, 0, 0, 0.5)",
        fontWeight: "400"
    },
    textXl_leading7_fontSemibold: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 20,
        lineHeight: 28,
        fontWeight: "600"
    },
    textBase_leading6_fontNormal: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
    },
    text3xl_leading9_fontSemibold: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 30,
        lineHeight: 36,
        fontWeight: "600",
    },
    textBase_leading6_fontSemibold: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
    },
    textSm_leading5_fontNormal: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "400",
    },
    textSm_leading5_fontSemiBold: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "600",
    },
    frame629417: {
        width: SCREEN_WIDTH - 20 - 20,
        height: 24,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    image40: {
        width: 40,
        height: 40,
        borderRadius: 44,
        backgroundColor: "#F4F4F5"
    },
    singleText: {
        marginTop: 16,
        width: SCREEN_WIDTH - 81 - 81,
        height: 48,
    },
    icon32: {
        width: 32,
        height: 32,
        borderRadius: 99,
        gap: 8,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center"
    },
    icon24: {
        width: 24,
        height: 24,
        borderRadius: 99,
        gap: 8,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center"
    }


})
export default CommonStyles