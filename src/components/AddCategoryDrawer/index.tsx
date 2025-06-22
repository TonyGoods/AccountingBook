import {
  View,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import { useAddCategoryDrawerAnim } from './useAddCategoryDrawerAnim';
import { FC, useEffect, useState } from 'react';
import { ADD_CATEGORY_DRAWER_INDEX } from '../../styles/zIndex';
import { LeftArrowIcon } from '../../assets/svg/AddCategoryDrawerIcons/LeftArrowIcon';
import { AddCategoryDoneIcon } from '../../assets/svg/AddCategoryDrawerIcons/DoneIcon';
import { IconMap } from './Icon.map';
import { CategoryIcon } from '../CategoryIcon';
import { icons } from './icons.data';

interface AddCategoryDrawerProp {
  onCloseDrawer: () => void;
}

export const AddCategoryDrawer: FC<AddCategoryDrawerProp> = ({
  onCloseDrawer,
}) => {
  const { translateX, width, openDrawer, closeDrawer } =
    useAddCategoryDrawerAnim(onCloseDrawer);
  const { height } = Dimensions.get('screen');

  const [categoryTitle, setCategoryTitle] = useState('');
  const [icon, setIcon] = useState('add');

  useEffect(() => {
    openDrawer();
  }, []);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        { transform: [{ translateX }], right: -width, height },
      ]}
    >
      <View style={styles.titleWrapper}>
        <View onTouchEnd={closeDrawer}>
          <LeftArrowIcon />
        </View>
        <Text style={{ fontSize: 20 }}>添加类别</Text>
        <AddCategoryDoneIcon />
      </View>
      <View style={styles.inputWrapper}>
        <CategoryIcon>{IconMap[icon]}</CategoryIcon>
        <TextInput
          placeholder="输入最多4个字"
          value={categoryTitle}
          onChangeText={setCategoryTitle}
          textAlign="right"
          style={{ fontSize: 20 }}
        />
      </View>
      <ScrollView style={styles.categoriesWrapper}>
        {icons.map(({ name, iconsArray }) => (
          <View key={name} style={styles.categories}>
            <Text>{name}</Text>
            <View style={styles.categoryWrapper}>
              {iconsArray.map(icon => (
                <CategoryIcon style={styles.category} key={icon}>
                  {IconMap[icon]}
                </CategoryIcon>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    zIndex: ADD_CATEGORY_DRAWER_INDEX,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ddd',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    paddingBottom: 10,
    borderBlockColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  categoriesWrapper: {
    display: 'flex',
    paddingHorizontal: 20,
    marginTop: 20
  },
  categories: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
  },
  categoryWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    justifyContent: 'space-between',
    marginTop: 20
  },
  category: {
    width: '20%',
  },
});
