import './index.less';
import PriceLayout from './components/PriceLayout';
import PriceCurrency from './components/PriceCurrency';
import PriceValue from './components/PriceValue';
import PriceDeletion from './components/PriceDeletion';
import PriceDesc from './components/PriceDesc';

type PriceLayoutType = typeof PriceLayout;

interface PriceType extends PriceLayoutType {
  Currency: typeof PriceCurrency;
  Value: typeof PriceValue;
  Deletion: typeof PriceDeletion;
  Desc: typeof PriceDesc;
}

const Price = PriceLayout as PriceType;

Price.Currency = PriceCurrency;
Price.Value = PriceValue;
Price.Deletion = PriceDeletion;
Price.Desc = PriceDesc;

export default Price;
