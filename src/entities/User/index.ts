import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { userReducer, userActions } from "./model/slice/userSlice";
import { UserSchema, User } from "./model/types/user";

export {
    UserSchema, userReducer, userActions, User, getUserAuthData,
};
