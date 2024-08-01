import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  align?: "left" | "center" | "right";
};

export const TableHeaderCell = ({ children, align }: Props) => {
  return (
    <th
      className={`relative p-[16px] ${align === "right" ? "text-right" : ""} ${align === "center" ? "text-center" : ""}`}
    >
      {children}
      <span className="absolute block w-[2px] h-[14px] right-0 top-[50%] translate-y-[-50%] bg-white" />
    </th>
  );
};
