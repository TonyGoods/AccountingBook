import { View, StyleSheet } from 'react-native';
import AddIcon from '../../assets/svg/AddIcon';
import { useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { bottomDrawerStatusAtom } from '../../store';
import { BOTTOM_NAVIGATOR_INDEX } from '../../styles/zIndex';

interface BottomNavigatorProps {
  onShowBottomDrawer: () => void;
}

export const BottomNavigator:React.FC<BottomNavigatorProps> = ({onShowBottomDrawer}) => {
  const setInputDrawerStatusAtom = useSetAtom(bottomDrawerStatusAtom);

  return (
    <View style={styles.wrapper}>
      <View onTouchEnd={onShowBottomDrawer}>
        <AddIcon width={48} height={48} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 100,
    width: '100%',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: BOTTOM_NAVIGATOR_INDEX,
  },
});
