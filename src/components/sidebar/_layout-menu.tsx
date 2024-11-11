'use client';

import Logo from '@/components/shared/logo';
import Button from '@/components/shared/button';
import { Close } from '@/components/icons/close';
import { useDrawer } from '@/components/drawer-views/context';
import { MenuItem } from '@/components/shared/collapsible-menu';
import {
  defaultMenuItems,
} from '@/components/sidebar/_menu-items';
import { EXPLORER_LAYOUT_OPTIONS, getLayoutValue, LAYOUT_OPTIONS } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { useLayout } from '@/hooks/use-layout';
// import { ChevronRight } from '@/components/icons/chevron-right';
// import WalletConnect from '@/components/nft/wallet-connect';

interface DrawerMenuProps {
  layoutOption?: string;
  menuItems?: any[];
}

export default function DrawerMenu({
  layoutOption = `/`,
  menuItems = defaultMenuItems,
}: DrawerMenuProps) {
  const { closeDrawer } = useDrawer();
  const { setLayout } = useLayout();
  const pathname = usePathname();
  const layoutSegmentFromURL = pathname!.split('/')[1];
  const { pathBase, selectedLayout } = getLayoutValue(pathname, layoutSegmentFromURL);
  
  const drawerMenuItems = menuItems.map((item) => ({
    name: item.name,
    icon: item.icon,
    href: `/${ // Dynamically select path base to allow dynamic explorer values
          selectedLayout === item.layout 
          ? pathBase 
          : (item.layout === LAYOUT_OPTIONS.EXPLORER ? EXPLORER_LAYOUT_OPTIONS.MUSIC : item.layout) 
        }${item.href === '/' ? '' : item.href
      }`,
    ...(item.dropdownItems && {
      dropdownItems: item?.dropdownItems?.map((dropdownItem: any) => ({
        name: dropdownItem.name,
        ...(dropdownItem?.icon && { icon: dropdownItem.icon }),
        href: 
        `/${ // Dynamically select path base to allow dynamic explorer values
            selectedLayout === item.layout 
            ? pathBase 
            : (item.layout === LAYOUT_OPTIONS.EXPLORER ? EXPLORER_LAYOUT_OPTIONS.MUSIC : item.layout) 
          }${dropdownItem.href === '/' ? '' : (dropdownItem.href === LAYOUT_OPTIONS.EXPLORER 
            ? EXPLORER_LAYOUT_OPTIONS.MUSIC : dropdownItem.href)
        }`
      })),
    }),
  }));
  console.log('drawerMenuItems', drawerMenuItems, selectedLayout, pathBase)
  return (
    <div className="relative w-full max-w-full bg-white dark:bg-dark xs:w-80" onClick={(event) => event.stopPropagation()}>
      <div className="flex h-24 items-center justify-between overflow-hidden px-6 py-4">
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>
      <div className="custom-scrollbar h-[calc(100%-180px)] overflow-hidden overflow-y-auto">
        <div className="px-6 pb-14 2xl:px-8">
          <div className="mt-2 sm:mt-4">
            {drawerMenuItems?.map((item, index) => (
              <MenuItem
                key={'drawer' + item.name + index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                dropdownItems={item.dropdownItems}
                updateLayout={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-0 z-10 w-full px-6">
        {/* <WalletConnect anchorClassName="w-full" btnClassName="!w-full !h-11" /> */}
      </div>
    </div>
  );
}
