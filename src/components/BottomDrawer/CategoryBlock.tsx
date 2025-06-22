import { View, Text, StyleSheet } from 'react-native';
import { AddCategoryDrawer } from '../AddCategoryDrawer';
import { useCallback, useState } from 'react';
import { CategoryItem } from '../CategoryItem';

export const CategoryBlock = () => {
  const [showAddCategoryDrawer, setShowAddCategoryDrawer] = useState(false);

  const handleAddCategoryTouch = useCallback(() => {
    setShowAddCategoryDrawer(true);
  }, []);

  const handleCloseDrawer = useCallback(()=>{
    setShowAddCategoryDrawer(false);
  }, [])

  return (
    <View style={styles.wrapper}>
      <CategoryItem
        iconType="add"
        text="新增"
        onTouch={handleAddCategoryTouch}
      />
      {showAddCategoryDrawer && <AddCategoryDrawer onCloseDrawer={handleCloseDrawer}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexShrink: 1,
    flexGrow: 1,
  },
});
