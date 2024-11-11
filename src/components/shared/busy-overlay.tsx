import ProcessingSVG from "./busy-icon";

export default function ProcessingOverlay() {
  return (
    <div className="flex justify-center items-center absolute z-50 top-0 left-0 w-full h-full cursor-progress bg-opacity-50 bg-white dark:bg-black dark:bg-opacity-30">
      <div className="w-[50px] h-[50px]">
        <ProcessingSVG />
      </div>
    </div>
  );
}
