import { ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PureComponent } from 'react'
import { CommonStyles } from '@/Constants'
import BackButton from '@/Components/BackComponent'
import HeaderText from '@/Components/HeaderText'
import TwoTabComponent from '@/Components/TwoTabComponent'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import TaskCard from '@/Components/TaskCard'

import { FlatList } from 'react-native-gesture-handler'
import TestTaskCard from 'assets/data/taskcard'
import TestTaskCard2 from 'assets/data/taskcard2'
import { Icons } from '@/Assets'
import TestTaskCard3 from 'assets/data/taskcard3'
import Taskscard3 from '@/Components/TaskCard3'
import ClaimRewardContainer from './Containers/ClaimRewardContainer'


const TasksCenterScreen = () => {
    const [showTabs1or2, setShowTabs1or2] = React.useState(true)
    const [tabIndex, setTabIndex] = React.useState(0)
    const [pickerVisible, setPickerVisible] = React.useState(false)
    const [claimRewardVisible, setClaimRewardVisible] = React.useState(false)
    const renderSeparator = () => (
        <View style={styles.separator} />
    );

    return (
        <View style={CommonStyles.baseFrame}>
            <ClaimRewardContainer visible={claimRewardVisible} onClose={() => setClaimRewardVisible(false)} />
            <View style={{ width: SCREEN_WIDTH - 20 - 20 }}>
                <BackButton text={"Me"} />
            </View>
            <View style={{ height: 24, marginTop: 20, marginLeft: 16, justifyContent: "space-between", flexDirection: "row", width: SCREEN_WIDTH - 16 - 16, alignItems: "center" }}>
                <TwoTabComponent textFirst={"Explore"} textSecond={'Accepted'} showTabs1or2={setShowTabs1or2} showIcon={false} />
                {showTabs1or2 ? null :
                    <TouchableOpacity onPress={() => setPickerVisible(!pickerVisible)}>
                        <View style={styles.tab}>
                            <View style={{ height: 24, alignItems: "center", justifyContent: "center" }}>
                                <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#0E0E0E" }]}>{(() => {
                                    switch (tabIndex) {
                                        case 0:
                                            return <Text>Draft</Text>;
                                        case 1:
                                            return <Text>Submitted</Text>;
                                        case 2:
                                            return <Text>Completed</Text>;
                                    }
                                })()}</Text>
                            </View>
                            <Icons.TaskChevronDown />
                        </View>
                    </TouchableOpacity>
                }
            </View>
            <HeaderText text={"Tasks center"} />
            <View style={{ marginTop: 11 }}>
                {tabIndex !== 2 ? <FlatList
                    data={showTabs1or2 ? TestTaskCard : TestTaskCard2}
                    renderItem={({ item }) => (
                        <TaskCard taskcard={item} />
                    )}
                    numColumns={2}
                    ItemSeparatorComponent={renderSeparator}
                    keyExtractor={item => item.id}
                /> : <FlatList data={TestTaskCard3} renderItem={({ item }) => (
                    <Taskscard3 taskcard3={item} handlePress={() => setClaimRewardVisible(true)} />
                )}
                    numColumns={2}
                    ItemSeparatorComponent={renderSeparator}

                    keyExtractor={item => item.id} />}
            </View>
            {/* <PickerTaskType visible={pickerVisible} onClose={() => setPickerVisible(false)} /> */}
            {pickerVisible ? <View style={styles.frame629393}>
                <View style={{ gap: 7 }}>
                    <TouchableOpacity onPress={() => { setTabIndex(0); setPickerVisible(false) }}>
                        <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: tabIndex === 0 ? "#000000" : "#71717A" }]}>Draft</Text>
                    </TouchableOpacity>
                    <View style={styles.line6}></View>
                    <TouchableOpacity onPress={() => { setTabIndex(1); setPickerVisible(false) }}>
                        <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: tabIndex === 1 ? "#000000" : "#71717A" }]}>Submitted</Text>
                    </TouchableOpacity>
                    <View style={styles.line6}></View>
                    <TouchableOpacity onPress={() => { setTabIndex(2); setPickerVisible(false) }}>
                        <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: tabIndex === 2 ? "#000000" : "#71717A" }]}>Completed</Text>
                    </TouchableOpacity>
                </View>
            </View> : null}



        </View >
    )
}




export default TasksCenterScreen

const styles = StyleSheet.create({
    tab: {
        borderRadius: 99,
        padding: 8,
        gap: 8,
        height: 24,
        width: "auto",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    separator: {
        height: 6,
    },
    frame629393: {
        position: "absolute",
        zIndex: 1,
        right: 16,
        top: 146 - 78,
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        gap: 8,
        backgroundColor: "#FAFAFA",
        borderColor: "#F4F4F5",
        width: 104,
        height: 112
    },
    line6: {
        width: 68,
        height: 2,
        backgroundColor: "#E4E4E7"
    }

})