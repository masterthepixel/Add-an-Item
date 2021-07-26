import React from 'react';
import {ItemWrapper, ItemTitle, RemoveButton} from './styled';

interface ItemProps {
  title: string;
  index: number;
  onRemove: () => void;
}

const ItemRow: React.FC<ItemProps> = ({
  title,
  index,
  onRemove
}) => {
  const isGray = index % 2 === 1;
  return (
    <ItemWrapper isGray={isGray}>
      <ItemTitle isGray={isGray}>{title}</ItemTitle>
      <RemoveButton isGray={isGray} className="fa fa-times" onClick={() => onRemove()}></RemoveButton>
    </ItemWrapper>
  )
}

export default ItemRow;
