export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}
export enum UserActionsEnum {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILED = "FETCH_USERS_FAILED",
}
export interface FetchUsersAction {
  type: UserActionsEnum.FETCH_USERS;
}
export interface FetchUserSuccessAction {
  type: UserActionsEnum.FETCH_USERS_SUCCESS;
  payload: any[];
}
export interface FetchUsersFailedAction {
  type: UserActionsEnum.FETCH_USERS_FAILED;
  payload: string;
}
export type UsersAction =
  | FetchUsersAction
  | FetchUserSuccessAction
  | FetchUsersFailedAction;
