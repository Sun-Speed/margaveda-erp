import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, ArrowLeft } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function InstitutionForm({
  initialValues = {},
  onSubmit,
  loading = false,
  isEdit = false,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: initialValues.name || "",
    code: initialValues.code || "",
    organizationType: initialValues.organizationType || "DEGREE_COLLEGE",
    email: initialValues.email || "",
    phone: initialValues.phone || "",
    website: initialValues.website || "",
    principalName: initialValues.principalName || "",
    establishedYear: initialValues.establishedYear || "",
    address: initialValues.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit(form);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Institution Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block mb-2 text-sm font-medium">
              Institution Type
            </label>

            <select
              name="organizationType"
              value={form.organizationType}
              onChange={handleChange}
              className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                bg-white
                                dark:bg-gray-800
                            "
            >
              <option value="SCHOOL">School</option>

              <option value="PU_COLLEGE">PU College</option>

              <option value="DEGREE_COLLEGE">Degree College</option>

              <option value="UNIVERSITY">University</option>

              <option value="ACADEMY">Academy</option>

              <option value="COACHING_CENTER">Coaching Center</option>

              <option value="SKILL_CENTER">Skill Center</option>

              <option value="OTHER">Other</option>
            </select>
          </div>

          <Input
            label="Institution Code"
            name="code"
            value={form.code}
            onChange={handleChange}
            required
          />

          <Input
            label="Official Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <Input
            label="Website"
            name="website"
            value={form.website}
            onChange={handleChange}
          />

          <Input
            label="Principal Name"
            name="principalName"
            value={form.principalName}
            onChange={handleChange}
          />

          <Input
            label="Established Year"
            name="establishedYear"
            type="number"
            value={form.establishedYear}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Address</label>

          <textarea
            rows={4}
            name="address"
            value={form.address}
            onChange={handleChange}
            className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            bg-white
                            dark:bg-gray-800
                        "
            required
          />
        </div>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Back
          </Button>

          <Button type="submit" disabled={loading}>
            <Save size={18} />

            {loading
              ? "Saving..."
              : isEdit
                ? "Update Institution"
                : "Create Institution"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
