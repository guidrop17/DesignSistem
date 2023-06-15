/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@my-app/index'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando Elemento</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

