/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@my-g-ui/index'

export default {
  title: 'Form/Text Area',
  component: TextArea,
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
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Enter text Area',
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}