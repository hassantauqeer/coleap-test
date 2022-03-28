import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
export default {
    title: 'Common/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
export const Default = Template.bind({});
Default.args = {
    id: '24uobf24jlgb',
    make: 'Tesla',
    model: 'X',
    price: '11000 EUR',
    colors: ['red', 'green'],
    range: {unit: 123, distance: 12345},
    photo: "https://www.autoo.com.br/fotos/2021/1/1280_960/tesla_model-x_2021_4_29012021_41117_1280_960.jpg",
    onClose: () => console.log('closed')
};
