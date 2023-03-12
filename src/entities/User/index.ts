import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";
import { userReducer, userActions } from "./model/slice/userSlice";
import { UserSchema, User } from "./model/types/user";

export {
    UserSchema, userReducer, userActions, User, getUserAuthData, getUserInited,
};
