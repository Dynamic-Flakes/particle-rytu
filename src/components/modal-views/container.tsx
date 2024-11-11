"use client";

import { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname, useSearchParams } from "next/navigation";
import { Dialog } from "@/components/shared/dialog";
import { Transition } from "@/components/shared/transition";
import Button from "@/components/shared/button";
import { Close } from "@/components/icons/close";
import { useModal, MODAL_VIEW } from "@/components/modal-views/context";
import Followers from "@/components/profile/followers-view";
import cn from "@/utils/cn";
import { DialogPanel } from "@headlessui/react";

// dynamic imports
const SearchView = dynamic(() => import("@/components/search/view"));
const ShareView = dynamic(() => import("@/components/rytu/share-view"));
// const SelectWallet = dynamic(() => import('@/components/nft/select-wallet'));
const ProfileInfo = dynamic(
  () => import("@/components/profile/profile-info-view")
);
const IPSiloStepper = dynamic(
  () => import("@/components/modal-views/ip-silo-stepper")
);
const PreviewContent = dynamic(
  () => import("@/components/create-rytu/rytu-preview-content")
);
const CreateCollection = dynamic(
  () => import("@/components/modal-views/create-collection")
);
const ConfirmDialog = dynamic(
  () => import("@/components/shared/dialog/confirm-dialog")
);

function renderModalContent(view: MODAL_VIEW | string) {
  switch (view) {
    case "SEARCH_VIEW":
      return <SearchView />;
    case "SHARE_VIEW":
      return <ShareView />;
    // case 'WALLET_CONNECT_VIEW':
    //   return <SelectWallet />;
    case "PROFILE_INFO_VIEW":
      return <ProfileInfo />;
    case "FOLLOWERS_VIEW":
      return <Followers />;
    case "NFT_PREVIEW":
      return <PreviewContent />;
    case "IP_SILO_STEPPER":
      return <IPSiloStepper />;
    case "CREATE_COLLECTION":
      return <CreateCollection />;
    case "CONFIRMATION_DIALOG":
      return <ConfirmDialog />;
    default:
      return null;
  }
}

export default function ModalContainer() {
  const { view, isOpen, closeModal } = useModal();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    closeModal();
    console.log("isOpen", isOpen, view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden p-4 text-center sm:p-6 lg:p-8 xl:p-10 3xl:p-12"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPanel
            className="fixed inset-0 z-40 cursor-pointer bg-gray-700 bg-opacity-60 backdrop-blur pt-[40px] overflow-hidden"
            onClick={() => view && view !== "SEARCH_VIEW" && closeModal()}
          >
            {/* This element is to trick the browser into centering the modal contents. */}
            {view && view !== "SEARCH_VIEW" && (
              <span
                className="inline-block h-full align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
            )}

            {/* This element is need to fix FocusTap headless-ui warning issue */}
            <div className="sr-only">
              <Button
                size="small"
                color="gray"
                shape="circle"
                onClick={closeModal}
                className="opacity-50 hover:opacity-80 "
              >
                <Close className="h-auto w-[13px]" />
              </Button>
            </div>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-105"
            >
              <div
                className={cn(
                  "relative z-50 inline-block w-full text-left align-middle",
                  // layout === LAYOUT_OPTIONS.EXPLORER ? 'sm:w-auto' :
                  "xs:w-auto"
                )}
              >
                {view && renderModalContent(view)}
              </div>
            </Transition.Child>
          </DialogPanel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
