/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import { RouteParamList } from '@/types'
import { CommonActions, RouteProp, createNavigationContainerRef } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'


export const navigationRef = createNavigationContainerRef<RouteParamList>()


export function navigate<RouteName extends keyof RouteParamList>(
  options: RouteName extends unknown
    ?
    | {
      key: string
      params?: RouteParamList[RouteName]
      merge?: boolean
    }
    | {
      name: RouteName
      key?: string
      params: RouteParamList[RouteName] | null
      merge?: boolean
    }
    : never
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(options)
  }
}




export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      })
    )
  }
}



export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      })
    )
  }
}

export function getFocusedScreen() {
  if (!navigationRef.isReady()) { return null }
  return navigationRef.getCurrentRoute()?.name
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}

