import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ActionLayout = ({ children }: Props) => {
  return (
    <div className="w-full mb-[-27px] pt-[44px] pb-[71px] text-textInverted bg-primaryMedium">
      {children}
    </div>
  );
};
