import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import AppLink, { AppLinkTheme } from "./AppLink";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primery = Template.bind({});
Primery.args = {
    children: "Text",
    theme: AppLinkTheme.PRIMERY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
};

export const PrimeryDark = Template.bind({});
PrimeryDark.args = {
    children: "Text",
    theme: AppLinkTheme.PRIMERY,
};
PrimeryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
