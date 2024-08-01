import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="bg-accent text-text text-sm leading-[24px] py-[6px] px-[20px] rounded-sm uppercase shadow-soft font-semibold active:shadow-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
