import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface SiderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
}

const Sider: FC<SiderProps> = ({ className, children, style, ...props }) => {
  return (
    <aside className={classNames('suda-sider', className)} style={style} {...props}>
      {children}
    </aside>
  );
};

export default React.memo(Sider);
