import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { KeyboardItem } from './KeyboardItem';
import { FC, useCallback, useState } from 'react';

interface CalculateBlockProps {
  onHideBottomDrawer: () => void;
}

export const CalculateBlock: FC<CalculateBlockProps> = ({
  onHideBottomDrawer,
}) => {
  const items = [
    '7',
    '8',
    '9',
    'delete',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    'add',
    'result',
  ];

  const keyboardWrapperHeight = Dimensions.get('window').width * 0.8;
  const [expression, setExpression] = useState<string>('0.00');
  const [hasOperator, setHasOperator] = useState<boolean>(false);

  const onKeyTouch = useCallback(
    (keyName: string) => {
      if (keyName === 'delete') {
        setExpression(prev =>
          prev !== '0.00'
            ? prev.length > 1
              ? prev.slice(0, -1)
              : '0.00'
            : '0.00',
        );
      } else if (keyName === 'add') {
        setExpression(prev => (prev === '0.00' ? '0.00' : `${prev} + `));
      } else if (keyName === 'result') {
        if (!hasOperator) {
          onHideBottomDrawer();
        } else {
          try {
            const result = eval(expression.replace(/,/g, ''));
            setExpression(result.toFixed(2).toString());
            setHasOperator(false);
          } catch (error) {
            console.error('Error evaluating expression:', error);
          }
        }
      } else {
        setExpression(prev => {
          if (prev === '0.00') {
            if (keyName === '+' || keyName === '-') {
              return prev; // Prevent starting with an operator
            }
            return keyName === '.' ? '0.00' : keyName;
          }
          if (keyName === '+' || keyName === '-') {
            setHasOperator(true);
          }
          if (keyName === '.' && prev.includes('.')) {
            return prev; // Prevent multiple decimal points
          }
          return prev + keyName;
        });
      }
    },
    [onHideBottomDrawer],
  );

  return (
    <View>
      <View style={styles.expressionWrapper}>
        <Text style={styles.expression}>¥ {expression}</Text>
      </View>
      <View style={[styles.keyboardWrapper, { height: keyboardWrapperHeight }]}>
        {items.map(item => (
          <KeyboardItem
            key={item}
            keyName={item}
            onTouch={onKeyTouch}
            hasOperator={hasOperator}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 'auto',
    backgroundColor: '#d1d1d1',
  },
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
  keyboardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
});
