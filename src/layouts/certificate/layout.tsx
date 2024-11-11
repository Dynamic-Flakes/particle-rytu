import cn from '@/utils/cn';
import { CertificateHeader } from '@/components/header/header';
import { ThemeSwitcherButton } from '@/components/settings/theme-switcher';

export default function CertificateLayout({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) {
  return (
    <div className="ltr:xl:px-24 rtl:xl:px-24 ltr:2xl:px-28 rtl:2xl:px-28 ">
      <CertificateHeader hamburgerByClasses={"bg-brand dark:bg-white"} />
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
