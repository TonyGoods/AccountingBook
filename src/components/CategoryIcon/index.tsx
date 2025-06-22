import { FC, PropsWithChildren } from 'react';
import { View, StyleSheet, ViewProps, StyleProp } from 'react-native';

interface CategoryIconProps {
  style?: Record<string, string>;
}

export const CategoryIcon: FC<PropsWithChildren<CategoryIconProps>> = ({
  children,
  style,
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 999,
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
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
