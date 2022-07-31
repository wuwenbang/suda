import React, { ChangeEventHandler, FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { RadioGroupContext } from '../RadioGroup';
import RcCheckbox from 'rc-checkbox';
interface RadioProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * @description 单选框的值，根据这个值来判断是否被选中
   */
  value?: any;
  /**
   * @description 禁止单选框
   * @default false
   */
  disabled?: boolean;
}

const Radio: FC<RadioProps> = ({ className, children, disabled, value, ...props }) => {
  const radioContext = useContext(RadioGroupContext);
  const radioValue = radioContext?.value;
  const onRadioChange = radioContext?.onChange;
  return (
    <label className={classNames(className, 'suda-radio-wrapper')} {...props}>
      <RcCheckbox
        onClick={() => {
          onRadioChange?.(value);
        }}
        prefixCls="suda-radio"
        checked={radioValue === value}
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
};

export default React.memo(Radio);
