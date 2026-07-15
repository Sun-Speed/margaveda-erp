import { useNavigate } from "react-router-dom";

import { useSetup } from "@/contexts/SetupContext";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function OrganizationTypePage() {
  const navigate = useNavigate();

  const { setupData, updateSection } = useSetup();

  const selectType = (type) => {
    updateSection("customer", {
    type,
});
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold">Select Organization Type</h2>

        <p className="text-gray-500 mt-2">
          Choose how you want to use MargaVeda ERP.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <div
            onClick={() => selectType("SINGLE")}
            className={`
                            border
                            rounded-xl
                            p-6
                            cursor-pointer
                            transition

                            ${
                              setupData.customer.type === "SINGLE"
                                ? "border-blue-600 bg-blue-50"
                                : ""
                            }
                        `}
          >
            <h3 className="font-bold text-xl">Single Institution</h3>

            <p className="mt-2 text-gray-500">
              One School, College, Academy, University.
            </p>
          </div>

          <div
            onClick={() => selectType("GROUP")}
            className={`
                            border
                            rounded-xl
                            p-6
                            cursor-pointer
                            transition

                            ${
                              setupData.customer.type === "GROUP"
                                ? "border-blue-600 bg-blue-50"
                                : ""
                            }
                        `}
          >
            <h3 className="font-bold text-xl">Education Group</h3>

            <p className="mt-2 text-gray-500">
              Multiple Institutions under one management.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-10">
          <Button
            onClick={() => navigate("/setup/customer")}
            disabled={!setupData.customer.type}
          >
            Continue
          </Button>
        </div>
      </Card>
    </div>
  );
}
