import theme from "@/Assets/theme";
import { Text, StyleSheet, TouchableOpacity } from "react-native";


export default function TabComponent({ text, weight500 = false }) {
    return (
        <TouchableOpacity
            style={[styles.button, true ? styles.focused : null]}
            onPress={() => { }}
        >
            <Text style={weight500 ? styles.text500 : styles.text600}>{text}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        width: "auto",
        height: "auto",
        borderRadius: 16,
        paddingTop: 4,
        paddingRight: 16,
        paddingBottom: 4,
        paddingLeft: 16,
        gap: 8
    },
    text600: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "600",
        color: theme.global.Semi.usage.text['--color-text-0'].value
    },
    text500: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "500",
        color: theme.global.Semi.usage.text['--color-text-0'].value
    },

    focused: {
        backgroundColor: theme.global.Semi.usage.fill['--color-fill-1'].value
    }
})

