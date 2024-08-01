import { ChangeEvent } from "react";

interface Props {
  label?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, value, onChange }: Props) => {
  return (
    <label>
      {label && (
        <div className="absolute text-xs translate-y-[-50%] px-[4px] ml-[12px] bg-primaryMedium">
          {label}
        </div>
      )}
      <input
        className="bg-transparent border rounded-sm p-[7px] w-[216px] max-w-full"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
