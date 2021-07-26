import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM, REMOVE_ITEM } from '../../redux/AddItem/types';
import { AppReducerState } from '../../redux/rootReducer';
import {GradientSection} from '../../components/Styled/View';
import {Text} from '../../components/Styled/Text';
import { 
  Container, 
  Subtitle, 
  Title, 
  Content, 
  InputSection, 
  ItemListSection, 
  ItemInput,
  AddButton,
  ItemList,
  ErrorSection,
} from './styled';
import Item from '../../components/Item';
import { AppState, ColumnId } from '../../redux/AddItem/reducer';
import Picker from '../../components/Select';
import { ColumnOptions } from '../../utils/constants';
import SearchBox from '../../components/Search';

const AddItemPage = () => {
  const [itemTitle, setItemTitle] = useState('');
  const [columnId, setColumnId] = useState<ColumnId>('column_1' as ColumnId);
  const [searchText, setSearchText] = useState('');
  const [isDuplicated, setDuplicated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const itemsData: AppState = useSelector((state: AppReducerState) => state.app);
  const {column_1, column_2} = itemsData;

  const checkValidation = () => {
    if(itemTitle.length === 0) return false;
    const itemArray: string[] = itemsData[columnId] || [];
    const duplicated = itemArray.find(i => i.toLowerCase() === itemTitle.toLowerCase());
    if(duplicated) {
      setDuplicated(true);
      return false;
    }
    return true;
  }

  const onClickAdd = () => {
    setSubmitted(true);
    if(!checkValidation()) return;
    dispatch({
      type: ADD_ITEM,
      payload: {
        column_index: columnId,
        item: itemTitle
      }
    });
    setSubmitted(false);
    setDuplicated(false);
    setItemTitle('');
  };

  const onRemoveItem = (itemIndex: number, columnIndex: number) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: {
        column_id: `column_${columnIndex}`,
        item_index: itemIndex
      }
    });
  }

  const onChangeItemTitle = (e: React.FormEvent<HTMLInputElement>) => {
    setItemTitle(e.currentTarget.value);
  }

  const onSelectColumnNumber = (e: React.FormEvent<HTMLSelectElement>) => {
    setColumnId(e.currentTarget.value as ColumnId)
  }

  const onChangeSearchText = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  }

  return (
    <Container>
      <Title>Marvelous!</Title>
      <Subtitle>Lorem Lpsum is simply dummy text of the printing and typesetting industry. Lorem Lpsum has been the industry`s standard dummy text ever since.</Subtitle>
      <GradientSection>
        <Text size={18} >ADD AN ITEM</Text>
      </GradientSection>
      
      <Content>
        <InputSection>
          <ItemInput type="input" placeholder="ENTER ITEM" onChange={onChangeItemTitle} value={itemTitle} />
          <Picker options={ColumnOptions} name="column" onSelectColumnNumber={onSelectColumnNumber} gridArea="select" />
          <ErrorSection>
            {submitted && itemTitle.length === 0 && <Text size={15} color="red">Item is required.</Text>}
            {submitted && isDuplicated && <Text size={15} color="red">The item already exists.</Text>}
          </ErrorSection>
          <AddButton onClick={onClickAdd}>
            <Text size={15} >ADD ITEM</Text>
          </AddButton>
          <SearchBox gridArea="search" value={searchText} onChangeSearchText={onChangeSearchText} />
        </InputSection>
        <ItemListSection>
          <div style={{gridArea: 'column-1'}}>
            <GradientSection>
              <Text size={15}>COLUMN 1</Text>
            </GradientSection>
            <ItemList>
              {column_1.map((item: string, index: number) => {
                if(item.toLowerCase().indexOf(searchText.toLowerCase()) < 0) return null;
                return (
                  <Item 
                    key={index} 
                    title={item} 
                    index={index} 
                    onRemove={() => onRemoveItem(index, 1)} 
                  />
                )
              })}
            </ItemList>
          </div>
          <div style={{gridArea: 'column-2'}}>
            <GradientSection>
              <Text size={15}>COLUMN 2</Text>
            </GradientSection>
            <ItemList>
            {column_2.map((item: string, index: number) => {
              if(item.toLowerCase().indexOf(searchText.toLowerCase()) < 0) return null;
                return (
                  <Item 
                    key={index} 
                    title={item} 
                    index={index} 
                    onRemove={() => onRemoveItem(index, 2)} 
                  />
                )
              })}
            </ItemList>
          </div>
        </ItemListSection>
      </Content>
    </Container>
  );
};

export default AddItemPage;
