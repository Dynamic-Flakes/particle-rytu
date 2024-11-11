import InputLabel from "@/components/shared/input-label";
import Button from "@/components/shared/button";
import FileInput from "@/components/shared/file-input";
import Input from "@/components/shared/forms/input";
import { useState } from "react";
import applyDelay from "@/utils/use-delay";

export default function CreateCollection() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string | null>(null);

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    console.log("attempting to change file", file);
    if (!file) return;

    setFile(file);
  }

  async function submitForm() {
    setIsUploading(true);
    console.log("submitForm", name, file);
    await applyDelay(2000);
    setIsUploading(false);
  }

  return (
    <>
      <div className="relative flex flex-grow flex-col overflow-hidden rounded-lg bg-white p-4 shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark md:p-8">
        <div className="flex pb-2 mb-8 text-xl uppercase border-brand border-b-[1px]">
          Create Collection
        </div>
        <div className="" onClick={(e) => e.stopPropagation()}>
          <div className="mb-8">
            <InputLabel title="Collection Cover Image" important />

            <FileInput
              accept={["PNG", "JPG", "JPEG", "WEBP", "GIF"]}
              placeholderText={"PNG, JPG, JPEG, WEBP or GIF. Max 100mb."}
              onChange={handleFile}
              isBusy={isUploading}
            />
          </div>

          <div className="mb-8">
            <InputLabel title="Collection Name" important />
            <Input
              min={0}
              placeholder="Enter your collection name"
              inputClassName="spin-button-hidden"
              onChange={($event) => setName($event.target.value)}
            />
          </div>

          <div className="flex items-center justify-end gap-10">
            <Button onClick={submitForm}>Create</Button>
          </div>
        </div>
      </div>
    </>
  );
}
