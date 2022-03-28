import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GridItem from './GridItem';
import '../../../App.css'

export default {
    title: 'Common/GridItem',
    component: GridItem,
} as ComponentMeta<typeof GridItem>;
const Template: ComponentStory<typeof GridItem> = (args) => <GridItem {...args} />;
export const Default = Template.bind({});
Default.args = {
    id: '24uobf24jlgb',
    make: 'Tesla',
    model: 'X',
    price: '11000 EUR',
    photo: "https://www.autoo.com.br/fotos/2021/1/1280_960/tesla_model-x_2021_4_29012021_41117_1280_960.jpg"
};
