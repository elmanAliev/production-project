import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: "user",
        first: "Name",
        lastname: "Surname",
        age: 12,
        city: "Riga",
        country: Country.AZ,
        currency: Currency.USD,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: "true",
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
