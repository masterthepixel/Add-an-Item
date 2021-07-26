import { ColumnId } from "./reducer";

export const ADD_ITEM = "Add an item";
export const REMOVE_ITEM = "Remove an item";

export type ItemList = string[];

export type AddItemAction = {
  type: typeof ADD_ITEM;
  payload: {
    column_index: ColumnId;
    item: string;
  };
};
export type RemoveItemAction = {
  type: typeof REMOVE_ITEM;
  payload: {
    column_id: ColumnId;
    item_index: number;
  };
};

export type AppStateActions = AddItemAction | RemoveItemAction;
