import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './utils'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './StackNavigation/HomeNavigator';
import { RouteName } from '@/Constants';
import CommunityNavigator from './StackNavigation/CommunityNavigator';
import MeNavigator from './StackNavigation/MeNavigator';
import RankNavigator from './StackNavigation/RankNavigator';
const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <MainBottomNavigation /> */}
      <Stack.Navigator>
        <Stack.Screen name={RouteName.MainRouter.Home} component={HomeNavigator} options={{
          headerShown: false
        }} />
        <Stack.Screen name={RouteName.MainRouter.Me} component={MeNavigator} options={{
          headerShown: false
        }} />
        <Stack.Screen name={RouteName.MainRouter.Community} component={CommunityNavigator} options={{
          headerShown: false
        }} />
        <Stack.Screen name={RouteName.MainRouter.Rank} component={RankNavigator} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
