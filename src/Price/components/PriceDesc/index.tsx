import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { PriceContext } from '../PriceLayout';

interface PriceDescProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 价格描述
   */
  desc?: string;
}

const PriceDesc: FC<PriceDescProps> = ({ className, desc, ...props }) => {
  const context = useContext(PriceContext);
  const value = desc ?? context.desc;
  return (
    <span className={classNames('suda-price-desc', className)} {...props}>
      {value}
    </span>
  );
};

export default PriceDesc;
