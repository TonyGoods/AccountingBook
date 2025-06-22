import { useAtom } from 'jotai';
import { useRef } from 'react';
import { Dimensions, Animated, Easing } from 'react-native';
import { bottomDrawerStatusAtom } from '../../store';

export const useBottomDrawerAnim = () => {
  const [bottomDrawerStatus, setBottomDrawerStatus] = useAtom(
    bottomDrawerStatusAtom,
  );
  const { height } = Dimensions.get('window');

  const translateY = useRef(new Animated.Value(0)).current;

  const showPopup = () => {
    setBottomDrawerStatus(true);
    zoomIn();
    Animated.timing(translateY, {
      toValue: -height,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const hidePopup = () => {
    zoomOut();
    Animated.timing(translateY, {
      toValue: height,
      duration: 200,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => setBottomDrawerStatus(false));
  };

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const zoomIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.95,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const zoomOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  return {
    bottomDrawerStatus,
    translateY,
    showPopup,
    hidePopup,
    scaleAnim,
  };
};
