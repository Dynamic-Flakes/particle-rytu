"use client";

import cn from "@/utils/cn";
import { useState } from "react";
import { Listbox } from "@/components/shared/listbox";
import InputLabel from "@/components/shared/input-label";
import { Transition } from "@/components/shared/transition";

// import icons
import { ChevronDown } from "@/components/icons/chevron-down";

interface SelectOption {
  id: number | string;
  name: string;
  [key: string]: any;
}

export default function SimpleSelect({
  selectData,
  selection,
  onChange,
}: React.PropsWithChildren<{
  selectData: SelectOption[];
  selection: SelectOption;
  onChange: (state) => void;
}>) {
  return (
    <div>
      <div className="relative">
        <Listbox value={selection} onChange={onChange}>
          <Listbox.Button className="text-case-inherit letter-space-inherit flex h-10 w-full items-center justify-between rounded-lg border border-[#E2E8F0] bg-gray-200/50 px-4 text-sm font-medium text-gray-900 outline-none transition-shadow duration-200 hover:border-gray-900 hover:ring-1 hover:ring-gray-900 dark:border-gray-700 dark:bg-light-dark dark:text-gray-100 dark:hover:border-gray-600 dark:hover:ring-gray-600 sm:h-12 sm:px-5">
            <div className="flex items-center capitalize mr-1">
              {selection.name}
            </div>
            <ChevronDown />
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute left-0 z-10 mt-1 grid w-full origin-top-right gap-0.5 rounded-lg border border-gray-200 bg-white p-1 shadow-large outline-none dark:border-gray-700 dark:bg-light-dark xs:p-2">
              {selectData.map((option) => (
                <Listbox.Option key={option.id} value={option}>
                  {({ selected }) => (
                    <div
                      className={cn(
                        "flex cursor-pointer capitalize items-center rounded-md px-3 py-2 text-sm text-gray-900 transition dark:text-gray-100",
                        selected
                          ? "bg-gray-200/70 font-medium dark:bg-gray-600/60"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700/70"
                      )}
                    >
                      {option.name}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
}
