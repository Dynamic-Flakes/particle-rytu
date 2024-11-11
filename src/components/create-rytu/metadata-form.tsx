import { useState } from "react";

import { Transition } from "@/components/shared/transition";
import { Listbox } from "@/components/shared/listbox";
import Image from "@/components/shared/image";
import Button from "@/components/shared/button";
import { Switch } from "@/components/shared/switch";
import Input from "@/components/shared/forms/input";
import Textarea from "@/components/shared/forms/textarea";
import InputLabel from "@/components/shared/input-label";
import ToggleBar from "@/components/shared/toggle-bar";
import { ChevronDown } from "@/components/icons/chevron-down";
import { Ethereum } from "@/components/icons/ethereum";
import { Flow } from "@/components/icons/flow";
import { Warning } from "@/components/icons/warning";
import { Unlocked } from "@/components/icons/unlocked";
import Avatar from "@/components/shared/avatar";
import { useRYTUStepper } from "@/components/modal-views/ip-silo-context";
import ad1 from "@/assets/images/collection/grid/collection-5.jpg";
import ad2 from "@/assets/images/collection/grid/collection-7.jpg";
import ad3 from "@/assets/images/collection/grid/collection-1.jpg";

//images
import AuthorImage from "@/assets/images/author.jpg";
import NFT1 from "@/assets/images/nft/nft-1.jpg";
import PriceType from "@/components/create-rytu/price-types-props";
import FileInput from "@/components/shared/file-input";
import cn from "@/utils/cn";
import { Plus } from "../icons/plus";
import { useModal } from "../modal-views/context";
import { Refresh } from "../icons/refresh";
import { SwapIcon } from "../icons/swap-icon";
import { TagIcon } from "../icons/tag-icon";
import SimpleSelect from "../shared/simple-select";
import { EXPLORER_LAYOUT_OPTIONS } from "@/lib/constants";
import { useRYTUPreview } from "./rytu-preview-context";

const BlockchainOptions = [
  {
    id: 1,
    name: "Ethereum",
    value: "ethereum",
    icon: <Ethereum />,
  },
  {
    id: 2,
    name: "XRP",
    value: "xrp",
    icon: <Flow />,
  },
];

const CollectionOptions = [
  {
    id: 1,
    name: "Soul Music Collection",
    coverImage: ad1,
  },
  {
    id: 2,
    name: "Afrobeat Music Collection",
    coverImage: ad2,
  },
  {
    id: 3,
    name: "K-Pop Sensation Collection",
    coverImage: ad3,
  },
];

const visibilityOptions = [
  { id: 1, name: "public" },
  {
    id: 2,
    name: "private",
  },
  {
    id: 3,
    name: "restricted",
  },
];

const explorerOptions = Object.values(EXPLORER_LAYOUT_OPTIONS).map(
  (option, index) => ({ id: index + 1, name: option })
);

export default function MetadataForm() {
  const { updateRytuStepper } = useRYTUStepper();
  const [result, setResult] = useState<any>(null);
  const { openModal } = useModal();

  let [publish, setPublish] = useState(false);
  let [explicit, setExplicit] = useState(false);
  let [unlocked, setUnlocked] = useState(false);
  let [resaleable, setResaleable] = useState(false);
  let [priceType, setPriceType] = useState("fixed");
  let [blockchain, setBlockChain] = useState(BlockchainOptions[0]);
  let [collection, setCollection] = useState(CollectionOptions[0]);
  let [visibility, setVisibility] = useState(visibilityOptions[0]);
  let [explorerSelection, setExplorerSelection] = useState(explorerOptions[0]);
  const { updatePreview } = useRYTUPreview();

  return (
    <>
      <div className="mx-auto w-full py-4 lg:px-8 xl:px-10 2xl:px-0">
        {/* Price */}
        <div className="mb-8">
          <InputLabel title="Price" important />
          <Input
            min={0}
            type="number"
            placeholder="Enter your price"
            inputClassName="spin-button-hidden"
            className="relative"
            suffix="USD"
            suffixClassName="text-red-500 text-sm font-medium absolute top-auto bottom-3 end-5 dark:text-gray-100"
            onChange={(e) => updatePreview({ price: e.target.value })}
          />
        </div>

        {/* Name */}
        <div className="mb-8">
          <InputLabel title="Name" important />
          <Input
            type="text"
            placeholder="Item name"
            onChange={(e) => updatePreview({ name: e.target.value })}
          />
        </div>

        {/* Collection */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-[#4B5563] dark:text-gray-400 sm:mb-3">
            <InputLabel title="Collection" />
            <div className="flex items-center text-sm gap-2 mb-3">
              <p>NEW</p>
              <button
                onClick={() => openModal("CREATE_COLLECTION")}
                className="-mt-1 rounded-md border-2 border-[#4B5563] p-1 py-0.5 transition-transform duration-200 active:scale-95"
              >
                <Plus className="w-2" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Listbox value={collection} onChange={setCollection}>
              <Listbox.Button className="text-case-inherit letter-space-inherit flex h-10 w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-shadow duration-200 hover:border-gray-900 hover:ring-1 hover:ring-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:ring-gray-600 sm:h-12 sm:px-5">
                <div className="flex items-center">
                  <span className="ltr:mr-2 rtl:ml-2">
                    <Image
                      src={collection.coverImage}
                      alt=""
                      className="h-[20px] w-auto"
                    />
                  </span>
                  {collection.name}
                </div>
                <ChevronDown />
              </Listbox.Button>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute left-0 z-10 mt-1 grid w-full origin-top-right gap-0.5 rounded-lg border border-gray-200 bg-white p-1 shadow-large outline-none dark:border-gray-700 dark:bg-gray-800 xs:p-2">
                  {CollectionOptions.map((option) => (
                    <Listbox.Option key={option.id} value={option}>
                      {({ selected }) => (
                        <div
                          className={`flex cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-900 transition dark:text-gray-100  ${
                            selected
                              ? "bg-gray-200/70 font-medium dark:bg-gray-600/60"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700/70"
                          }`}
                        >
                          <span className="ltr:mr-2 rtl:ml-2">
                            <Image
                              src={option.coverImage}
                              alt=""
                              className="h-[20px] w-auto"
                            />
                          </span>
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

        {/* External link */}
        <div className="mb-8">
          <InputLabel
            title="External Preview link"
            subTitle="We will include a link to this URL on this item's detail page, so that users can click to learn more about it."
          />
          <Input type="text" placeholder="https://yoursite.io/anything/123" />
        </div>

        {/* Description */}
        <div className="mb-8">
          <InputLabel
            title="Description"
            subTitle="The description will be included on the item's detail page underneath its image."
          />
          <Textarea placeholder="Provide a detailed description of your item" />
        </div>

        {/* Resaleable */}
        <div className="mb-3">
          <ToggleBar
            title="Resaleable"
            subTitle="Allow owner resell this RYTU so you can earn royalties from the resale"
            icon={<TagIcon className="h-[20px]" />}
            checked={resaleable}
            onChange={() => setResaleable(!resaleable)}
          >
            {resaleable && (
              <Input
                placeholder="Specify your royalty percentage on resell eg. 2"
                className="relative"
                suffix="%"
                suffixClassName="text-red-500 text-sm font-medium absolute top-auto bottom-3 end-5 dark:text-gray-100"
              />
            )}
          </ToggleBar>
        </div>

        {/* Unlockable content */}
        <div className="mb-3">
          <ToggleBar
            title="Unlockable Content"
            subTitle="Include unlockable content that can only be revealed by the owner of the item."
            icon={<Unlocked />}
            checked={unlocked}
            onChange={() => setUnlocked(!unlocked)}
          >
            {unlocked && (
              <Textarea placeholder="Enter content (access key, code to redeem, link to a file, etc.)" />
            )}
          </ToggleBar>
        </div>

        {/* Explicit content */}
        <div className="mb-8">
          <ToggleBar
            title="Explicit &amp; Sensitive Content"
            subTitle="Set this item as explicit and sensitive content"
            icon={<Warning />}
            checked={explicit}
            onChange={() => setExplicit(!explicit)}
          />
        </div>

        {/* Supply */}
        <div className="mb-12">
          <InputLabel
            title="Supply"
            subTitle="The number of items that can be minted."
            important
          />
          <Input
            type="number"
            placeholder="eg. 5"
            inputClassName="spin-button-hidden"
            min={1}
          />
        </div>

        {/* Visibility */}
        <div className="mb-12">
          <InputLabel
            title="Visibility"
            subTitle="Allowed this RYTU to appear on explorer for buyers to see"
            important
          />
          <SimpleSelect
            selectData={visibilityOptions}
            selection={visibility}
            onChange={setVisibility}
          />
        </div>

        {/* Explorer Choice */}
        <div className="mb-12">
          <InputLabel
            title="Media Explorer"
            subTitle="Specify what explorer to use by selecting media type you uploaded?"
            important
          />
          <SimpleSelect
            selectData={explorerOptions}
            selection={explorerSelection}
            onChange={setExplorerSelection}
          />
        </div>

        <div className="flex items-center justify-between gap-4 mb-8 border-[.5px] border-brand p-4">
          <InputLabel
            title="Advanced Settings"
            subTitle="Only change settings if you know what you are doing."
          />
          <div className="shrink-0">
            <Switch checked={publish} onChange={() => setPublish(!publish)}>
              <div
                className={cn(
                  publish
                    ? "bg-brand dark:!bg-white"
                    : "bg-gray-200 dark:bg-gray-700",
                  "relative inline-flex h-[22px] w-10 items-center rounded-full transition-colors duration-300"
                )}
              >
                <span
                  className={cn(
                    publish
                      ? "bg-white ltr:translate-x-5 rtl:-translate-x-5 dark:bg-light-dark"
                      : "bg-white ltr:translate-x-0.5 rtl:-translate-x-0.5 dark:bg-light-dark",
                    "inline-block h-[18px] w-[18px] transform rounded-full bg-white transition-transform duration-200"
                  )}
                />
              </div>
            </Switch>
          </div>
        </div>

        {/* Publish on marketplace */}
        <div className="mb-8 mt-4">
          {publish && (
            <div>
              <InputLabel
                title="Put on marketplace"
                subTitle="Enter price to allow users instantly purchase your NFT"
              />
              <PriceType value={priceType} onChange={setPriceType} />
            </div>
          )}
        </div>

        {/* Blockchain */}
        {publish && (
          <div className="mb-8">
            <InputLabel title="Blockchain" />
            <div className="relative">
              <Listbox value={blockchain} onChange={setBlockChain}>
                <Listbox.Button className="text-case-inherit letter-space-inherit flex h-10 w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-shadow duration-200 hover:border-gray-900 hover:ring-1 hover:ring-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:ring-gray-600 sm:h-12 sm:px-5">
                  <div className="flex items-center">
                    <span className="ltr:mr-2 rtl:ml-2">{blockchain.icon}</span>
                    {blockchain.name}
                  </div>
                  <ChevronDown />
                </Listbox.Button>
                <Transition
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute left-0 z-10 mt-1 grid w-full origin-top-right gap-0.5 rounded-lg border border-gray-200 bg-white p-1 shadow-large outline-none dark:border-gray-700 dark:bg-gray-800 xs:p-2">
                    {BlockchainOptions.map((option) => (
                      <Listbox.Option key={option.id} value={option}>
                        {({ selected }) => (
                          <div
                            className={`flex cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-900 transition dark:text-gray-100  ${
                              selected
                                ? "bg-gray-200/70 font-medium dark:bg-gray-600/60"
                                : "hover:bg-gray-100 dark:hover:bg-gray-700/70"
                            }`}
                          >
                            <span className="ltr:mr-2 rtl:ml-2">
                              {option.icon}
                            </span>
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
        )}
      </div>

      <div className="flex items-center justify-center gap-10">
        <Button onClick={() => updateRytuStepper(1)}>Prev</Button>
        <div>
          {!result?.ipfsCID && (
            <Button onClick={() => updateRytuStepper(3)}>Next</Button>
          )}
        </div>
      </div>
    </>
  );
}
