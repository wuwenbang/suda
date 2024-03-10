import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceDescProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 价格描述
   */
  value?: string;
}

const PriceDesc: FC<PriceDescProps> = ({ className, value, ...props }) => {
  const context = useContext(PriceContext);
  const text = value ?? context.desc;
  return (
    <span className={classNames('suda-price-desc', className)} {...props}>
      {text}
    </span>
  );
};

export default PriceDesc;
