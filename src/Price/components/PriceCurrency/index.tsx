import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceCurrencyProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 货币
   */
  currency?: number;
}

const PriceCurrency: FC<PriceCurrencyProps> = ({ className, currency, ...props }) => {
  const context = useContext(PriceContext);
  const value = currency ?? context.currency ?? '¥';
  return (
    <span className={classNames('suda-price-currency', className)} {...props}>
      {value}
    </span>
  );
};

export default PriceCurrency;
