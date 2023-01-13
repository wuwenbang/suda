import './index.less';
import InternalCard from './components/CardLayout';
import Title from './components/CardTitle';

type InternalCardType = typeof InternalCard;

interface CardType extends InternalCardType {
  Title: typeof Title;
}

const Card = InternalCard as CardType;

Card.Title = Title;

export default Card;
