import {
  Animated,
  Dimensions,
  Easing,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { useAtom } from 'jotai';
import { bottomDrawerStatusAtom } from './src/store';
import { useRef } from 'react';
import { BottomDrawer } from './src/components/BottomDrawer';
import { BottomNavigator } from './src/components/BottomNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [bottomDrawerStatus, setBottomDrawerStatus] = useAtom(
    bottomDrawerStatusAtom,
  );
  const { height } = Dimensions.get('window');

  const translateY = useRef(new Animated.Value(0)).current;

  const showPopup = () => {
    setBottomDrawerStatus(true);
    Animated.timing(translateY, {
      toValue: -height,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const hidePopup = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 200,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => setBottomDrawerStatus(false));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BottomNavigator onShowBottomDrawer={showPopup} />
      {true && (
        <BottomDrawer onHideBottomDrawer={hidePopup} translateY={translateY} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
