import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSetup } from "@/contexts/SetupContext";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import { createERP } from "../services/setup.service";

export default function ReviewPage() {
  const navigate = useNavigate();

  const { setupData } = useSetup();

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);

      const payload = {
        customer: setupData.customer,

        organization: setupData.organization,

        admin: {
          firstName: setupData.admin.firstName,
          lastName: setupData.admin.lastName,
          email: setupData.admin.email,
          phone: setupData.admin.phone,
          password: setupData.admin.password,
        },
      };

      const response = await createERP(payload);

      alert(response.message);

      console.log(response);

      // Login page later
    } catch (error) {
      alert(error?.response?.data?.message || "ERP Creation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold">Review</h2>

        <p className="text-gray-500 mt-2">
          Verify everything before creating your ERP.
        </p>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-bold text-xl">Customer</h3>

            <p>Name : {setupData.customer.name}</p>

            <p>Type : {setupData.customer.type}</p>

            <p>Email : {setupData.customer.email}</p>

            <p>Phone : {setupData.customer.phone}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Organization</h3>

            <p>Name : {setupData.organization.name}</p>

            <p>Type : {setupData.organization.type}</p>

            <p>Code : {setupData.organization.code}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Founder</h3>

            <p>
              {setupData.admin.firstName} {setupData.admin.lastName}
            </p>

            <p>{setupData.admin.email}</p>

            <p>{setupData.admin.phone}</p>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <Button
            variant="secondary"
            onClick={() => navigate("/setup/founder")}
          >
            Previous
          </Button>

          <Button onClick={submit} disabled={loading}>
            {loading ? "Creating ERP..." : "Create ERP"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
