import { useEffect, useState } from "react";
import { useInstitution } from "../../../../contexts/InstitutionContext";

import FileUploadCard from "../components/FileUploadCard";

import { getIdentity, updateIdentity } from "../services/identity.service";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const IdentityPage = () => {
  const { institutionId } = useInstitution();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    website: "",
    officialEmail: "",
    officialPhone: "",
    tagline: "",
    motto: "",
    receiptFooter: "",
  });

  const [images, setImages] = useState({
    logo: null,
    collegeSeal: null,
    principalSignature: null,
    letterHead: null,
    watermark: null,
  });

  const [preview, setPreview] = useState({
    logo: "",
    collegeSeal: "",
    principalSignature: "",
    letterHead: "",
    watermark: "",
  });

  

  useEffect(() => {

    if (institutionId) {

        loadIdentity();

    }

}, [institutionId]);

  const loadIdentity = async () => {

    try {

        setLoading(true);

        const response = await getIdentity(institutionId);

        const identity = response.data.identity || {};

        setForm({
            website: identity.website ?? "",
            officialEmail: identity.officialEmail ?? "",
            officialPhone: identity.officialPhone ?? "",
            tagline: identity.tagline ?? "",
            motto: identity.motto ?? "",
            receiptFooter: identity.receiptFooter ?? "",
        });

        setPreview({
            logo: identity.logo
                ? `${API_URL}/${identity.logo}`
                : "",

            collegeSeal: identity.collegeSeal
                ? `${API_URL}/${identity.collegeSeal}`
                : "",

            principalSignature: identity.principalSignature
                ? `${API_URL}/${identity.principalSignature}`
                : "",

            letterHead: identity.letterHead
                ? `${API_URL}/${identity.letterHead}`
                : "",

            watermark: identity.watermark
                ? `${API_URL}/${identity.watermark}`
                : "",
        });

    } catch (error) {

        console.error(error);

    } finally {

        setLoading(false);

    }

};

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) {

        setImages(prev => ({
            ...prev,
            [e.target.name]: null,
        }));

        setPreview(prev => ({
            ...prev,
            [e.target.name]: "",
        }));

        return;
    }

    setImages(prev => ({
        ...prev,
        [e.target.name]: file,
    }));

    if (file.type.startsWith("image/")) {

        setPreview(prev => ({
            ...prev,
            [e.target.name]: URL.createObjectURL(file),
        }));

    } else {

        setPreview(prev => ({
            ...prev,
            [e.target.name]: file.name,
        }));

    }

};

  const handleSave = async () => {
    try {
      setSaving(true);

      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      Object.keys(images).forEach((key) => {
        if (images[key]) {
          formData.append(key, images[key]);
        }
      });

      await updateIdentity(institutionId, formData);

      alert("Identity updated successfully.");
    } catch (err) {
      console.log(err);

      alert("Update failed.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {

    return (
        <div className="p-8 text-center">
            Loading Institution Identity...
        </div>
    );

}

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <FileUploadCard
          title="Institution Logo"
          name="logo"
          preview={preview.logo}
          onChange={handleImage}
        />

        <FileUploadCard
          title="College Seal"
          name="collegeSeal"
          preview={preview.collegeSeal}
          onChange={handleImage}
        />

        <FileUploadCard
          title="Principal Signature"
          name="principalSignature"
          preview={preview.principalSignature}
          onChange={handleImage}
        />

        <FileUploadCard
          title="Letter Head"
          name="letterHead"
          preview={preview.letterHead}
          onChange={handleImage}
        />

        <FileUploadCard
          title="Watermark"
          name="watermark"
          preview={preview.watermark}
          onChange={handleImage}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="Website"
          className="border rounded-lg p-3"
        />

        <input
          name="officialEmail"
          value={form.officialEmail}
          onChange={handleChange}
          placeholder="Official Email"
          className="border rounded-lg p-3"
        />

        <input
          name="officialPhone"
          value={form.officialPhone}
          onChange={handleChange}
          placeholder="Official Phone"
          className="border rounded-lg p-3"
        />

        <input
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
          placeholder="Tagline"
          className="border rounded-lg p-3"
        />
      </div>

      <textarea
        name="motto"
        value={form.motto}
        onChange={handleChange}
        placeholder="Institution Motto"
        rows={3}
        className="w-full border rounded-lg p-3"
      />

      <textarea
        name="receiptFooter"
        value={form.receiptFooter}
        onChange={handleChange}
        placeholder="Receipt Footer"
        rows={4}
        className="w-full border rounded-lg p-3"
      />

      <button
        onClick={handleSave}
        disabled={saving}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white"
      >
        {saving ? "Saving..." : "Save Identity"}
      </button>
    </div>
  );
};

export default IdentityPage;
