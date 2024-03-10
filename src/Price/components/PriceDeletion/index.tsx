import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceDeletionProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 删除价格
   */
  value?: string;
}

const PriceDeletion: FC<PriceDeletionProps> = ({ className, value, ...props }) => {
  const context = useContext(PriceContext);
  const deletion = value ?? context.deletion ?? '';
  const currency = context.currency ?? '';
  const text = currency + deletion;
  return (
    <span className={classNames('suda-price-deletion', className)} {...props}>
      {text}
    </span>
  );
};

export default PriceDeletion;
