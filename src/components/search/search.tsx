'use client';

import Button from '@/components/shared/button';
import Feeds from '@/components/search/feeds';
import { useDrawer } from '@/components/drawer-views/context';
import { Filters, GridSwitcher, SortList } from '@/components/search/filters';
import { OptionIcon } from '@/components/icons/option';
import { RectangularBanner } from '../banner/banners';

export default function Search() {
  const { openDrawer } = useDrawer();
  return (
    <>
      <div className="grid 2xl:grid-cols-[280px_minmax(auto,_1fr)] 4xl:grid-cols-[320px_minmax(auto,_1fr)]">
        <div className="relative hidden border-dashed border-gray-200 ltr:border-r ltr:pr-8 rtl:border-l rtl:pl-8 dark:border-gray-700 2xl:block">
          <div className="lg:fixed lg:max-w-[250px]">
            <Filters />
          </div>
        </div>

        <div className="2xl:ltr:pl-8 2xl:rtl:pr-8 4xl:ltr:pl-10 4xl:rtl:pr-10">
          <div className="mt-0 mb-7 md:mt-8">
            <RectangularBanner />
          </div>

          <div className="relative z-10 mb-6 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-900 dark:text-white sm:text-sm">
              5,686,066 items
            </span>

            <div className="flex gap-6 3xl:gap-8">
              <SortList />
              <div className="hidden 3xl:block">
                <GridSwitcher />
              </div>
              <div className="hidden sm:block 2xl:hidden">
                <Button
                  shape="rounded"
                  size="small"
                  variant="ghost"
                  color="gray"
                  onClick={() => openDrawer('DRAWER_SEARCH')}
                  className="!h-11 !p-3 hover:!translate-y-0 hover:!shadow-none focus:!translate-y-0 focus:!shadow-none"
                >
                  <OptionIcon className="relative h-auto w-[18px]" />
                </Button>
              </div>
            </div>
          </div>
          <Feeds />
        </div>

        {/* <div className="fixed bottom-6 left-1/2 z-10 w-full -translate-x-1/2 px-9 sm:hidden"> */}
        <div className="fixed bottom-[10rem] right-8 z-10 sm:hidden">
          <Button onClick={() => openDrawer('DRAWER_SEARCH')} className="rounded-full p-0 border h-10 w-10 shrink-0 cursor-pointer border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12">
            <OptionIcon className="relative h-auto w-[16px]" />
          </Button>
        </div>
      </div>
    </>
  );
}
