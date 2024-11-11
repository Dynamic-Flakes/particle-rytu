import cn from '@/utils/cn';
import { ExplorerHeader } from '@/components/header/header';
import Sidebar from '@/components/sidebar/_expandable';
import { ThemeSwitcherButton } from '@/components/settings/theme-switcher';
import { RiShoppingCartLine } from "react-icons/ri";

export default function ExplorerLayout({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) {
  return (
    <div className="ltr:xl:pl-24 rtl:xl:pr-24 ltr:2xl:pl-28 rtl:2xl:pr-28 ">
      <ExplorerHeader hamburgerByClasses={"bg-brand dark:bg-white"} />
      <Sidebar className="hidden xl:block" />
      <main
        className={cn(
          'min-h-screen px-4 pb-16 pt-4 md:pt-4 sm:px-6 sm:pb-20 lg:px-8 xl:pb-24 xl:pt-5 3xl:px-10',
          contentClassName,
        )}
      >
        {children}
      </main>
      <div className='block sm:hidden fixed bottom-[1rem] ltr:right-7 rtl:left-7 lg:hidden h-[200px] w-[50px] rounded-[20px] backdrop-blur-[14px] shadow-main bg-[#0000003d]'> </div>
      <div className='fixed bottom-[6rem] ltr:right-8 rtl:left-8 lg:hidden'>
        <div className="relative flex h-10 w-10 text-[18px] md:text-[22px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12">
            <RiShoppingCartLine />
            <span className="absolute flex justify-center items-center text-[7px] right-0 top-0 h-3.5 min-w-3.5 rounded-full bg-[var(--color-hint)] dark:text-black dark:bg-[var(--color-accent)] shadow-light text-white sm:h-3 sm:min-w-3 scale-[1.5] p-[2px]">10</span>
          </div>
      </div>
      <div className='fixed bottom-[2rem] ltr:right-8 rtl:left-8'>
        <ThemeSwitcherButton />
      </div>

      </div>
  );
}
