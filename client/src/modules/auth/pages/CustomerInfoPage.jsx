import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSetup } from "@/contexts/SetupContext";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function CustomerInfoPage() {
  const navigate = useNavigate();

  const { setupData, updateSection } = useSetup();

  const customer = setupData.customer;

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateSection("customer", {
      [name]: value,
    });
  };

  useEffect(() => {
    if (!customer.name) return;

    const slug = customer.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    updateSection("customer", {
      slug,
    });
  }, [customer.name]);

  const validate = () => {
    return (
      customer.name.trim() !== "" &&
      customer.email.trim() !== "" &&
      customer.phone.trim() !== ""
    );
  };

  const next = () => {
    if (!validate()) {
      alert("Please fill all required fields.");

      return;
    }

    navigate("/setup/organization");
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold">Customer Information</h2>

        <p className="text-gray-500 mt-2">
          Enter your education group or institution details.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Input
            label={
              customer.type === "GROUP"
                ? "Education Group Name"
                : "Institution Name"
            }
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />

          <Input
            label="Slug"
            name="slug"
            value={customer.slug}
            onChange={handleChange}
            placeholder="Auto Generated"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
          />

          <Input
            label="Phone"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="+91"
            required
          />

          <Input
            label="Website"
            name="website"
            value={customer.website}
            onChange={handleChange}
            placeholder="https://"
          />

          <Input
            label="Country"
            name="country"
            value={customer.country}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between mt-10">
          <Button variant="secondary" onClick={() => navigate("/setup/type")}>
            Previous
          </Button>

          <Button onClick={next}>Continue</Button>
        </div>
      </Card>
    </div>
  );
}
