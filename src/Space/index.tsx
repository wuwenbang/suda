import React, { FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import './index.less';

interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 间距方向
   * @default "horizontal"
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * @description 	间距大小
   * @default "small"
   */
  size?: 'small' | 'middle' | 'large' | number;
  /**
   * @description 是否自动换行，仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean;
  /**
   * @description 对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
}

const Space: FC<SpaceProps> = ({
  className,
  children,
  direction = 'horizontal',
  wrap = false,
  size = 'small',
  align,
}) => {
  const gap = useMemo(() => {
    if (size === 'small') return wrap ? `8px 16px` : `8px`;
    else if (size === 'middle') return wrap ? `16px 16px` : `16px`;
    else if (size === 'large') return wrap ? `24px 16px` : `24px`;
    else return wrap ? `${size}px 16px` : `${size}px`;
  }, [size, wrap]);
  const style = wrap ? { gap: gap, flexWrap: 'wrap' as const } : { gap: gap };

  return (
    <div
      className={classNames(
        'suda-space',
        `suda-space-${direction}`,
        align ? `suda-space-align-${align}` : '',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Space;
