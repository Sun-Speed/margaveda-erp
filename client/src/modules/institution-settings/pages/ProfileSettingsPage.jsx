import { useEffect, useState } from "react";

import { useInstitution } from "../../../contexts/InstitutionContext";

import {
  getInstitutionProfile,
  updateInstitutionProfile,
} from "../services/institutionProfile.service";

import { updateInstitution } from "../../institutions/services/institution.service";
import SettingsCard from "../components/SettingsCard";

const ProfileSettingsPage = () => {
  const { institutionId } = useInstitution();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    // Institution Details
    name: "",
    code: "",
    email: "",
    phone: "",
    website: "",
    principalName: "",
    type: "",
    establishedYear: "",
    address: "",

    // Institution Profile
    shortName: "",
    registrationNumber: "",
    affiliatedUniversity: "",
    accreditation: "",
    description: "",
  });

  useEffect(() => {
    if (institutionId) {
      loadProfile();
    }
  }, [institutionId]);

  const loadProfile = async () => {
    try {
      setLoading(true);

      const response = await getInstitutionProfile(institutionId);

      console.log("my data", response);

      const { organization, profile } = response.data;

      setForm({
        name: organization?.name || "",
        code: organization?.code || "",
        email: organization?.email || "",
        phone: organization?.phone || "",
        website: organization?.website || "",
        principalName: organization?.principalName || "",
        type: organization?.type || "",
        establishedYear: organization?.establishedYear || "",
        address: organization?.address || "",

        shortName: profile?.shortName || "",
        registrationNumber: profile?.registrationNumber || "",
        affiliatedUniversity: profile?.affiliatedUniversity || "",
        accreditation: profile?.accreditation || "",
        description: profile?.description || "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const organizationData = {
        name: form.name,
        code: form.code,
        email: form.email,
        phone: form.phone,
        website: form.website,
        principalName: form.principalName,
        type: form.type,
        establishedYear: form.establishedYear,
        address: form.address,
      };

      const profileData = {
        shortName: form.shortName,
        registrationNumber: form.registrationNumber,
        affiliatedUniversity: form.affiliatedUniversity,
        accreditation: form.accreditation,
        description: form.description,
      };

      await Promise.all([
        updateInstitution(institutionId, organizationData),
        updateInstitutionProfile(institutionId, profileData),
      ]);

      alert("Institution profile updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to update institution profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <SettingsCard title="Institution Profile" description="Loading...">
        <div className="py-12 text-center">Loading institution profile...</div>
      </SettingsCard>
    );
  }

  return (
    <SettingsCard
      title="Institution Profile"
      description="Manage your institution profile information."
    >
      {/* ================= Institution Information ================= */}
      <div className="mb-10">
        <h3 className="mb-6 text-lg font-semibold">Institution Information</h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Institution Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Institution Code
            </label>

            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Phone</label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Website</label>

            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Principal Name
            </label>

            <input
              name="principalName"
              value={form.principalName}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Institution Type
            </label>

            <input
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Established Year
            </label>

            <input
              type="number"
              name="establishedYear"
              value={form.establishedYear}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">Address</label>

            <textarea
              rows={3}
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full rounded-lg border p-4"
            />
          </div>
        </div>
      </div>

      {/* ================= Profile Information ================= */}
      <div>
        <h3 className="mb-6 text-lg font-semibold">Profile Information</h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Short Name</label>

            <input
              name="shortName"
              value={form.shortName}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Registration Number
            </label>

            <input
              name="registrationNumber"
              value={form.registrationNumber}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Affiliated University
            </label>

            <input
              name="affiliatedUniversity"
              value={form.affiliatedUniversity}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Accreditation
            </label>

            <input
              name="accreditation"
              value={form.accreditation}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-lg border p-4"
            />
          </div>
        </div>
      </div>

      {/* ================= Actions ================= */}
      <div className="mt-10 flex justify-end gap-3">
        <button
          type="button"
          className="rounded-lg border px-6 py-3 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </SettingsCard>
  );
};

export default ProfileSettingsPage;
