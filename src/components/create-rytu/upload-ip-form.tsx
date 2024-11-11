import PriceType from "@/components/create-rytu/price-types-props";
import FileInput from "@/components/shared/file-input";
import InputLabel from "@/components/shared/input-label";
import { Switch } from "@/components/shared/switch";
import cn from "@/utils/cn";
import { useEffect, useState } from "react";
import Button from "@/components/shared/button";
import { useModal } from "@/components/modal-views/context";
import { useIPStepper, useRYTUStepper } from "../modal-views/ip-silo-context";
import applyDelay from "@/utils/use-delay";
import { truncateHash } from "@/utils/truncate-hash";
import toast from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";
import crypto from "crypto";
import { useRYTUPreview } from "@/components/create-rytu/rytu-preview-context";
import Alert from "../shared/alert";
import { useConfirmDialog } from "../shared/dialog/confirm-dialog-context";

type MediaResult = {
  ipfsCID: string;
  fingerprint: string;
  hash: string;
};

export default function UploadIPForm() {
  let [publish, setPublish] = useState(true);
  let [priceType, setPriceType] = useState("fixed");
  const { openModal, closeModal } = useModal();
  const { updateSteps } = useIPStepper();
  const { updateRytuStepper } = useRYTUStepper();
  const { isConfirmed, onCancel, setDialogTitle } = useConfirmDialog();
  const { updatePreview, ipIpfsCID, hash, fingerprint, resetPreview } =
    useRYTUPreview();

  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = async (text: string, msg: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(msg ?? "Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy URL");
    }
  };

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Clear up");
      onCancel();
      closeModal();
    }
  }, [closeModal, isConfirmed, onCancel]);

  async function handleIPIndentification(file: File) {
    openModal("IP_SILO_STEPPER");
    try {
      const arrayBuffer = await file.arrayBuffer();

      const response = await fetch("/api/processMedia", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `attachment; filename="${file.name}"`,
          "X-Request-Type": "process-ip",
        },
        body: arrayBuffer,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: MediaResult = await response.json();
      setError(null);

      updatePreview({
        ipIpfsCID: data.ipfsCID,
        hash: data.hash,
        fingerprint: data.fingerprint,
      });

      steppingThrough();
    } catch (err: any) {
      console.error(err);
      setError("Failed to process the file");
      toast.success(err?.error ?? "Failed: Possibly unsupported file type");
      await applyDelay(500);
      closeModal();
    }
  }

  async function steppingThrough() {
    updateSteps(2, "generating figerprint...");
    await applyDelay(1000);
    updateSteps(2, "Hashing...");
    await applyDelay(1000);
    // Call API to save data
    updateSteps(3, "Saving to DB...");
    await applyDelay(5000);
    updateSteps(4, "Done!");
  }

  async function isAbandonedCheck(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    console.log("attempting to change file", file);
    if (!file) return;

    // Hash the file
    // const fileBuffer = Buffer.from(await file.arrayBuffer());
    // const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    // Call API to check if IP was abandoned
    // Make API call here to check

    // If not abandoned, proceed with upload and hashing
    handleIPIndentification(file);
  }

  function handleConfirmationRequest() {
    setDialogTitle(
      "Are you sure you want to start all over? Your file will be be deleted!"
    );
    openModal("CONFIRMATION_DIALOG");
  }

  return (
    <>
      <div className="lg:col-span-2 mt-10">
        {!hash && (
          <div className="mb-8">
            <InputLabel title="Upload file" important />

            <FileInput
              onChange={isAbandonedCheck}
              placeholderText={`Upload Music, Video, Research, or Code. Max 400mb.`}
            />
          </div>
        )}

        {hash && (
          <div className="mb-8">
            <Alert>
              <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-bg">
                IP/Content Identifcation Complete
              </h4>
              <p className="m-0 text-sm leading-relaxed tracking-tighter text-gray-600 dark:text-bg">
                Your IP/Content has been successfully identified to be unique
                and uploaded to the IP Silo. Either the hash or the audio
                fingerprint can be used for verification of ownership. To remove
                this IP/Content from the Silo, click{" "}
                <span
                  className="cursor-pointer hover:underline text-[var(--color-hint)]"
                  onClick={handleConfirmationRequest}
                >
                  Start Over
                </span>
              </p>
            </Alert>
          </div>
        )}

        {hash && (
          <div className="flex flex-col gap-4 mb-8 mt-4">
            {ipIpfsCID && (
              <div className="flex items-center break-all">
                IPFS cid:
                <span className="block px-2 py-1 ml-1">
                  {truncateHash(`${ipIpfsCID}`, 20)}
                </span>
              </div>
            )}
            {fingerprint && (
              <div className="flex items-center break-all">
                FingerPrint:{" "}
                <span className="block px-2 py-1 ml-1">
                  {truncateHash(`${fingerprint}`, 20)}
                </span>
              </div>
            )}
            {hash && (
              <div
                className="flex items-center break-all cursor-pointer"
                onClick={() => copyToClipboard(`${hash}`, "Copied Hash")}
              >
                Hash:{" "}
                <span className="block px-2 py-1 ml-1">
                  {truncateHash(`${hash}`, 20)}
                </span>
                <span className="text-[20px]">
                  <IoCopyOutline />
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-center gap-10">
          {/* <Button onClick={resetPreview}>Start Over</Button> */}
          <Button onClick={() => updateRytuStepper(1)}>Next</Button>
        </div>
      </div>
    </>
  );
}
