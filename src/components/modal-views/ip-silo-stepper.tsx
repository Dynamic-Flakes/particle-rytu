import { useEffect, useState } from "react";
import Link from "next/link";
import cn from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInBottom } from "@/lib/framer-motion/fade-in-bottom";
import Button from "@/components/shared/button/button";
import { useModal } from "@/components/modal-views/context";
import { Close } from "@/components/icons/close";
import Text from "@/components/shared/text";
import ProcessingSVG from "@/components/shared/busy-icon";
import { useIPStepper } from "./ip-silo-context";

const stepperContent = [
  {
    id: 1,
    title: "Uploading to Silo",
    content:
      "Your IP or Content is currently being securely uploaded to the Silo.",
  },
  {
    id: 2,
    title: "Generating Fingerprint & Hash",
    content:
      "Please hold on your fingerprint and hash and currently being generated.",
  },
  {
    id: 3,
    title: "Saving to IP Silo",
    content: "Plesee hold on, we are finishing things up.",
  },
  {
    id: 4,
    title: "We are done!!",
    content: "All looks great, click next to continue",
  },
];

function Stepper({
  currentTab,
  className,
  currentState,
  totalSteps,
}: {
  currentTab: number;
  className?: string;
  currentState?: string;
  totalSteps: number;
}) {
  const progressBar = Math.floor(100 / (totalSteps - currentTab + 0.5));

  return (
    <div className={cn("space-y-6 sm:space-y-8", className)}>
      {stepperContent.map((item) => {
        const isActive = currentTab === item.id;
        return (
          <div key={item.id} className="text-start">
            <Text
              tag="h5"
              className={cn(
                "mb-4 text-base font-medium text-gray-500",
                isActive && "!text-brand dark:!text-gray-100"
              )}
            >{`${item.id}. ${item.title}`}</Text>

            {isActive && (
              <AnimatePresence>
                <motion.div
                  layout
                  initial="exit"
                  animate="enter"
                  exit="exit"
                  variants={fadeInBottom("easeIn", 0.25, 16)}
                >
                  <Text className="ps-8 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.content}
                  </Text>
                  <div className="flex justify-center items-center mt-4">
                    <div className="mx-8 w-full text-sm leading-6 bg-brand text-white dark:text-gray-400">
                      <span
                        className={`block px-2 py-1 whitespace-nowrap bg-slate-600 transition-all duration-500 ease-in-out`}
                        style={{ width: `${progressBar}%` }}
                      >
                        {progressBar}/100 {currentState}
                      </span>
                    </div>
                    <div className="mx-auto w-[40px]">
                      <ProcessingSVG />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function IPSiloStepper() {
  const { closeModal } = useModal();
  // const [current, setCurrent] = useState(1);
  const { currentIndex, currentState, totalSteps, resetSteps, setTotalSteps } =
    useIPStepper();

  // setTotalSteps(stepperContent.length);

  // const totalTabCount = stepperContent.length;
  // const handledNextTabChange = () => {
  //   current < totalTabCount && setCurrent((prev) => prev + 1);
  // };
  // const handledPrevTabChange = () => {
  //   current > 1 && setCurrent((prev) => prev - 1);
  // };

  useEffect(() => {
    // setCurrent(currentIndex);
    if (currentIndex === totalSteps) {
      closeModal();
      resetSteps();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="w-full md:w-[680px]" onClick={(e) => e.stopPropagation()}>
      <div className="relative flex flex-grow flex-col overflow-hidden rounded-lg bg-white p-4 shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark md:p-8">
        <div className="mb-8 flex items-center justify-between border-b border-dashed pb-6 text-lg font-medium capitalize -tracking-wide text-gray-900 ltr:text-left rtl:text-right dark:border-gray-700 dark:text-white lg:text-xl">
          IP/Content Upload and Identification
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={() => closeModal()}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 items-start gap-9 sm:items-center">
          <Stepper
            currentTab={currentIndex}
            currentState={currentState}
            totalSteps={totalSteps}
            className="order-2 sm:order-1"
          />
        </div>
        <div className="mt-13 flex items-end justify-between">
          <Link
            href="/"
            className="text-sm leading-6 text-gray-500 hover:text-brand dark:text-gray-300"
          >
            Help Center
          </Link>
          {/* <div className="hidden gap-3">
            <Button
              shape="rounded"
              onClick={() => handledPrevTabChange()}
              className={cn(
                "disabled:text-gray-500 dark:disabled:bg-brand",
                current === 1 && "hidden"
              )}
            >
              Previous
            </Button>
            <Button
              shape="rounded"
              onClick={() => handledNextTabChange()}
              disabled={totalTabCount === current}
              className="disabled:text-gray-500 dark:disabled:bg-brand"
            >
              Next
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
