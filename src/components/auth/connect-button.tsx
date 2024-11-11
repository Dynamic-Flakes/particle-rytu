"use client";

import { useState } from "react";
import {
  useModal,
  useConnect,
  useAccount,
  useDisconnect,
} from "@particle-network/connectkit";

import ActiveLink from "@/components/shared/links/active-link";
import { Button, Menu, Transition } from "@headlessui/react";
import { useLocale } from "@/app/shared/locale-context";
import cn from "@/utils/cn";

export const ParticleSSOBtn = ({ setSignedIn }) => {
  const { t } = useLocale();
  const [connected, setConnected] = useState(false);
  const { isOpen, setOpen } = useModal();

  const handleConnect = async () => {
    try {
      await setOpen(true);
      //   setConnected(true);
      //   setSignedIn(true);
    } catch (error) {
      console.error("Connection failed", error);
    }
  };

  const handleDisconnect = () => {
    // setConnected(false);
    // setSignedIn(false);
  };

  return (
    <ActiveLink href="">
      <Button
        onClick={handleConnect}
        className={cn(
          "shadow-main hover:shadow-large",
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden text-center text-xs font-medium tracking-wider outline-none transition-all sm:text-sm bg-brand border-brand hover:-translate-y-0.5 focus:-translate-y-0.5 focus:shadow-large focus:outline-none text-white rounded-full px-5 sm:px-8 h-10 sm:h-10 shadow-main hover:shadow-large dark:bg-[var(--color-accent)] dark:text-black"
        )}
      >
        {t("components:navbar.sign-in")}
      </Button>
    </ActiveLink>
  );
};
