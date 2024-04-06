import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RankScreen from '@/Screens/Rank/RankScreen';
import { RouteName } from '@/Constants';
const Stack = createNativeStackNavigator();

export default function RankNavigator() {
    return (
        <Stack.Navigator initialRouteName={RouteName.RankRouter.rank} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={RouteName.RankRouter.rank} component={RankScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
