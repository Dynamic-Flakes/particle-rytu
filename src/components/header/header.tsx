"use client";

import routes from "@/config/routes";
import { useIsMounted } from "@/hooks/use-is-mounted";
import cn from "@/utils/cn";
import { useRouter } from "next/navigation";
import useWindowScroll from "react-use/lib/useWindowScroll";
import ActiveLink from "../shared/links/active-link";
import { ShoppingCartIcon } from "../icons/shopping-cart";
import Logo from "../shared/logo";
import { LanguageSwitcher } from "../search/filters";
import { useLocale } from "@/app/shared/locale-context";
import { Fragment, useEffect, useState } from "react";
import { Button, Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "../icons/chevron-down";
import { fira_code } from "@/app/fonts/fonts";
import SocialLinks from "../footer/social-links";
import { useDrawer } from "../drawer-views/context";
import LogoIcon from "../shared/logo-icon";
import Hamburger from "../shared/hamburger";
import SearchButton from "../search/button";
import { EXPLORER_LAYOUT_OPTIONS, LAYOUT_OPTIONS } from "@/lib/constants";
import { ParticleSSOBtn } from "@/components/auth/connect-button";

export function ShoppingCartButton() {
  const isMounted = useIsMounted();
  return (
    isMounted && (
      <ActiveLink href={"/"}>
        <div className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12">
          <ShoppingCartIcon className="h-auto w-4 sm:w-auto" />
          <span className="absolute flex justify-center items-center text-[7px] right-0 top-0 h-2.5 min-w-2.5 rounded-full bg-brand shadow-light text-white dark:text-black dark:bg-slate-50 sm:h-3 sm:min-w-3 scale-[1.5] p-[2px]">
            10
          </span>
          <span className="sr-only">Shopping Cart icon</span>
        </div>
      </ActiveLink>
    )
  );
}

function HamburgerIcon({ isOpen, toggleMobileMenu, hamburgerByClasses = "" }) {
  return (
    <div onClick={() => toggleMobileMenu(!isOpen)} className="relative">
      <div className={cn("absolute block top-[-19px] h-[40px] w-[50px]")}></div>
      <div
        className={cn(
          isOpen ? "rotate-[-45deg]" : "mt-[5px]",
          "ham-line w-[40px] h-[1px] block transition-all duration-300 ease-[cubic-bezier(.475,.425,0,.995)]",
          hamburgerByClasses.length ? hamburgerByClasses : "bg-[#191b1d]"
        )}
      ></div>
      <div
        className={cn(
          isOpen ? "rotate-[-135deg] mt-0" : "mt-[10px]",
          "ham-line w-[40px] h-[1px] block transition-all duration-300 ease-[cubic-bezier(.475,.425,0,.995)]",
          hamburgerByClasses.length ? hamburgerByClasses : "bg-[#191b1d]"
        )}
      ></div>
    </div>
  );
}

function HeaderRightArea({
  isOpen,
  toggleMobileMenu,
  signedIn,
  setSignedIn,
  hamburgerByClasses,
}) {
  const { t } = useLocale();
  const isMounted = useIsMounted();

  return (
    isMounted && (
      <div className="relative order-last flex shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
        <ul className="hidden lg:flex gap-8">
          <li>
            <ActiveLink
              href={`${EXPLORER_LAYOUT_OPTIONS.MUSIC}/${routes.createRytu}`}
              className="hover:text-[var(--color-hint)] dark:hover:text-[var(--color-accent)]"
            >
              {t("components:navbar.create")}
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href={routes.explorer("music")}
              className="hover:text-[var(--color-hint)] dark:hover:text-[var(--color-accent)]"
            >
              {t("components:navbar.explore")}
            </ActiveLink>
          </li>
        </ul>

        <div className="hidden lg:block">
          {!signedIn ? (
            <ParticleSSOBtn setSignedIn={setSignedIn}></ParticleSSOBtn>
          ) : (
            <div>
              <Menu
                as="div"
                className="relative inline-block text-left mr-[-60px]"
              >
                <div>
                  <Menu.Button
                    className={cn(
                      fira_code.className,
                      " inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-gray-100 px-4 py-3 text-gray-900 dark:bg-gray-700 dark:text-white"
                    )}
                  >
                    Hi David
                    <ChevronDown
                      className="h-3 w-3 text-gray-900 ml-4 ltr:ml-2 rtl:mr-2 dark:text-white"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-20 mt-2 w-auto text-nowrap min-w-[120px] origin-top-right rounded-lg bg-white p-3 px-1.5 shadow-large shadow-gray-400/10 dark:bg-light-dark dark:shadow-gray-900 dark:backdrop-blur">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <ActiveLink
                          href={routes.home}
                          className={`${"hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[var(--color-hint)] dark:hover:text-[var(--color-accent)]"} group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 dark:text-white`}
                        >
                          {t("components:navbar.user.profile")}
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink
                          href={routes.home}
                          className="
                                hover:text-[var(--color-hint)] dark:hover:text-[var(--color-accent)]
                                group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                        >
                          {t("components:navbar.user.favourite")}
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink
                          href="/"
                          onClick={() => setSignedIn(false)}
                          className="
                                hover:text-[var(--color-hint)] dark:hover:text-[var(--color-accent)]
                                group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                        >
                          {t("components:navbar.user.sign-out")}
                        </ActiveLink>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}
        </div>

        <span className="hidden lg:block">
          <ShoppingCartButton />
        </span>

        <span className="block lg:hidden">
          <HamburgerIcon
            isOpen={isOpen}
            toggleMobileMenu={toggleMobileMenu}
            hamburgerByClasses={hamburgerByClasses}
          />
        </span>

        <div className="">
          <LanguageSwitcher
            multiLang={{
              choices: [
                { label: "En", value: "en" },
                { label: "Fr", value: "fr" },
                { label: "日本語", value: "ja" },
                { label: "中文", value: "zh" },
                { label: "Es", value: "es" },
              ],
            }}
          />
        </div>
      </div>
    )
  );
}

function MobileMenuDrawer({ isOpen, signedIn, setSignedIn, setIsOpen }) {
  const [showItems, setShowItems] = useState(false);
  const { t } = useLocale();

  const menuItems = [
    {
      title: t("components:navbar.explore"),
      href: routes.explorer("music"),
      icon: "",
      requireSignIn: false,
      hideWhenSignedIn: false,
      onClick: () => {
        setIsOpen(false);
      },
    },
    {
      title: t("components:navbar.cart"),
      href: "/",
      icon: "",
      requireSignIn: false,
      hideWhenSignedIn: false,
      onClick: () => {},
    },
    {
      title: t("components:navbar.create"),
      href: "/",
      icon: "",
      requireSignIn: false,
      hideWhenSignedIn: false,
      onClick: () => {},
    },
    {
      title: t("components:navbar.request"),
      href: "/",
      icon: "",
      requireSignIn: false,
      hideWhenSignedIn: false,
      onClick: () => {},
    },
    {
      title: t("components:navbar.sign-in"),
      href: routes.signIn,
      icon: "",
      requireSignIn: false,
      hideWhenSignedIn: true,
      onClick: () => {
        setSignedIn(true);
      },
    },
    {
      title: t("components:navbar.sign-up"),
      href: "/",
      icon: "",
      requireSignIn: false,
      hideWhenSignedIn: true,
      onClick: () => {},
    },
    {
      title: t("components:navbar.user.profile"),
      href: "/",
      icon: "",
      requireSignIn: true,
      hideWhenSignedIn: false,
      onClick: () => {},
    },
    {
      title: t("components:navbar.user.favourite"),
      href: "/",
      icon: "",
      requireSignIn: true,
      hideWhenSignedIn: false,
      onClick: () => {},
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setShowItems(true), 300);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto";
      setShowItems(false);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`block fixed inset-0 transition-opacity z-[42] bg-white lg:hidden  ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="flex flex-col h-full">
        <div
          className={`flex justify-center mt-[100px] bg-white dark:bg-brand border-t-[0.5px] border-[#00000057]`}
        >
          <div
            className={`transition-all duration-1000 ${showItems ? `translate-x-0 opacity-100 delay-${menuItems.length * 2000}` : "-translate-x-20 opacity-0"}`}
          >
            <SocialLinks />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr] w-full border-[#00000057] border-t-[0.5px]">
          {menuItems
            .filter(
              (item) =>
                (!item.requireSignIn || signedIn) &&
                !(item.hideWhenSignedIn && signedIn)
            )
            .map((item, index) => (
              <div key={index} className="relative group">
                <div
                  className="transition-all ease-in-out duration-300
                    absolute block bottom-0 left-0 w-full h-0 bg-[var(--color-accent-2)] group-hover:h-full"
                ></div>
                {
                  <ActiveLink
                    href={item.href}
                    className={`text-[18px] font-semibold text-gray-800 transition-all duration-500 ease-out transform 
                    flex justify-center items-center w-full pt-10 pb-10 border-b-[0.5px] border-[#00000057] mb-0 
                    ${
                      showItems
                        ? `translate-y-0 opacity-100 delay-${index * 100}`
                        : "translate-y-20 opacity-0"
                    } ${index % 2 === 0 ? "border-r-[0.5px]" : ""}`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                    onClick={item.onClick}
                  >
                    {item.title}
                  </ActiveLink>
                }
              </div>
            ))}
        </div>

        {signedIn ? (
          <Button
            onClick={() => {
              setSignedIn(false);
            }}
            className={cn(
              "shadow-main hover:shadow-large",
              `fixed bottom-[64px] w-full inline-flex items-center justify-center text-[18px] font-medium outline-none 
              bg-brand border-brand focus:outline-none text-white px-5 h-16`
            )}
          >
            {t("components:navbar.user.sign-out")}
          </Button>
        ) : (
          <></>
        )}

        <Button
          className={cn(
            "shadow-main hover:shadow-large",
            `fixed bottom-0 w-full inline-flex items-center justify-center text-[18px] font-medium outline-none 
              bg-[var(--color-accent-2)] focus:outline-none text-black px-5 h-16 border-t-[0.5px] border-[#00000057]`
          )}
        >
          {t("components:navbar.contact-support")}
        </Button>
      </nav>
    </div>
  );
}

export function HomeHeader({ className }: { className?: string }) {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();
  const router = useRouter();

  const [signedIn, setSignedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        "sticky top-0 z-30 h-16 w-full lg:backdrop-blur rounded-[20px] lg:transition-shadow duration-300 sm:h-20 3xl:h-24 ltr:right-0 rtl:left-0",
        ((isMounted && windowScroll.y) as number) > 2
          ? "lg:bg-white/80 lg:shadow-card lg:dark:bg-dark/80 sticky-top"
          : "",
        className
      )}
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 3xl:px-10">
        <div className="flex items-center">
          <div
            onClick={() => router.push(routes.home)}
            className="flex items-center z-[43]"
          >
            <Logo />
          </div>

          <MobileMenuDrawer
            isOpen={isOpen}
            setSignedIn={setSignedIn}
            signedIn={signedIn}
            setIsOpen={setIsOpen}
          />
        </div>

        <div className="z-[43]">
          <HeaderRightArea
            isOpen={isOpen}
            toggleMobileMenu={toggleMobileMenu}
            setSignedIn={setSignedIn}
            signedIn={signedIn}
            hamburgerByClasses=""
          />
        </div>
      </div>
    </nav>
  );
}

export function CertificateHeader({
  className,
  hamburgerByClasses,
}: {
  className?: string;
  hamburgerByClasses?: string;
}) {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const windowScroll = useWindowScroll();

  const [signedIn, setSignedIn] = useState(false);

  const toggleMobileMenu = () =>
    isOpen ? closeDrawer() : openDrawer("EXPLORER_SIDEBAR");

  return (
    <nav
      className={cn(
        "sticky top-0 z-30 h-16 w-full lg:backdrop-blur rounded-[20px] lg:transition-shadow duration-300 sm:h-20 3xl:h-24 ltr:right-0 rtl:left-0",
        ((isMounted && windowScroll.y) as number) > 2
          ? "lg:bg-white/80 lg:shadow-card lg:dark:bg-dark/80 sticky-top"
          : "",
        className
      )}
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 3xl:px-10">
        <div className="flex items-center">
          <div
            onClick={() => router.push(routes.home)}
            className="flex items-center z-[43]"
          >
            <Logo />
          </div>
        </div>

        <span>
          <HeaderRightArea
            isOpen={isOpen}
            toggleMobileMenu={toggleMobileMenu}
            setSignedIn={setSignedIn}
            signedIn={signedIn}
            hamburgerByClasses={hamburgerByClasses}
          />
        </span>
      </div>
    </nav>
  );
}

export function ExplorerHeader({
  className,
  hamburgerByClasses,
}: {
  className?: string;
  hamburgerByClasses?: string;
}) {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const windowScroll = useWindowScroll();

  const [signedIn, setSignedIn] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () =>
    isOpen ? closeDrawer() : openDrawer("EXPLORER_SIDEBAR");

  return (
    <nav
      className={cn(
        "sticky top-0 z-30 h-16 w-full backdrop-blur transition-all duration-300 sm:h-20 3xl:h-24 ltr:right-0 rtl:left-0",
        ((isMounted && windowScroll.y) as number) > 2
          ? "bg-white/80 shadow-card dark:bg-dark/80"
          : "",
        className
      )}
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 3xl:px-10">
        <div className="flex items-center">
          <div
            onClick={() => router.push(routes.home)}
            className="flex items-center xl:hidden"
          >
            <LogoIcon />
          </div>

          <div className="flex w-[50px] justify-end">
            <SearchButton
              variant="transparent"
              className="dark:text-white ltr:-ml-[17px] rtl:-mr-[17px]"
            />
          </div>
        </div>
        <span>
          <HeaderRightArea
            isOpen={isOpen}
            toggleMobileMenu={toggleMobileMenu}
            setSignedIn={setSignedIn}
            signedIn={signedIn}
            hamburgerByClasses={hamburgerByClasses}
          />
        </span>
      </div>
    </nav>
  );
}
