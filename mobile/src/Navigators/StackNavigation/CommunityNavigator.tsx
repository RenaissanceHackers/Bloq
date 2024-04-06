import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteName } from '@/Constants';
import GroupScreen from '@/Screens/Community/GroupScreen';
import DetailScreen from '@/Screens/Community/DetailScreen';

const Stack = createNativeStackNavigator();

export default function CommunityNavigator() {
    return (
        <Stack.Navigator initialRouteName={RouteName.CommunityRouter.group} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={RouteName.CommunityRouter.group} component={GroupScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.CommunityRouter.detail} component={DetailScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
