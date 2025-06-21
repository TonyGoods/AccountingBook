import { FC, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface KeyboardItemProps {
  keyName: string;
  onTouch: (keyName: string) => void;
  hasOperator: boolean;
}

export const KeyboardItem: FC<KeyboardItemProps> = ({ keyName, onTouch }) => {
  const handleTouch = useCallback(() => {
    if (onTouch) {
      onTouch(keyName);
    }
  }, [keyName, onTouch]);

  return (
    <View style={styles.wrapper} onTouchEnd={handleTouch}>
      <Text style={styles.item}>{keyName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '25%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c1c1c1',
    borderStyle: 'solid',
    display: 'flex',
  },
  item: {
    color: 'black',
    fontSize: 24,
  },
});
