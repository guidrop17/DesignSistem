/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@my-g-ui/index'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box 
          as='label' 
          css={{display: 'flex', flexDirection:'column', gap: '$2'}}>
          <Text sizes='sm'>
            UserName
          </Text>
          {Story()}
        </Box>
      )
    }
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter text input'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'ola.com/',
    placeholder: 'Enter text input',
  }
}