type OfferInsideItemProps = {
  item: string,
}

const OfferInsideItem = ({item}: OfferInsideItemProps) => (
  <li className="property__inside-item">
    {item}
  </li>
);

export default OfferInsideItem;
