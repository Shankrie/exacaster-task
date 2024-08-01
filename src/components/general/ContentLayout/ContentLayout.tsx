import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentLayout = ({ children }: Props) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[36px]">{children}</div>
  );
};
