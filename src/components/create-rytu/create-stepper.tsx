"use client";

import dynamic from "next/dynamic";
import { useScrollableSlider } from "@/hooks/use-scrollable-slider";
import { Tab, TabItem, TabPanel, TabPanels } from "@/components/shared/tab";
import Loader from "@/components/shared/loader";

// import icons
import { ChevronDown } from "@/components/icons/chevron-down";
import Button from "@/components/shared/button";
import { useRYTUStepper } from "../modal-views/ip-silo-context";

// Dynamic imports
const UploadIPForm = dynamic(
  () => import("@/components/create-rytu/upload-ip-form"),
  {
    loading: () => <LoaderComponent />,
  }
);
const UploadArtwork = dynamic(
  () => import("@/components/create-rytu/artwork-form"),
  {
    loading: () => <LoaderComponent />,
  }
);
const MetadataForm = dynamic(
  () => import("@/components/create-rytu/metadata-form"),
  {
    loading: () => <LoaderComponent />,
  }
);
const LicenseOwnershipForm = dynamic(
  () => import("@/components/create-rytu/license-ownership-form"),
  {
    loading: () => <LoaderComponent />,
  }
);

function LoaderComponent() {
  return (
    <div className="flex min-h-[500px] w-full flex-col items-center justify-center">
      <Loader size="small" />
    </div>
  );
}

export default function CreateStepper() {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  const { updateRytuStepper, currentIndex } = useRYTUStepper();

  return (
    <div className="h-full rounded-lg bg-white p-4 pb-6 shadow-card dark:bg-light-dark sm:px-6 2xl:px-8 2xl:pb-9">
      <Tab.Group selectedIndex={currentIndex} onChange={updateRytuStepper}>
        <div className="flex items-start">
          <button
            ref={sliderPrevBtn}
            onClick={() => scrollToTheLeft()}
            className="flex h-8 w-6 items-center justify-center bg-gradient-to-r from-white to-transparent text-dark dark:from-gray-800 xs:hidden"
          >
            <ChevronDown className="w-4 rotate-90 dark:text-white" />
          </button>
          <div className="-mb-4 flex h-full min-h-[36px] w-full items-start overflow-hidden xs:mb-0">
            <Tab.List
              ref={sliderEl}
              className="coin-list-scrollbar relative border-b border-gray-200 dark:border-gray-800 flex w-full justify-between overflow-x-auto scroll-smooth text-sm min-[375px]:justify-start min-[375px]:gap-8 xs:mb-0 2xl:gap-10"
            >
              <TabItem
                key={0}
                onClick={(e) => e.preventDefault()}
                className="whitespace-nowrap capitalize text-gray-600 md:uppercase [&>span]:px-0"
              >
                Upload IP/Content
              </TabItem>
              <TabItem
                key={1}
                onClick={(e) => e.preventDefault()}
                className="whitespace-nowrap px-0 capitalize text-gray-600 md:uppercase"
              >
                Upload/Generate Artwork
              </TabItem>
              <TabItem
                key={3}
                onClick={(e) => e.preventDefault()}
                className="whitespace-nowrap px-0 capitalize text-gray-600 md:uppercase"
              >
                Metadata
              </TabItem>
              <TabItem
                key={4}
                onClick={(e) => e.preventDefault()}
                className="whitespace-nowrap px-0 capitalize text-gray-600 md:uppercase"
              >
                License & Ownership
              </TabItem>
            </Tab.List>
          </div>
          <button
            ref={sliderNextBtn}
            onClick={() => scrollToTheRight()}
            className="flex h-8 w-6 items-center justify-center bg-gradient-to-l from-white to-transparent text-dark dark:from-gray-800 xs:hidden"
          >
            <ChevronDown className="w-4 -rotate-90 dark:text-white" />
          </button>
        </div>
        <TabPanels className="mt-4">
          <TabPanel className="focus:outline-none">
            <UploadIPForm />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <UploadArtwork />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <MetadataForm />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <LicenseOwnershipForm />
          </TabPanel>
        </TabPanels>
      </Tab.Group>
    </div>
  );
}
