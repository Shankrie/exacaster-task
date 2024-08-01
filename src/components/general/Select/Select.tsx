import { Field, Select as HeadlessSelect } from "@headlessui/react";
import { ChangeEvent } from "react";

type Props = {
  label?: string;
  value: string;
  options: { value: string; label: string }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ label, value, options, onChange }: Props) => {
  return (
    <Field>
      {label && (
        <div className="absolute text-xs translate-y-[-50%] px-[4px] ml-[12px] bg-primaryMedium">
          {label}
        </div>
      )}

      <HeadlessSelect
        className="appearance-none bg-transparent border rounded-sm p-[7px] pr-[20px] w-[216px] max-w-full"
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
    </Field>
  );
};
