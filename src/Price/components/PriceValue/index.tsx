import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceValueProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 当前价格
   */
  price?: string;
}

const PriceValue: FC<PriceValueProps> = ({ className, price, ...props }) => {
  const context = useContext(PriceContext);
  const value = price ?? context.price ?? '0';
  return (
    <span className={classNames('suda-price-value', className)} {...props}>
      {value}
    </span>
  );
};

export default PriceValue;
