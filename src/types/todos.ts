
export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionsEnum {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_FAILED = 'FETCH-TODOS_FAILED',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface fetchTodoAction {
    type: TodoActionsEnum.FETCH_TODOS
}
interface fetchTodoSuccessAction {
    type: TodoActionsEnum.FETCH_TODOS_SUCCESS,
    payload: any[]
}
interface fetchTodoFailedAction {
    type: TodoActionsEnum.FETCH_TODOS_FAILED,
    payload: string
}
interface setPageTodoAction {
    type: TodoActionsEnum.SET_TODO_PAGE,
    payload: number
}

export type TodosAction = 
fetchTodoAction |  fetchTodoSuccessAction | fetchTodoFailedAction | setPageTodoAction