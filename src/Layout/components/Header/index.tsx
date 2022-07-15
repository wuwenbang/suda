import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
}

const Header: FC<HeaderProps> = ({ className, children, style, ...props }) => {
  return (
    <div className={classNames('suda-header', className)} style={style} {...props}>
      {children}
    </div>
  );
};

export default Header;
