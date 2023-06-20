/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@my-g-ui/index'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/guidrop17.png',
    alt: 'Guilherme',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: undefined,
  }
}

