import { Checkbox } from "@components/general/Checkbox/Checkbox";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MenuIcon } from "@icons/MenuIcon";
import { theme } from "@themes/themeConfig";
import { ReactNode } from "@tanstack/react-router";

type TableMenuItem = {
  id: string;
  visible: boolean;
  label: ReactNode;
  onClick: (item: TableMenuItem) => void;
};

type Props = {
  items: TableMenuItem[];
};

export const TableColumnVisibilityMenu = ({ items }: Props) => {
  const { primaryMedium, textInverted } = theme.colors;

  return (
    <Menu>
      <MenuButton className="inline-flex items-center justify-center size-[56px] data-[active]:bg-white">
        {({ active }) => (
          <MenuIcon fill={active ? primaryMedium : textInverted} />
        )}
      </MenuButton>
      <MenuItems
        className="shadow-normal"
        anchor={{ to: "bottom end" }}
        modal={false}
      >
        {items.map((item) => (
          <MenuItem key={item.id}>
            <button
              className="block bg-white p-[12px] border-t border-x min-w-[146px] cursor-pointer hover:bg-gray-50 last:border-b"
              onClick={(event) => {
                event.preventDefault();
                item.onClick(item);
              }}
            >
              <Checkbox
                checked={item.visible}
                label={item.label}
                onChange={() => item.onClick(item)}
              />
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
