import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MeScreen from '@/Screens/Me/MeScreen';
import { RouteName } from '@/Constants';
import SettingsScreen from '@/Screens/Me/SettingsScreen';
import AppearanceScreen from '@/Screens/Me/AppearanceScreen';
import NotificationScreen from '@/Screens/Me/NotificationScreen';
import ProfileScreen from '@/Screens/Me/ProfileScreen';
import WalletScreen from '@/Screens/Me/WalletScreen';
import MyContentScreen from '@/Screens/Me/MyContentScreen';
import MyContentDetailScreen from '@/Screens/Me/MyContentDetailScreen';
import MyContentGroupScreen from '@/Screens/Me/MyContentGroupScreen';
import ManagementScreen from '@/Screens/Me/ManagementScreen';

import ToolsScreen from '@/Screens/Me/ToolsScreen';
import CommunityGroupScreen from '@/Screens/Me/CommunityGroupScreen';
import CommunityDetailScreen from '@/Screens/Me/CommunityDetailScreen';

const Stack = createNativeStackNavigator();

export default function MeNavigator() {
    return (
        <Stack.Navigator initialRouteName={RouteName.MeRouter.me} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={RouteName.MeRouter.me} component={MeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.settings.settings} component={SettingsScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.settings.appearance} component={AppearanceScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.settings.notifications} component={NotificationScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.profile.profile} component={ProfileScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.wallet.wallet} component={WalletScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.mycontent.article.article} component={MyContentScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.mycontent.article.detail} component={MyContentDetailScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.mycontent.group.detail} component={MyContentGroupScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.mycontent.group.management} component={ManagementScreen} options={{
                headerShown: false
            }} />

            <Stack.Screen name={RouteName.MeRouter.mycontent.article.tools} component={ToolsScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.community.group} component={CommunityGroupScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.MeRouter.community.detail} component={CommunityDetailScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
