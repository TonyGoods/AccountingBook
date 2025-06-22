import { FC, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AddItemIcon } from '../../assets/svg/AddItemIcon';
import { DeleteIcon } from '../../assets/svg/DeleteIcon';
import { ResultIcon } from '../../assets/svg/ResultIcon';

interface KeyboardItemProps {
  keyName: string;
  onTouch: (keyName: string) => void;
  hasOperator: boolean;
}

export const KeyboardItem: FC<KeyboardItemProps> = ({
  keyName,
  onTouch,
  hasOperator,
}) => {
  const handleTouch = useCallback(() => {
    if (onTouch) {
      onTouch(keyName);
    }
  }, [keyName, onTouch]);

  const actionIcons = useMemo<Record<string, React.ReactElement>>(
    () => ({
      add: <AddItemIcon />,
      delete: <DeleteIcon />,
      result: <ResultIcon hasOperator={hasOperator} />,
    }),
    [hasOperator],
  );

  return (
    <View style={styles.wrapper} onTouchEnd={handleTouch}>
      {keyName.length === 1 && <Text style={styles.item}>{keyName}</Text>}
      {keyName.length !== 1 && actionIcons[keyName]}
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
