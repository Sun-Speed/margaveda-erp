import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSetup } from "@/contexts/SetupContext";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

const organizationTypes = [
  { value: "SCHOOL", label: "School" },
  { value: "PU_COLLEGE", label: "PU College" },
  { value: "DEGREE_COLLEGE", label: "Degree College" },
  { value: "UNIVERSITY", label: "University" },
  { value: "ACADEMY", label: "Academy" },
  { value: "SKILL_CENTER", label: "Skill Center" },
  { value: "OTHER", label: "Other" },
];

export default function OrganizationInfoPage() {
  const navigate = useNavigate();

  const { setupData, updateSection } = useSetup();

  const { customer, organization } = setupData;

  useEffect(() => {
    if (customer.type === "SINGLE" && customer.name && !organization.name) {
      updateSection("organization", {
        name: customer.name,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateSection("organization", {
      [name]: value,
    });
  };

  const generateCode = () => {
    if (!organization.name) return;

    const words = organization.name.trim().split(" ");

    let code = "";

    if (words.length === 1) {
      code = words[0].substring(0, 3);
    } else {
      code = words.map((word) => word[0]).join("");
    }

    updateSection("organization", {
      code: code.toUpperCase(),
    });
  };

  const validate = () => {
    return (
      organization.name.trim() !== "" &&
      organization.code.trim() !== "" &&
      organization.type !== ""
    );
  };

  const next = () => {
    if (!validate()) {
      alert("Please complete all required fields.");
      return;
    }

    navigate("/setup/admin");
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold">Organization Information</h2>

        <p className="text-gray-500 mt-2">Configure your first institution.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Input
            label="Organization Name"
            name="name"
            value={organization.name}
            onChange={handleChange}
            placeholder="Enter organization name"
          />

          <div className="flex flex-col gap-2">
            <label className="font-medium">Organization Type</label>

            <select
              name="type"
              value={organization.type}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>

              {organizationTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                label="Organization Code"
                name="code"
                value={organization.code}
                onChange={handleChange}
                placeholder="ABC"
              />
            </div>

            <div className="flex items-end">
              <Button type="button" variant="secondary" onClick={generateCode}>
                Generate
              </Button>
            </div>
          </div>

          <Input
            label="Organization Email"
            name="email"
            type="email"
            value={organization.email}
            onChange={handleChange}
            placeholder="college@email.com"
          />

          <Input
            label="Organization Phone"
            name="phone"
            value={organization.phone}
            onChange={handleChange}
            placeholder="+91"
          />

          <Input
            label="Address"
            name="address"
            value={organization.address}
            onChange={handleChange}
            placeholder="Enter Address"
          />
        </div>

        <div className="flex justify-between mt-10">
          <Button
            variant="secondary"
            onClick={() => navigate("/setup/customer")}
          >
            Previous
          </Button>

          <Button onClick={next}>Continue</Button>
        </div>
      </Card>
    </div>
  );
}
