'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import cn from '@/utils/cn';
import AuthorCard from '@/components/shared/author-card';
import Logo from '@/components/shared/logo';
import LogoIcon from '@/components/shared/logo-icon';
import { MenuItem } from '@/components/shared/collapsible-menu';
// import Scrollbar from '@/components/shared/scrollbar';
import Button from '@/components/shared/button';
import { useDrawer } from '@/components/drawer-views/context';
import { useLayout } from '@/hooks/use-layout';
import { Close } from '@/components/icons/close';
import { useClickAway } from '@/hooks/use-click-away';
import { defaultMenuItems } from '@/components/sidebar/_menu-items';
import routes from '@/config/routes';
//images
import AuthorImage from '@/assets/images/author.jpg';
import { EXPLORER_LAYOUT_OPTIONS, getLayoutValue, LAYOUT_OPTIONS } from '@/lib/constants';

const layoutOption = '';
function createSideBarMenuItems(explorerLayoutPathBase: string, currentLayout: string) {
  return defaultMenuItems.map((item) => ({
    name: item.name,
    icon: item.icon,
    href: `/${ // Dynamically select path base to allow dynamic explorer values
          currentLayout === item.layout 
          ? explorerLayoutPathBase 
          : (item.layout === LAYOUT_OPTIONS.EXPLORER ? EXPLORER_LAYOUT_OPTIONS.MUSIC : item.layout)
        }${item.href === '/' ? '' : item.href
      }`,
    ...(item.dropdownItems && {
      dropdownItems: item.dropdownItems.map((dropdownItem: any) => ({
        name: dropdownItem.name,
        ...(dropdownItem.icon && { icon: dropdownItem.icon }),
        href:
          `/${ // Dynamically select path base to allow dynamic explorer values
            currentLayout === item.layout 
            ? explorerLayoutPathBase 
            : (item.layout === LAYOUT_OPTIONS.EXPLORER ? EXPLORER_LAYOUT_OPTIONS.MUSIC : item.layout)
          }${dropdownItem.href === '/' ? '' : (dropdownItem.href === LAYOUT_OPTIONS.EXPLORER 
            ? EXPLORER_LAYOUT_OPTIONS.MUSIC : dropdownItem.href)
        }`,
      })),
    }),
  }));
}

export default function Sidebar({ className }: { className?: string }) {
  const router = useRouter();
  const { layout, setLayout } = useLayout();
  const pathname = usePathname();
  const layoutSegmentFromURL = pathname!.split('/')[1];
  const { closeDrawer } = useDrawer();
  const { pathBase, selectedLayout } = getLayoutValue(pathname, layoutSegmentFromURL);
  const sideBarMenuItems = createSideBarMenuItems(pathBase, selectedLayout);
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLElement>(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  function isSubMenuActive(
    submenu: Array<{ name: string; icon?: JSX.Element; href: string }>,
  ) {
    return submenu?.map((item) => item.href).includes(pathname);
  }

  return (
    <aside
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={cn(
        open
          ? 'border-0 shadow-expand xs:w-80 xl:w-72 2xl:w-80'
          : 'w-24 border-dashed border-gray-200 2xl:w-28 ltr:border-r rtl:border-l shadow-transaction dark:shadow-none',
        'top-0 z-40 h-full max-w-full  bg-body duration-200 dark:border-gray-700 dark:bg-dark  xl:fixed ltr:left-0 rtl:right-0',
        className,
      )}
    >
      <div
        className={cn(
          'relative flex h-24 items-center  overflow-hidden px-6 py-4 pt-0 2xl:px-8 3xl:pt-6',
          open ? 'flex-start' : 'justify-center',
        )}
      >
        {!open ? (
          <div onClick={() => setOpen(!open)}>
            <LogoIcon />
          </div>
        ) : (
          <Logo />
        )}

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

      <div
        className={cn(
          'custom-scrollbar -mt-4 overflow-hidden overflow-y-auto 2xl:-mt-7',
          open ? 'h-[calc(100%-190px)]' : 'h-[calc(100%-170px)]',
        )}
      >
        <div className="px-6 pb-5 2xl:px-8">
          {!open ? (
            <div className="mt-[45px]" onClick={() => setOpen(!open)}>
              {sideBarMenuItems.map((item, index) => (
                <span key={index} className="mb-6 block w-[51px]">
                  <MenuItem
                    isActive={
                      item.href === pathname ||
                      isSubMenuActive(item.dropdownItems!)
                    }
                    key={'drawer' + item.name + index}
                    href={item.href}
                    icon={item.icon}
                    />
                </span>
              ))}
            </div>
          ) : (
            <div className="mt-[45px]">
              {sideBarMenuItems.map((item, index) => (
                <div key={index} className="mb-6 block">
                  <MenuItem
                    key={'drawer-full' + item.name + index}
                    name={item.name}
                    href={item.href}
                    icon={item.icon}
                    dropdownItems={item.dropdownItems}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={cn('sticky bottom-5 mt-3 2xl:mt-12', open && 'px-8')}>
        {!open ? (
          <motion.div
            initial={{ x: 50, y: -5 }}
            animate={{
              x: 0,
              y: 0,
            }}
            className="cursor-pointer pb-2"
          >
            <AuthorCard
              image={AuthorImage}
              onClick={() => {
                const newPath =
                  layout === LAYOUT_OPTIONS.EXPLORER
                    ? routes.profile
                    : `/${layout}${routes.profile}`;
                router.push(newPath);
              }}
            />
          </motion.div>
        ) : (
          <div>
            <motion.div
              initial={{ y: '80%' }}
              animate={{
                y: 0,
                transition: {
                  delay: 0.1,
                },
              }}
            >
              <AuthorCard
                image={AuthorImage}
                name="David Odoh"
                role="personal"
                onClick={() => {
                  const newPath =
                    layout === LAYOUT_OPTIONS.EXPLORER
                      ? routes.profile
                      : `/${layout}${routes.profile}`;
                  router.push(newPath);
                }}
              />
            </motion.div>
          </div>
        )}
      </div>
    </aside>
  );
}
