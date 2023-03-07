import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "../../types/profile";
import { getProfileValidateError } from "./getProfileValidateError";

describe("getProfileValidateError.test", () => {
    test("should return validate errors", () => {
        const erors = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USER_DATA,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: erors,
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual(erors);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
