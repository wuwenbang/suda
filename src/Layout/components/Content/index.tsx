import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
}

const Content: FC<ContentProps> = ({ className, children, style, ...props }) => {
  return (
    <main className={classNames('suda-content', className)} style={style} {...props}>
      {children}
    </main>
  );
};

export default Content;
