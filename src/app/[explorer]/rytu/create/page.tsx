import Preview from "@/components/create-rytu/rytu-preview-btn";
import CreateStepper from "@/components/create-rytu/create-stepper";
import RYTUPreview from "@/components/create-rytu/rytu-preview";

export default function RytuDetailsPage() {
  return (
    <>
      <div className="mx-auto w-full sm:pt-0 lg:px-8 xl:px-10 2xl:px-0">
        <div className="mb-6 grid grid-cols-3 gap-12 sm:mb-10">
          <div className="col-span-3 flex items-center justify-between lg:col-span-2">
            <h2 className="text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white  sm:text-2xl">
              Create New RYTU
            </h2>
            <Preview />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CreateStepper />
          </div>

          <div className="hidden lg:flex justify-center items-center fixed top-0 right-0 w-1/3 h-full p-[2%] lg:pl[4%] flex-col">
            <RYTUPreview />
          </div>
        </div>
      </div>
    </>
  );
}
