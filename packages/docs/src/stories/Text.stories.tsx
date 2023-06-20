/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@my-g-ui/index'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    sizes: 'md',
    children: 'Example',
  },
  argTypes: {
    sizes: {
      options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
      control: {
        type: 'inline-radio',
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Custom: StoryObj<TextProps> = {
  args: {
    children: "Stong Text",
    as: "strong",
  }
}