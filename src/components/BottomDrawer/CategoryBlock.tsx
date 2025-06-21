import { View, Text, StyleSheet } from 'react-native';

export const CategoryBlock = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ color: 'white' }}>Category Block</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexShrink: 1,
    flexGrow: 1,
  },
});
