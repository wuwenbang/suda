import React, { createContext, FC, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import './index.less';

interface CheckboxGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
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

interface CheckboxGroupContextProps {
  value?: string[];
  onChange?: (value: string) => void;
}
export const CheckboxGroupContext = createContext<CheckboxGroupContextProps | null>(null);

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  className,
  value,
  defaultValue,
  onChange,
  children,
  ...props
}) => {
  const [checkboxValue, setCheckboxValue] = useState<string[]>(defaultValue ?? []);
  const onCheckboxChange = (value: string) => {
    setCheckboxValue((prevValue) => {
      let nextValue = [];
      if (prevValue.includes(value)) {
        nextValue = prevValue.filter((item) => item !== value);
      } else {
        nextValue = [...prevValue, value];
      }
      return nextValue;
    });
    onChange?.(value);
  };
  return (
    <CheckboxGroupContext.Provider
      value={{ value: value ?? checkboxValue, onChange: (value && onChange) ?? onCheckboxChange }}
    >
      <div className={classNames(className, 'suda-checkbox-group')} {...props}>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

export default React.memo(CheckboxGroup);
