import RcSelect, { Option, SelectProps as RcSelectProps } from 'rc-select';
import React, { FC } from 'react';
import './index.less';

interface SelectProps extends RcSelectProps {}

const InternalSelect: FC<SelectProps> = ({ className, children, disabled, ...props }) => {
  return (
    <RcSelect prefixCls="suda-select" {...props}>
      {children}
    </RcSelect>
  );
};

type InternalSelectType = typeof InternalSelect;

interface SelectType extends InternalSelectType {
  Option: typeof Option;
}

const Select = InternalSelect as SelectType;

Select.Option = Option;

export default Select;
