// import React from 'react'
// import { StyleSheet } from 'react-native';
// import { Icons } from '@/Assets'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import theme from '@/Assets/theme';
// import HomeNavigator from './StackNavigation/HomeNavigator';
// import MeNavigator from './StackNavigation/MeNavigator';
// import CommunityNavigator from './StackNavigation/CommunityNavigator';
// import RankNavigator from './StackNavigation/RankNavigator';
// import { RouteName } from '@/Constants';
// const Tab = createBottomTabNavigator()


// export const MainBottomNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         // tabBarButton: () => null,
//         tabBarStyle: {
//           alignSelf: "center",
//           width: "100%",
//           display: 'none'

//         }
//       }}
//     >
//       <Tab.Screen
//         name={RouteName.MainRouter.Home}
//         component={HomeNavigator}
//         options={({ route }) => ({
//           tabBarIcon: ({ focused }) => (
//             focused ? <Icons.HomeIconFocused /> : <Icons.HomeIcon />
//           ),
//           headerShown: false,
//           // tabBarStyle: { display: getTabBarVisibility(route) ? 'none' : 'flex' }
//         })}
//       />
//       <Tab.Screen
//         name={RouteName.MainRouter.Rank}
//         component={RankNavigator}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             focused ? <Icons.RankIconFocused /> : <Icons.RankIcon />
//           ),
//           headerShown: false,
//           // tabBarStyle: { display: getTabBarVisibility(route) ? 'none' : 'flex' }
//         }}
//       />
//       <Tab.Screen
//         name={RouteName.MainRouter.Community}
//         component={CommunityNavigator}
//         options={({ route }) => ({
//           tabBarIcon: ({ focused }) => (
//             focused ? <Icons.CommunityIconFocused /> : <Icons.CommunityIcon />
//           ),
//           headerShown: false,
//           // tabBarStyle: { display: getTabBarVisibility(route) ? 'none' : 'flex' }
//         })}
//       />
//       <Tab.Screen
//         name={RouteName.MainRouter.Me}
//         component={MeNavigator}
//         options={({ route }) => ({
//           tabBarIcon: ({ focused }) => (
//             focused ? <Icons.MeIconFocused /> : <Icons.MeIcon />
//           ),
//           headerShown: false,
//           // tabBarStyle: { display: getTabBarVisibility(route) ? 'none' : 'flex' }
//         })}
//       />
//       {/* <Tab.Screen
//         name={RouteName.HomeRouter.article.article}
//         component={ArticleScreen}
//         options={{
//           tabBarButton: () => null,
//           headerShown: false,
//           // tabBarStyle: {display: getTabBarVisibility(route) ? 'none' : 'flex' }
//         }}
//       /> */}
//     </Tab.Navigator>
//   )
// }


// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
//   }
// });