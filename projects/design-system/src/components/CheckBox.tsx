import { Check } from "phosphor-react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";

interface CheckBoxProps extends RadixCheckbox.CheckboxProps {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <RadixCheckbox.Root
      className="flex items-center h-4 w-4 bg-gray-400 rounded"
      {...props}
    >
      <RadixCheckbox.Indicator>
        <Check weight="bold" className="h-4 w-4 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
