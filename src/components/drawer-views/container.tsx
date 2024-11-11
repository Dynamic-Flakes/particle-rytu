'use client';

import { Fragment, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { usePathname, useSearchParams } from 'next/navigation';
import { Dialog } from '@/components/shared/dialog';
import { Transition } from '@/components/shared/transition';
import { DRAWER_VIEW, useDrawer } from '@/components/drawer-views/context';
import { useLayout } from '@/hooks/use-layout';
import { getLayoutValue, LAYOUT_OPTIONS } from '@/lib/constants';
import { defaultMenuItems } from '@/components/sidebar/_menu-items';
import { DialogPanel, TransitionChild } from '@headlessui/react';

// dynamic imports
const DrawerFilters = dynamic(() => import('@/components/search/filters'));
const DrawerMenu = dynamic(() => import('@/components/sidebar/_layout-menu'));
// const PreviewContent = dynamic(
//   () => import('@/components/create-nft/nft-preview-content')
// );

function renderDrawerContent(view: DRAWER_VIEW | string, explorerLayoutValue) {
  switch (view) {
    case 'EXPLORER_SIDEBAR':
      return (
        <DrawerMenu
          layoutOption={`/${explorerLayoutValue}`}
          menuItems={defaultMenuItems}
        />
      );
    case 'DRAWER_SEARCH':
      return <DrawerFilters />;
    // case 'DRAWER_PREVIEW_NFT':
    //   return <PreviewContent />;
    default:
      return <DrawerMenu />;
  }
}

export default function DrawersContainer() {
  const layoutOptions = Object.values(LAYOUT_OPTIONS);
  const pathname = usePathname();
  const layoutSegmentFromURL = pathname!.split('/')[1];
  const searchParams = useSearchParams();
  const { view, isOpen, closeDrawer } = useDrawer();
  const { setLayout, layout } = useLayout();
  const { pathBase, selectedLayout } = getLayoutValue(pathname, layoutSegmentFromURL);

  // set initial layout on component mount
  useEffect(() => {
    setLayout(selectedLayout);
    console.log('initialLayout', selectedLayout)

  }, [selectedLayout, layoutOptions, layoutSegmentFromURL, pathname, setLayout]);

  useEffect(() => {
    closeDrawer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 overflow-hidden"
        onClose={closeDrawer}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPanel className="fixed inset-0 bg-gray-700 bg-opacity-60 backdrop-blur" onClick={() => closeDrawer()}>
        
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="fixed inset-y-0 left-0 flex w-full max-w-full xs:w-auto">
                {view && renderDrawerContent(view, pathBase)}
              </div>
            </TransitionChild>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
