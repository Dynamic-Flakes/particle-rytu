import { useState } from "react";
import Button from "@/components/shared/button";
import InputLabel from "@/components/shared/input-label";
import SimpleSelect from "@/components/shared/simple-select";
import Input from "@/components/shared/forms/input";
import Textarea from "@/components/shared/forms/textarea";

import { useRYTUStepper } from "@/components/modal-views/ip-silo-context";

const licenseTypes = [{ id: 1, name: "Apache License 2.0" }];
const durationTypes = [
  { id: 1, name: "years" },
  { id: 2, name: "months" },
  { id: 3, name: "days" },
];
export default function LicenseOwnershipForm() {
  const { updateRytuStepper } = useRYTUStepper();
  let [licenseSelection, setLicenseSelection] = useState(licenseTypes[0]);
  let [durationTypeSelection, setDurationTypeSelection] = useState(
    durationTypes[0]
  );

  return (
    <>
      <div className="mx-auto w-full py-4 lg:px-8 xl:px-10 2xl:px-0">
        {/* License Type */}
        <div className="mb-12">
          <InputLabel title="License Type" important />
          <SimpleSelect
            selectData={licenseTypes}
            selection={licenseSelection}
            onChange={setLicenseSelection}
          />
        </div>

        {/* License Duration */}
        <div className="mb-12">
          <InputLabel title="License Duration" important />
          <div className="flex gap-4 w-full">
            <Input
              min={0}
              type="number"
              placeholder="How long should this license be valid?"
              inputClassName="spin-button-hidden"
              className="relative flex-grow"
            />
            <SimpleSelect
              selectData={durationTypes}
              selection={durationTypeSelection}
              onChange={setDurationTypeSelection}
            />
          </div>
        </div>

        {/* Usage Restrictions */}
        <div className="mb-8">
          <InputLabel
            title="Usage Restrictions"
            subTitle="Provide any usage restrictions you would like to include in this license."
          />
          <Textarea placeholder="Provide a detailed description of your item" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        <Button onClick={() => updateRytuStepper(2)}>Prev</Button>
        <Button onClick={() => {}}>Submit</Button>
      </div>
    </>
  );
}
