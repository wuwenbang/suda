import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceDeletionProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 删除价格
   */
  deletion?: string;
}

const PriceDeletion: FC<PriceDeletionProps> = ({ className, deletion, ...props }) => {
  const context = useContext(PriceContext);
  const value = deletion ?? context.deletion;
  const currency = context.currency ?? '';
  return (
    <span className={classNames('suda-price-deletion', className)} {...props}>
      {currency + value}
    </span>
  );
};

export default PriceDeletion;
