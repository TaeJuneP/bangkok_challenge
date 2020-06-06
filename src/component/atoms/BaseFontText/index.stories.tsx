import React from 'react';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import TextContainer from "./index"

export default {
    title: 'atom',
    component: TextContainer,
};

export const Text = () => < TextContainer text={"hi"}
/>