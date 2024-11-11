import { ThemeSwitcherButton } from '@/components/settings/theme-switcher';
import cn from '@/utils/cn';

export default function HomeLayout({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) {
  return (
    <div className="">
      <main
        className={cn(
          'min-h-[100vh] pt-4 xl:pb-24 3xl:pt-0.5', 
          contentClassName,
        )}
      >
        {children}
      </main>
      <div className='fixed bottom-[2rem] ltr:right-8 rtl:left-8'>
        <ThemeSwitcherButton />
      </div>
    </div>
  );
}