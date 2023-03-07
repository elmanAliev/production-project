import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from "./validateProfileData";

const data = {
    username: "user",
    first: "Name",
    lastname: "Surname",
    age: 12,
    city: "Riga",
    country: Country.AZ,
    currency: Currency.USD,
};

describe("validateProfileData.test", () => {
    test("success", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test("without first name", async () => {
        const result = validateProfileData({ ...data, first: "" });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
