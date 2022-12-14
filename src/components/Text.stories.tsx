import { Meta, StoryObj } from '@storybook/react'
import Text from './Text'
import { TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'This is the text.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>This is the text as a "p" tag.</p>
    )
  },
  argTypes: {
    // just to disable the children node that appears in 'control' (not mandatory)
    children: {
      control: {
        type: null
      }
    },
    // to disable the user option (true or false) as they should not be able to change it in this case
    asChild: {
      control: {
        type: null
      }
    }
  }
}
