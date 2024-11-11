'use client';

import Image from '@/components/shared/image';
import AnchorLink from '@/components/shared/links/anchor-link';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useIsDarkMode } from '@/hooks/use-is-dark-mode';
import { useLayout } from '@/hooks/use-layout';
import lightLogo from '@/assets/images/rytu-light-theme.png';
import darkLogo from '@/assets/images/rytu-dark-theme.png';
import lightLogoIcon from '@/assets/images/rytu-721-icon-light-theme.png';
import darkLogoIcon from '@/assets/images/rytu-721-icon-dark-theme.png';
import routes from '@/config/routes';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import cn from '@/utils/cn';
import LogoIcon from './logo-icon';
import { useEffect, useState } from 'react';

interface LogoPropTypes {
  className?: string;
  onFooter?: boolean;
}

type LayoutType = `${LAYOUT_OPTIONS}`;

function renderLogo(className?: string, onFooter?: boolean, layout: LayoutType = "home", isDarkMode: boolean = false) {
  switch (layout) {
    case LAYOUT_OPTIONS.EXPLORER:
    case LAYOUT_OPTIONS.USER:
      return (
        <AnchorLink
          href={{ pathname: routes.home }}
          className={cn('flex w-auto outline-none', className)}
        >
          <span className="relative overflow-hidden hidden lg:flex">
            {isDarkMode && (
              <Image src={darkLogoIcon} alt="RYTU" height={36} priority />
            )}
            {!isDarkMode && (
              <Image src={lightLogoIcon} alt="RYTU" height={36} priority />
            )}
          </span>
          
          {/* Small screens */}
          <span className='flex lg:hidden'>
            <LogoIcon />
          </span>

          <span className="font-extrabold ml-[-4px] text-[18px] sm:text-[24px] dark:text-white relative">
            ight<span className="dark:text-[var(--color-accent)]">To</span>Use
            <span className='absolute top-[1px] block right-[-8px] h-[28px] w-[60px] sm:h-[36px] sm:w-[60px] border border-l-0 border-t-0 border-black dark:border-[var(--color-accent)]'></span>
          </span>
        </AnchorLink>
      );
    case LAYOUT_OPTIONS.CERTIFICATE:
      return (
        <AnchorLink
          href={{ pathname: routes.home }}
          className={cn('flex w-auto outline-none', className)}
        >
          <span className="relative overflow-hidden">
            {isDarkMode && (
              <Image src={darkLogoIcon} alt="RYTU" height={36} priority />
            )}
            {!isDarkMode && (
              <Image src={lightLogoIcon} alt="RYTU" height={36} priority />
            )}
          </span>

          <span className="font-extrabold ml-[-4px] text-[18px] sm:text-[24px]  dark:text-white relative">
            ight<span className="dark:text-[var(--color-accent)]">To</span>Use
            <span className='absolute top-[1px] block right-[-8px] h-[28px] w-[60px] sm:h-[36px] sm:w-[60px] border border-l-0 border-t-0 border-black dark:border-[var(--color-accent)]'></span>
          </span>
        </AnchorLink>
      )
    default:
      return (
        <AnchorLink
          href={{ pathname: routes.home }}
          className={cn('flex w-auto outline-none', className)}
        >
          <span className="relative overflow-hidden hidden lg:flex">
            {isDarkMode && (
              <Image src={darkLogoIcon} alt="RYTU" height={36} priority />
            )}
            {!isDarkMode && (
              <Image src={lightLogoIcon} alt="RYTU" height={36} priority />
            )}
          </span>

          {/* Small screens */}
          <span className='flex lg:hidden'>
            <Image src={lightLogoIcon} alt="RYTU" height={36} priority />
          </span>

          { onFooter ?
            <span className="font-extrabold ml-[-4px] text-[18px] sm:text-[24px] dark:text-white relative">
              ight<span className="dark:text-[var(--color-accent)]">To</span>Use
              <span className='absolute top-[1px] block right-[-8px] h-[28px] w-[60px] sm:h-[36px] sm:w-[60px] border border-l-0 border-t-0 border-black dark:border-[var(--color-accent)]'></span>
            </span>
            :
            <span className="font-extrabold ml-[-4px] text-[18px] sm:text-[24px] dark:text-black dark:lg:text-white relative">
              ight<span className="dark:lg:text-[var(--color-accent)]">To</span>Use
              <span className='absolute top-[1px] block right-[-8px] h-[28px] w-[60px] sm:h-[36px] sm:w-[60px] border border-l-0 border-t-0 border-black dark:lg:border-[var(--color-accent)]'></span>
            </span>
          }
        </AnchorLink>
      )
  }
}

export default function Logo({ className, onFooter }: LogoPropTypes) {
  const isMounted = useIsMounted();
  const { layout } = useLayout();
  const { isDarkMode } = useIsDarkMode();

  console.log(`layout00`, layout)

  const [logo, setLogo] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const renderedLogo = renderLogo(className, onFooter, layout as LayoutType, isDarkMode);
    setLogo(renderedLogo);
  }, [className, onFooter, layout, isDarkMode]);

  return isMounted && logo;
}
