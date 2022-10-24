import { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from "./CheckBox";
import { Text } from "./Text";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => (
      <div className="flex gap-3">
        <Story />
        <Text size="sm">Lembrar-me por 30 dias</Text>
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj = {};
