import { Field, Checkbox as HeadlessCheckbox, Label } from "@headlessui/react";
import { CheckboxIcon } from "@icons/CheckboxIcon";
import { ReactNode } from "react";
import { theme } from "@themes/themeConfig";

type Props = {
  label?: ReactNode;
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({ label, checked, onChange }: Props) => {
  return (
    <Field className="flex items-center gap-[9px]">
      <HeadlessCheckbox
        checked={checked}
        onChange={onChange}
        className="block cursor-pointer"
      >
        {checked && <CheckboxIcon fill={theme.colors.accent} />}
        {!checked && <div className="size-[18px] bg-accent rounded-[2px]" />}
      </HeadlessCheckbox>
      <Label className="text-sm cursor-pointer">{label}</Label>
    </Field>
  );
};
