import { UserActionsEnum, UsersAction, UserState } from "../../types/users";

export const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

export const usersReducer = (
  state: UserState = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case UserActionsEnum.FETCH_USERS:
      return { loading: true, error: null, users: [] };

    case UserActionsEnum.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: [...action.payload] };

    case UserActionsEnum.FETCH_USERS_FAILED:
      return { loading: true, error: action.payload, users: [] };
    default:
      return state;
  }
};
