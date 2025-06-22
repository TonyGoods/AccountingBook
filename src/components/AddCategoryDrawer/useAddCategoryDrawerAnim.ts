import { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

interface UseAddCategoryDrawerAnimHook {
  (onCloseDrawer: () => void): any;
}

export const useAddCategoryDrawerAnim: UseAddCategoryDrawerAnimHook =
  onCloseDrawer => {
    const translateX = useRef(new Animated.Value(0)).current;
    const { width } = Dimensions.get('window');

    const openDrawer = () => {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    const closeDrawer = () => {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(onCloseDrawer);
    };

    return { openDrawer, closeDrawer, translateX, width };
  };
