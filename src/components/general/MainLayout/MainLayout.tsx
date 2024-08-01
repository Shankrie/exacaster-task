import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-[100vh] pt-headerHeight pb-[120px] bg-background">
      {children}
    </div>
  );
};
