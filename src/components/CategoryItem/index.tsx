import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconMap } from '../AddCategoryDrawer/Icon.map';

interface CategoryItemProps {
  iconType: string;
  text: string;
  onTouch: () => void;
}

export const CategoryItem: FC<CategoryItemProps> = ({
  iconType,
  text,
  onTouch,
}) => {
  return (
    <View style={styles.wrapper} onTouchEnd={onTouch}>
      {IconMap[iconType]}
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
