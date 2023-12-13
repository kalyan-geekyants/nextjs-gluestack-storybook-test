// import type { Meta, StoryObj } from '@storybook/react';

// import MyButton from './MyButton';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'components/custom/MyButton',
//   component: MyButton,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
// } satisfies Meta<typeof MyButton>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     message: 'Primary',
//   },
// };

// export { MyButton };

import type { ComponentMeta } from '@storybook/react-native';
import MyButton from './MyButton';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: 'components/custom/IconButton',
  component: MyButton,
  // metaInfo: {
  //   componentDescription: `A button component is a graphical user interface element that enables users to act by clicking or tapping.`,
  // },
  args: {
    // action: 'primary',
    // variant: 'solid',
    // size: 'md',
    // isHovered: false,
    // isPressed: false,
    // isFocusVisible: false,
    // isDisabled: false,
    message: 'Custom Button',
  },
  argTypes: {
    message: {
      control: 'text',
    },
    // action: {
    //   control: 'select',
    //   options: ['primary', 'secondary', 'positive', 'negative'],
    // },
    // variant: {
    //   control: 'select',
    //   options: ['solid', 'outline', 'link'],
    // },
    // size: {
    //   control: 'select',
    //   options: ['xs', 'sm', 'md', 'lg', 'xl'],
    // },
    // isHovered: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
    // isPressed: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
    // isFocusVisible: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
    // isDisabled: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
  },
};

export default MyButtonMeta;

export { MyButton };
