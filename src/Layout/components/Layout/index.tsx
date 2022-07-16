import React, { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
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
  let hasSider = false;
  React.Children.forEach(children, (child) => {
    const _child = child as any;
    if (_child.props.children === 'Sider') {
      hasSider = true;
    }
  });
  return (
    <div
      className={classNames('suda-layout', className, hasSider ? 'suda-layout-sider' : '')}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Layout;
