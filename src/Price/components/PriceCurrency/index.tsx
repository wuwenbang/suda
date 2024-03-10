import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceCurrencyProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 货币符号
   */
  value?: string;
}

const PriceCurrency: FC<PriceCurrencyProps> = ({ className, value, ...props }) => {
  const context = useContext(PriceContext);
  const text = value ?? context.currency ?? '¥';
  return (
    <span className={classNames('suda-price-currency', className)} {...props}>
      {text}
    </span>
  );
};

export default PriceCurrency;
