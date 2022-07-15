import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
}

const Layout: FC<LayoutProps> = ({ className, children, style, ...props }) => {
  return (
    <div className={classNames('suda-layout', className)} style={style} {...props}>
      {children}
    </div>
  );
};

export default Layout;
