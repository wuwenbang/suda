import './index.less';
import PriceLayout from './components/PriceLayout';
import PriceCurrency from './components/PriceCurrency';
import PriceValue from './components/PriceValue';
import PriceDeletion from './components/PriceDeletion';
import PriceDesc from './components/PriceDesc';

type PriceLayoutType = typeof PriceLayout;

interface PriceType extends PriceLayoutType {
  PriceCurrency: typeof PriceCurrency;
  PriceValue: typeof PriceValue;
  PriceDeletion: typeof PriceDeletion;
  PriceDesc: typeof PriceDesc;
}

const Price = PriceLayout as PriceType;

Price.PriceCurrency = PriceCurrency;
Price.PriceValue = PriceValue;
Price.PriceDeletion = PriceDeletion;
Price.PriceDesc = PriceDesc;

export default Price;
