import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceValueProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 当前价格
   */
  value?: string;
}

const PriceValue: FC<PriceValueProps> = ({ className, value, ...props }) => {
  const context = useContext(PriceContext);
  const text = value ?? context.price ?? '0';
  return (
    <span className={classNames('suda-price-value', className)} {...props}>
      {text}
    </span>
  );
};

export default PriceValue;
