import axios from "axios";
import { Dispatch } from "redux";
import { TodosAction, TodoActionsEnum } from "../../types/todos";

export const fetchTodos = (page = 10, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodoActionsEnum.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionsEnum.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: TodoActionsEnum.FETCH_TODOS_FAILED,
        payload: "Произошла ошибка при загрузке todos",
      });
    }
  };
};

export const setTodopage = (page: number): TodosAction => {
  return { type: TodoActionsEnum.SET_TODO_PAGE, payload: page };
};
