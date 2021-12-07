import axios from "axios";
import { Dispatch } from "redux";
import { UserActionsEnum, UsersAction } from "../../types/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: UserActionsEnum.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: UserActionsEnum.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500)
 
    } catch (e) {
      dispatch({
        type: UserActionsEnum.FETCH_USERS_FAILED,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
