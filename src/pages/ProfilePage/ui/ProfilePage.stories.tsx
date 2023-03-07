import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import avatar from "shared/assets/tests/avatar.jpg";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: "user",
            first: "Name",
            lastname: "Surname",
            age: 12,
            city: "Riga",
            country: Country.AZ,
            currency: Currency.USD,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: "user",
            first: "Name",
            lastname: "Surname",
            age: 12,
            city: "Riga",
            country: Country.AZ,
            currency: Currency.USD,
            avatar,
        },
    },
})];
