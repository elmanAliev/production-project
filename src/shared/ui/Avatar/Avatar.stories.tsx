import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import avatar from "shared/assets/tests/avatar.jpg";
import Avatar from "./Avatar";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primery = Template.bind({});
Primery.args = {
    size: 150,
    src: avatar,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: avatar,
};
