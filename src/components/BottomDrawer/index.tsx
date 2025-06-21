import { Animated, Text, StyleSheet, View } from 'react-native';
import { BOTTOM_DRAWER_INDEX } from '../../styles/zIndex';
import { CategoryBlock } from './CategoryBlock';
import { CalculateBlock } from './CalculateBlock';

interface BottomDrawerProps {
  onHideBottomDrawer: () => void;
  translateY: Animated.Value;
}

export const BottomDrawer: React.FC<BottomDrawerProps> = ({
  onHideBottomDrawer,
  translateY,
}) => {
  return (
    <Animated.View
      style={[styles.animWrapper, { transform: [{ translateY }] }]}
    >
      <View style={styles.wrapper}>
        <CategoryBlock />
        <CalculateBlock onHideBottomDrawer={onHideBottomDrawer} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animWrapper: {
    position: 'absolute',
    left: 0,
    bottom: '-100%',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    zIndex: BOTTOM_DRAWER_INDEX,
    backgroundColor: '#d1d1d1',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
