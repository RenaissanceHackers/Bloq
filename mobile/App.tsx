import 'react-native-gesture-handler'
import ApplicationNavigator from '@/Navigators/Application'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => (
    <>

        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ApplicationNavigator />
            </View>
        </GestureHandlerRootView>

    </>
)

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF4FF',
    },
})
