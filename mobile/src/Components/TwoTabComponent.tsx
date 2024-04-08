import { Icons } from "@/Assets";
import theme from "@/Assets/theme";
import { CommonStyles } from "@/Constants";
import { SCREEN_WIDTH } from "@/Utils/common";
import { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type State = {
    isFirstFocused: boolean;
    isSecondFocused: boolean;
}

interface TwoTabComponentProps {
    textFirst: string;
    textSecond: string;
    showTabs1or2: (value: boolean) => void;
    showIcon: boolean;
    editIcon?: boolean
    extraEvent?: () => void;
}

export default class TwoTabComponent extends Component<TwoTabComponentProps, State> {
    constructor(props) {
        super(props);
        this.state = { isFirstFocused: true, isSecondFocused: false };
    }

    onPressFirst = () => {
        // 当"First"被点击时，设置isFirstFocused为true，isSecondFocused为false
        this.setState({ isFirstFocused: true, isSecondFocused: false });
    };

    onPressSecond = () => {
        // 当"Second"被点击时，设置isSecondFocused为true，isFirstFocused为false
        this.setState({ isFirstFocused: false, isSecondFocused: true });
    };

    render() {
        const { isFirstFocused, isSecondFocused } = this.state;
        const { textFirst, textSecond, showTabs1or2, showIcon, editIcon, extraEvent } = this.props;
        return (
            <View style={{ flexDirection: "row", width: "auto", justifyContent: "space-between" }}>
                <View style={styles.tabBar}>
                    <TouchableOpacity
                        style={[styles.buttonFirst, isFirstFocused ? styles.focused : null]}
                        onPress={() => { this.onPressFirst(); showTabs1or2(true); extraEvent ? extraEvent() : null }}
                    >
                        <Text style={styles.textFirst}>{textFirst}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonSecond, isSecondFocused ? styles.focused : null]}
                        onPress={() => { this.onPressSecond(); showTabs1or2(false); extraEvent ? extraEvent() : null }}
                    >
                        <Text style={styles.textSecond}>{textSecond}</Text>
                    </TouchableOpacity>

                </View>
                {showIcon ? <View style={CommonStyles.icon24}>
                    {showIcon ? editIcon ? <Icons.SearchIcon /> : <Icons.MyContentGroupDetailEditIcon /> : null}
                </View> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        alignSelf: "flex-start",
        width: "auto",
        height: 24,
        gap: 4
    },
    buttonFirst: {
        width: "auto",
        height: "auto",
        borderRadius: 16,
        paddingTop: 4,
        paddingRight: 16,
        paddingBottom: 4,
        paddingLeft: 16,
        gap: 8
    },
    buttonSecond: {
        width: "auto",
        height: "auto",
        borderRadius: 16,
        paddingTop: 4,
        paddingRight: 16,
        paddingBottom: 4,
        paddingLeft: 16,
        gap: 8
    },
    textFirst: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "600",
        color: theme.global.Semi.usage.text['--color-text-0'].value
    },
    textSecond: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        fontWeight: "400",
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
    focused: {
        backgroundColor: theme.global.Semi.usage.fill['--color-fill-1'].value
    }
})

