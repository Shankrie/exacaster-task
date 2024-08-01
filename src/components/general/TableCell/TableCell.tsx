import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  align?: "left" | "center" | "right";
};

export const TableCell = ({ children, align }: Props) => {
  return (
    <td
      className={`relative p-[16px] ${align === "right" ? "text-right pr-0" : ""} ${align === "center" ? "text-center" : ""}`}
    >
      {children}
      {align !== "right" && (
        <span className="absolute block w-[2px] h-[14px] right-0 top-[50%] translate-y-[-50%] bg-[#f0f4fb]" />
      )}
    </td>
  );
};
