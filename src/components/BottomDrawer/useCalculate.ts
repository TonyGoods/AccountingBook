import { useCallback, useState } from 'react';

interface UseCalculateProps {
  onHideBottomDrawer: () => void;
}

export const useCalculate = ({ onHideBottomDrawer }: UseCalculateProps) => {
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
  return {
    expression,
    hasOperator,
    onKeyTouch,
    items
  };
};
