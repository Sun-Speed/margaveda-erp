import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InstitutionForm from "../components/InstitutionForm";

import { getInstitutions } from "../services/institution.service";
import { createInstitution } from "../services/institution.service";

export default function AddInstitutionPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function handleCreate(formData) {
    try {
      setLoading(true);

      await createInstitution(formData);

      alert("Institution created successfully.");

      navigate("/app/institutions");
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to create institution.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Add Institution</h1>

        <p className="text-gray-500 mt-2">
          Create a new institution under your education group.
        </p>
      </div>

      <InstitutionForm onSubmit={handleCreate} loading={loading} />
    </div>
  );
}
