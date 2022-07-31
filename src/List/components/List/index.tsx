import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';
import './index.less';
interface ListProps<T = any> extends HTMLAttributes<HTMLUListElement> {
  /**
   * @description 列表数据源
   */
  dataSource?: T[];
  /**
   * @description 自定义渲染列表项
   */
  renderItem?: (item: T) => ReactNode;
  /**
   * @description 列表大小尺寸
   * @default 'middle'
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * @description 是否展示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * @description 列表头部
   */
  header?: ReactNode;
  /**
   * @description 列表底部
   */
  footer?: ReactNode;
}

function List<T>({
  className,
  children,
  size = 'middle',
  renderItem,
  dataSource,
  bordered = false,
  header,
  footer,
  ...props
}: ListProps<T>) {
  return (
    <ul
      className={classNames(
        'suda-list',
        className,
        size ? `suda-list-${size}` : '',
        bordered ? `suda-list-bordered` : '',
      )}
      {...props}
    >
      {header && <div className="suda-list-header">{header}</div>}
      {dataSource && renderItem ? dataSource.map((item) => renderItem(item)) : children}
      {footer && <div className="suda-list-footer">{footer}</div>}
    </ul>
  );
}

export default React.memo(List);
