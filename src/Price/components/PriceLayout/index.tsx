import React, { createContext, CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';
import PriceDeletion from '../PriceDeletion';
import PriceCurrency from '../PriceCurrency';
import PriceValue from '../PriceValue';
import PriceDesc from '../PriceDesc';

interface PriceLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 当前价格
   */
  price?: string;
  /**
   * @description 货币符号
   */
  currency?: string;
  /**
   * @description 删除价格
   */
  deletion?: string;
  /**
   * @description 价格描述（起）
   */
  desc?: string;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
}
export const PriceContext = createContext(null as unknown as PriceLayoutProps);

const PriceLayout: FC<PriceLayoutProps> = ({ className, children, style, ...props }) => {
  if (children) {
    return (
      <PriceContext.Provider value={props}>
        <div className={classNames('suda-price-layout', className)} style={style} {...props}>
          {children}
        </div>
      </PriceContext.Provider>
    );
  } else {
    return (
      <PriceContext.Provider value={props}>
        <div className={classNames('suda-price-layout', className)} style={style} {...props}>
          <PriceDeletion />
          <PriceCurrency />
          <PriceValue />
          <PriceDesc />
        </div>
      </PriceContext.Provider>
    );
  }
};

export default PriceLayout;
