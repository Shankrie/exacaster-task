import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

export const Link = ({ children, href }: Props) => {
  return (
    <a className="text-primaryLight underline" href={href}>
      {children}
    </a>
  );
};
