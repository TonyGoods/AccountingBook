import { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

interface UseCalendarAnimProps {
  setShowCalendar: (show: boolean) => void;
}

export const useCalendarAnim = ({ setShowCalendar }: UseCalendarAnimProps) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const showCalendar = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideCalendar = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateY, {
      toValue: 394,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowCalendar(false));
  };
  return { translateY, opacity, showCalendar, hideCalendar };
};
