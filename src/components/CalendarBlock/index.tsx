import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { CALENDAR_BLOCK_INDEX } from '../../styles/zIndex';
import { Calendar, DateData } from 'react-native-calendars';
import { FC, useCallback, useEffect } from 'react';
import { useCalendarAnim } from './useCalendarAnim';

interface CalendarBlockProps {
  onSelectDate: (date: DateData) => void;
  selectedDate: Date;
  setShowCalendar: (show: boolean) => void;
}

export const CalendarBlock: FC<CalendarBlockProps> = ({
  onSelectDate,
  selectedDate,
  setShowCalendar,
}) => {
  const { translateY, hideCalendar, opacity, showCalendar } = useCalendarAnim({
    setShowCalendar,
  });

  const { height } = Dimensions.get('window');
  useEffect(() => {
    showCalendar();
  }, []);

  const handleSelectDate = useCallback(
    (date: DateData) => {
      onSelectDate(date);
      hideCalendar();
    },
    [onSelectDate, hideCalendar],
  );
  return (
    <View style={[styles.wrapper, { height: height * 0.9 }]}>
      <Animated.View
        style={[styles.opticalWrapper, [{ opacity: opacity }]]}
        onTouchEnd={hideCalendar}
      />
      <Animated.View style={[{ transform: [{ translateY }], height: 394 }]}>
        <Calendar
          style={{ padding: 20 }}
          onDayPress={handleSelectDate}
          showSixWeeks
          initialDate={selectedDate.toISOString().split('T')[0]}
          markedDates={{
            [selectedDate.toISOString().split('T')[0]]: {
              selected: true,
            },
          }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: CALENDAR_BLOCK_INDEX,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  opticalWrapper: {
    flexShrink: 1,
    flexGrow: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
