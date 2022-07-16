import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
}

const Footer: FC<FooterProps> = ({ className, children, style, ...props }) => {
  return (
    <footer className={classNames('suda-footer', className)} style={style} {...props}>
      {children}
    </footer>
  );
};

export default Footer;
