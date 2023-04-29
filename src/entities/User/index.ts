import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";
import { userReducer, userActions } from "./model/slice/userSlice";

export {
    userReducer, userActions, getUserAuthData, getUserInited,
};

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';

export type {
    UserSchema,
    User,
} from './model/types/user';
export { UserRole } from './model/consts/userConsts';
