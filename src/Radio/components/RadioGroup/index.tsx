import React, { createContext, FC, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import './index.less';

interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * @description 当前选中的值
   */
  value?: any;
  /**
   * @description 选项变化时的回调函数
   */
  onChange?: (value: any) => void;
  /**
   * @description 默认选中的值
   */
  defaultValue?: any;
}

interface RadioGroupContextProps {
  value?: any;
  onChange?: (value: any) => void;
}
export const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

const RadioGroup: FC<RadioGroupProps> = ({
  className,
  value,
  defaultValue,
  onChange,
  children,
  ...props
}) => {
  const [radioValue, setRadioValue] = useState(defaultValue);
  const onRadioChange = (value: any) => {
    setRadioValue(value);
    onChange?.(value);
  };
  return (
    <RadioGroupContext.Provider
      value={{ value: value ?? radioValue, onChange: (value && onChange) ?? onRadioChange }}
    >
      <div className={classNames(className, 'suda-radio-group')} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export default React.memo(RadioGroup);
