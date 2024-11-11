import { ForwardedRef, forwardRef } from "react";
import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";
import cn from "@/utils/cn";
import Button from "@/components/shared/button";

const acceptedFileType = {
  img: "image/*",
  pdf: "application/pdf",
  csv: "text/csv",
  imgAndPdf: "image/*,application/pdf",
  all: "image/*,application/pdf,text/csv,application/gzip,application/xml,application/zip,application/msword,text/plain",
};

export interface UploadProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "accept" | "children"
  > {
  accept: "img" | "pdf" | "csv" | "imgAndPdf" | "all";
  multiple?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  label?: React.ReactNode;
  placeholderText?: React.ReactNode;
  dropzoneRootProps?: DropzoneRootProps;
  dropzoneInputProps?: DropzoneInputProps;
  wrapperClassName?: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
}

const Upload = forwardRef<HTMLInputElement, UploadProps>(function Upload(
  {
    accept,
    children,
    label,
    dropzoneRootProps,
    dropzoneInputProps,
    placeholderText,
    className,
    wrapperClassName,
    iconClassName,
    labelClassName,
    ...props
  },
  ref
) {
  return (
    <div
      className={cn(
        "rounded-lg border border-solid border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-light-dark sm:p-6",
        wrapperClassName
      )}
    >
      <div
        className="relative flex h-48 items-center justify-center rounded-lg border border-dashed border-gray-200 dark:border-gray-700 p-[20px]"
        {...dropzoneRootProps}
      >
        <input
          ref={ref}
          title=""
          type="file"
          accept={acceptedFileType[accept]}
          className="absolute top-0 z-10 h-full w-full opacity-0 disabled:cursor-not-allowed "
          {...props}
          {...dropzoneInputProps}
        />
        {placeholderText || (
          <div className="text-center">
            <p className="mb-6 text-sm tracking-tighter text-gray-600 dark:text-gray-400">
              {placeholderText || "PNG, GIF, WEBP, MP4 or MP3. Max 100mb."}
            </p>
            <Button>CHOOSE FILE</Button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
});

Upload.displayName = "Upload";
export default Upload;
