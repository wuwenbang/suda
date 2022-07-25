import InternalCheckbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import './index.less';

type InternalCheckboxType = typeof InternalCheckbox;

interface CheckboxType extends InternalCheckboxType {
  Group: typeof CheckboxGroup;
}

const Checkbox = InternalCheckbox as CheckboxType;

Checkbox.Group = CheckboxGroup;

export default Checkbox;
