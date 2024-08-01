import { Field, Select as HeadlessSelect, Label } from "@headlessui/react";
import { ChevronDownIcon } from "@icons/ChevronDownIcon";
import { theme } from "@themes/themeConfig";
import { ChangeEvent } from "react";

type Props = {
  label?: string;
  value: string;
  options: { value: string; label: string }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ label, value, options, onChange }: Props) => {
  return (
    <Field className="relative">
      {label && (
        <Label className="absolute text-xs translate-y-[-50%] px-[4px] ml-[12px] bg-primaryMedium">
          {label}
        </Label>
      )}

      <HeadlessSelect
        className="appearance-none bg-transparent border rounded-sm p-[7px] pr-[36px] w-[216px] max-w-full"
        name="city"
        value={value}
        onChange={onChange}
      >
        {options.map(({ value, label }) => (
          <option className="text-text" key={value} value={value}>
            {label}
          </option>
        ))}
      </HeadlessSelect>
      <div className="absolute top-[50%] translate-y-[-50%] right-[18px]">
        <ChevronDownIcon fill={theme.colors.textInverted} />
      </div>
    </Field>
  );
};
