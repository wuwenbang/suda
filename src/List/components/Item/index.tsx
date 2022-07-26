import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import './index.less';

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * @description 列表项唯一标识符
   */
  key: string;
}

const Item: FC<ItemProps> = ({ className, children, ...props }) => {
  return (
    <li className={classNames('suda-list-item', className)} {...props}>
      {children}
    </li>
  );
};

export default Item;
