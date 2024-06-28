import Button from "@components/common/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    Theme: {
      options: ["apple", "orange", "mango", "banana", "melon"],
      control: { type: "select" },
    },
    Size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AppleBtn: Story = {
  args: {
    Theme: "apple",
    Size: "md",
  },
};

export const OrangeBtn: Story = {
  args: {
    Theme: "orange",
    Size: "md",
  },
};

export const MangoBtn: Story = {
  args: {
    Theme: "mango",
    Size: "md",
  },
};

export const BananaBtn: Story = {
  args: {
    Theme: "banana",
    Size: "md",
  },
};

export const MelonBtn: Story = {
  args: {
    Theme: "melon",
    Size: "md",
  },
};
