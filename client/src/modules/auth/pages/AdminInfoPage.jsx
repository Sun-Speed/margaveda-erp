import { useNavigate } from "react-router-dom";

import { useSetup } from "@/contexts/SetupContext";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function FounderInfoPage() {
  const navigate = useNavigate();

  const { setupData, updateSection } = useSetup();

  const admin = setupData.admin;

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateSection("admin", {
      [name]: value,
    });
  };

  const validate = () => {
    if (
      !admin.firstName ||
      !admin.email ||
      !admin.phone ||
      !admin.password
    ) {
      alert("Please fill all required fields.");

      return false;
    }

    if (admin.password.length < 8) {
      alert("Password must be at least 8 characters.");

      return false;
    }

    if (admin.password !== admin.confirmPassword) {
      alert("Passwords do not match.");

      return false;
    }

    return true;
  };

  const next = () => {
    if (!validate()) return;

    navigate("/setup/review");
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold">Founder Information</h2>

        <p className="text-gray-500 mt-2">
          Create the first account that will manage your ERP.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Input
            label="First Name"
            name="firstName"
            value={admin.firstName}
            onChange={handleChange}
            required
          />

          <Input
            label="Last Name"
            name="lastName"
            value={admin.lastName}
            onChange={handleChange}
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone"
            name="phone"
            value={admin.phone}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={admin.password}
            onChange={handleChange}
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={admin.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {admin.confirmPassword && (
          <div className="mt-4">
            {admin.password === admin.confirmPassword ? (
              <p className="text-green-600">✓ Passwords match</p>
            ) : (
              <p className="text-red-600">✗ Passwords do not match</p>
            )}
          </div>
        )}

        <div className="flex justify-between mt-10">
          <Button
            variant="secondary"
            onClick={() => navigate("/setup/organization")}
          >
            Previous
          </Button>

          <Button onClick={next}>Continue</Button>
        </div>
      </Card>
    </div>
  );
}
