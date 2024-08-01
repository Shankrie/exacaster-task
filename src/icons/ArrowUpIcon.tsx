type Props = {
  fill?: string;
};

export const ArrowUpIcon = ({ fill }: Props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={fill ?? "#000000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.333332 7.00001L1.50833 8.17501L6.16667 3.52501V13.6667H7.83333V3.52501L12.4833 8.18334L13.6667 7.00001L7 0.333344L0.333332 7.00001Z" />
    </svg>
  );
};
