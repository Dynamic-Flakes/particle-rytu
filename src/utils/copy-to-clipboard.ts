import toast from "react-hot-toast";

export const copyToClipboard = async (
  text: string,
  msg: string = "Copied to clipboard"
) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(msg ?? "Copied to clipboard");
  } catch (error) {
    toast.error("Failed to copy");
  }
};
