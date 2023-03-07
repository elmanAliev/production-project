import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

const data = {
    username: "user",
    first: "Name",
    lastname: "Surname",
    age: 12,
    city: "Riga",
    country: Country.AZ,
    currency: Currency.USD,
};

describe("profileSlice.test", () => {
    test("set Readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false),
        )).toEqual({ readonly: false });
    });

    test("update Profile", () => {
        const state: DeepPartial<ProfileSchema> = { form: data };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ ...data, first: "Name" }),
        )).toEqual({ form: { ...data, first: "Name" } });
    });

    test("update Profile pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test("update Profile fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ""),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
