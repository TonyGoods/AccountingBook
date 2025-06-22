import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { KeyboardItem } from './KeyboardItem';
import { FC, useCallback, useMemo, useState } from 'react';
import { CalendarIcon } from '../../assets/svg/CalendarIcon';
import { useCalculate } from './useCalculate';
import { CalendarBlock } from '../CalendarBlock';

interface CalculateBlockProps {
  onHideBottomDrawer: () => void;
}

export const CalculateBlock: FC<CalculateBlockProps> = ({
  onHideBottomDrawer,
}) => {
  const keyboardWrapperHeight = Dimensions.get('window').width * 0.8;
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const calendarDate = useMemo(() => selectedDate.getDate(), [selectedDate]);
  const { expression, hasOperator, onKeyTouch, items } = useCalculate({
    onHideBottomDrawer,
  });

  const onCalendarTouch = useCallback(() => {
    console.log('onCalendarTouch');
    setShowCalendar(true);
  }, []);

  const onSelectDate = useCallback((date: { dateString: string }) => {
    setSelectedDate(new Date(date.dateString));
  }, []);

  return (
    <View>
      <View style={styles.expressionWrapper}>
        <Text style={styles.expression}>¥ {expression}</Text>
      </View>
      <View style={styles.calendarWrapper} onTouchEnd={onCalendarTouch}>
        <CalendarIcon date={calendarDate} />
      </View>
      <View style={[styles.keyboardWrapper, { height: keyboardWrapperHeight }]}>
        {items.map(item => (
          <KeyboardItem
            key={item}
            keyName={item}
            onTouch={onKeyTouch}
            hasOperator={item === 'result' && hasOperator}
          />
        ))}
      </View>
      {showCalendar && (
        <CalendarBlock
          onSelectDate={onSelectDate}
          selectedDate={selectedDate}
          setShowCalendar={setShowCalendar}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  expressionWrapper: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopColor: '#c1c1c1',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  expression: {
    color: 'orange',
    fontSize: 28,
    paddingRight: '5%',
  },
  calendarWrapper: {
    paddingLeft: 10,
  },
  keyboardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});
