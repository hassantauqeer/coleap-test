import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import GridView from './GridView';
import GridItem from '../GridItem';
import '../../../App.css'
export default {
    title: 'Common/GridView',
    component: GridView,
} as ComponentMeta<typeof GridView>;
const Template: ComponentStory<typeof GridView> = (args) => <GridView {...args} />;
export const Default = Template.bind({});
const fix = {
    id: 'id',
    make: "make",
    model: "make",
    photo: "https://www.autoo.com.br/fotos/2021/1/1280_960/tesla_model-x_2021_4_29012021_41117_1280_960.jpg",
    price: "make",
}
Default.args = {
    children: [<GridItem {...fix} />, <GridItem {...fix} />, <GridItem {...fix} />]
};
