import FileInput from "@/components/shared/file-input";
import InputLabel from "@/components/shared/input-label";

import { Tab, TabItem, TabPanel, TabPanels } from "@/components/shared/tab";
import Input from "@/components/shared/forms/input";
import { truncateHash } from "@/utils/truncate-hash";
import { useState } from "react";
import Button from "@/components/shared/button";
import { useRYTUStepper } from "@/components/modal-views/ip-silo-context";
import { useRYTUPreview } from "@/components/create-rytu/rytu-preview-context";

type MediaResult = {
  ipfsCID: string;
};
function UploadArtwork({ setResult }) {
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { updatePreview, ipIpfsCID, hash, fingerprint, resetPreview } =
    useRYTUPreview();

  async function handleArtworkUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setIsUploading(true);
    const file = event.target.files?.[0];
    console.log("attempting to change file", file);
    if (!file) return;

    try {
      const arrayBuffer = await file.arrayBuffer();

      const response = await fetch("/api/processMedia", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `attachment; filename="${file.name}"`,
          "X-Request-Type": "process-artwork",
        },
        body: arrayBuffer,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: MediaResult = await response.json();
      setResult(data);
      setError(null);
      setIsUploading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to process the file");
      setIsUploading(false);
    }
  }
  return (
    <div className="lg:col-span-2 mt-10">
      <div className="mb-8">
        <InputLabel title="Upload Artwork" important />

        <FileInput
          accept={["PNG", "JPG", "JPEG", "WEBP", "GIF"]}
          placeholderText={"PNG, JPG, JPEG, WEBP or GIF. Max 100mb."}
          onChange={handleArtworkUpload}
          isBusy={isUploading}
        />
      </div>
    </div>
  );
}
function AIGenerateArtwork() {
  return (
    <div className="lg:col-span-2 mt-10">
      <div className="mb-8">
        <InputLabel title="Generate with AI with prompt or file" important />

        <Input
          placeholder="Generate with AI"
          inputClassName="spin-button-hidden"
        />
      </div>
    </div>
  );
}
export default function ArtworkForm() {
  const { updateRytuStepper } = useRYTUStepper();
  const [result, setResult] = useState<MediaResult | null>(null);
  const { updatePreview } = useRYTUPreview();

  function handleData(data: MediaResult) {
    console.log("updatePreview", data);
    if (!data.ipfsCID) {
      console.error("No IPFS CID returned");
      return;
    }
    updatePreview({
      imageUrl: `https://gateway.pinata.cloud/ipfs/${data.ipfsCID}`,
    });
    setResult(data);
    updateRytuStepper(2); // move to next step
  }
  const tabItemClassName =
    "flex-1 justify-center capitalize text-gray-600 [&>span:first-child]:relative [&>span:first-child]:z-10 [&>span:first-child]:justify-center [&>span:first-child]:px-5 [&>span:first-child]:text-gray-900 [&>span:first-child]:dark:text-white [&>span:nth-of-type(2)]:top-1.5 [&>span:nth-of-type(2)]:z-0 [&>span:nth-of-type(2)]:h-[calc(100%-12px)] [&>span:nth-of-type(2)]:bg-white [&>span:nth-of-type(2)]:shadow-md [&>span:nth-of-type(2)]:dark:bg-light-dark [&>span:only-child]:text-gray-600 [&>span:only-child]:dark:text-gray-300 [&>span]:overflow-hidden [&>span]:rounded-full whitespace-nowrap";

  return (
    <>
      <Tab.Group className="mt-10">
        <Tab.List className="relative gap-0 mx-auto flex h-13 max-w-[460px] justify-between rounded-full bg-gray-100 px-1.5 text-sm dark:bg-[#0C0F19] dark:shadow-2xl min-[399px]:justify-start md:gap-6 2xl:gap-10">
          <TabItem
            tabItemLayoutId="nestedTabHandle"
            className={tabItemClassName}
          >
            Upload Artwork
          </TabItem>
          <TabItem
            tabItemLayoutId="nestedTabHandle"
            className={tabItemClassName}
          >
            Generate Artwork
          </TabItem>
          {/* <span className="absolute inset-x-0 bottom-0 border border-gray-200"></span> */}
        </Tab.List>
        <TabPanels className="mt-4">
          <TabPanel className="focus:outline-none">
            <UploadArtwork setResult={handleData} />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <AIGenerateArtwork />
          </TabPanel>
        </TabPanels>
      </Tab.Group>

      {result?.ipfsCID && (
        <div className="flex flex-col gap-4 mb-8 mt-4">
          <div className="flex items-center break-all">
            IPFS cid:
            <span className="block px-2 py-1 ml-1">
              {truncateHash(result?.ipfsCID, 20)}
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-10">
        <Button onClick={() => updateRytuStepper(0)}>Prev</Button>
        <div>
          {!result?.ipfsCID && (
            <Button onClick={() => updateRytuStepper(2)}>Next</Button>
          )}
        </div>
      </div>
    </>
  );
}
