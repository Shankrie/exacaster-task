import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  align?: "left" | "right";
};

export const TableHeaderCell = ({ children, align }: Props) => {
  return (
    <th
      className={`relative p-[16px] align-middle ${align === "right" ? "text-right" : ""}`}
    >
      {children}
      <span className="absolute block w-[2px] h-[14px] right-0 top-[50%] translate-y-[-50%] bg-white" />
    </th>
  );
};
