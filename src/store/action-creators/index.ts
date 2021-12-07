import * as UserActionCreators from "./users";
import * as TodoActionCreators from "./todos";

const ActionCreators = {
  ...UserActionCreators,
  ...TodoActionCreators,
};

export default ActionCreators;
