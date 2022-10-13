import { Text, ButtonProps } from './Button';
import {Meta, StoryObj} from '@storybook/react';

export default {
    title:'Components/Button',
    component: Text,
    args: {
        children: 'Create account',
        size: 'md'
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
