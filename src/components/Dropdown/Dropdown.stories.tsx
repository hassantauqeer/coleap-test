import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
export default {
    title: 'Common/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;
import '../../App.css'
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;
const initialOptions = [
    {
        id: 8923,
        value: 'option 1'
    },
    {
        id: 2637,
        value: 'option 2'
    },
    {
        id: 7384,
        value: 'option 3'
    },
    {
        id: 9384,
        value: 'option 4'
    }
]
export const Default = Template.bind({});
Default.args = {
    options: initialOptions,
    selected: initialOptions[0].value,
    setSelected: (val: any) => alert('selected => '+ val)
};
