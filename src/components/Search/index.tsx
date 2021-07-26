import React from 'react';
import { Text } from '../Styled/Text';
import { SearchInputWrapper, SearchIcon, SearchInput } from './styled';

interface InputProps {
  gridArea?: string;
  value: string;
  onChangeSearchText: (event: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<InputProps> = ({
  gridArea = '',
  value,
  onChangeSearchText
}) => {
  return (
    <div style={{gridArea}}>
      <Text size={10}>SEARCH AN ITEM</Text>
      <SearchInputWrapper>
        <SearchInput type="input" placeholder="SEARCH" value={value} onChange={onChangeSearchText} />
        <SearchIcon className="fa fa-search"></SearchIcon>
      </SearchInputWrapper>
    </div>
  )
}

export default SearchBox;