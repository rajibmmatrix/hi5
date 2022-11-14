import {StackActions} from '@react-navigation/native';
import {createNavigationContainerRef} from '@react-navigation/native';
import {StackParamList} from 'types';

export const navigationRef = createNavigationContainerRef<StackParamList>();

export function navigate(name: string, params?: undefined) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function push(name: string, params?: undefined) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function reset(name: string, params?: undefined) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}
