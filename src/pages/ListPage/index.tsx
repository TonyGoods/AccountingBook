import { Animated, View, StyleSheet } from 'react-native';
import { BottomDrawer } from '../../components/BottomDrawer';
import { BottomNavigator } from '../../components/BottomNavigator';
import { useBottomDrawerAnim } from './useAnimate';

export const ListPage = () => {
  const { bottomDrawerStatus, translateY, showPopup, hidePopup, scaleAnim } =
    useBottomDrawerAnim();

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.listWrapper, { transform: [{ scale: scaleAnim }] }]}>
        <BottomNavigator onShowBottomDrawer={showPopup} />
      </Animated.View>
      {bottomDrawerStatus && (
        <BottomDrawer onHideBottomDrawer={hidePopup} translateY={translateY} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
    borderRadius: 20,
  }
});