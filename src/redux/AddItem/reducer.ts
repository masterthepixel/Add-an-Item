import { ADD_ITEM, AppStateActions, REMOVE_ITEM } from "./types";

export interface AppState {
  column_1: string[];
  column_2: string[];
}

export type ColumnId = "column_1" | "column_2";

const InitialState = {
  column_1: ["test1", "test2", "test3"],
  column_2: [],
};

export default function AuthReducer(
  state: AppState = InitialState,
  action: AppStateActions
): AppState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.column_index]: [
          ...state[action.payload.column_index],
          action.payload.item,
        ],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.column_id]: [
          ...state[action.payload.column_id].slice(
            0,
            action.payload.item_index
          ),
          ...state[action.payload.column_id].slice(
            action.payload.item_index + 1
          ),
        ],
      };
    default:
      return state;
  }
}
