import InternalRadio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import './index.less';

type InternalRadioType = typeof InternalRadio;

interface RadioType extends InternalRadioType {
  Group: typeof RadioGroup;
}

const Radio = InternalRadio as RadioType;

Radio.Group = RadioGroup;

export default Radio;
