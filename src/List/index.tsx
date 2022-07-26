import Item from './components/Item';
import InternalList from './components/List';
import './index.less';

type InternalListType = typeof InternalList;

interface ListType extends InternalListType {
  Item: typeof Item;
}

const List = InternalList as ListType;

List.Item = Item;

export default List;
