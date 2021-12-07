import { TodosAction, TodoActionsEnum, TodoState } from "../../types/todos";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const todosReducer = (
  state: TodoState = initialState,
  action: TodosAction
): TodoState => {
  switch (action.type) {
    case TodoActionsEnum.FETCH_TODOS:
      return {...state, loading: true};
    case TodoActionsEnum.FETCH_TODOS_SUCCESS:
      return {...state, loading: false, todos: action.payload};
    case TodoActionsEnum.FETCH_TODOS_FAILED:
      return {...state, loading: false, error: action.payload};
    case TodoActionsEnum.SET_TODO_PAGE:
      return {...state, page: action.payload};
    default: return state
  }
};
