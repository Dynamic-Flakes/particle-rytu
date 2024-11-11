"use client";
import AuthorImage from "@/assets/images/author.jpg";
import Image from "@/components/shared/image";
import Avatar from "@/components/shared/avatar";
import InputLabel from "@/components/shared/input-label";

import { useRYTUPreview } from "@/components/create-rytu/rytu-preview-context";

export default function RYTUPreview() {
  const { name, imageUrl, price, currency, id } = useRYTUPreview();

  return (
    <>
      <div className="hidden xl:w-[80%] lg:flex flex-col">
        <InputLabel title="Preview" />
        <div className="relative flex flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark">
          <div className="flex items-center p-4 text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-400">
            <Avatar
              size="sm"
              image={AuthorImage}
              alt="davidodoh"
              className="border-white bg-gray-300 ltr:mr-3 rtl:ml-3 dark:bg-gray-400"
            />
            @davidodoh
          </div>
          <div className="relative block w-full">
            <Image src={imageUrl} width={700} height={700} alt={name} />
          </div>
          <div className="p-5">
            <div className="text-sm font-medium text-black dark:text-white">
              {name}
            </div>
            <div className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              {price} {currency}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
