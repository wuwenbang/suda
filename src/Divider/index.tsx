import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 分割线类型
   * @default "horizontal"
   */
  type?: 'horizontal' | 'vertical';
  /**
   * @description 虚线
   * @default false
   */
  dash?: boolean;
}

const Divider: FC<DividerProps> = ({ className, children, type = 'horizontal', dash }) => {
  return (
    <div
      className={classNames(
        'suda-divider',
        `suda-divider-${type}`,
        dash ? `suda-divider-dashed` : '',
        className,
      )}
    >
      <span>{children}</span>
    </div>
  );
};

export default React.memo(Divider);
