import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface LayoutProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description 类名
   */
  className?: string;
}

const Title: FC<LayoutProps> = ({ className, children, ...props }) => {
  return (
    <h2 className={classNames('suda-card-title', className)} {...props}>
      {children}
    </h2>
  );
};

export default React.memo(Title);
