import { useEffect, useState } from "react";
import { useInstitution } from "../../../../../contexts/InstitutionContext";
import toast from "react-hot-toast";
import { getAddress, updateAddress } from "../services/address.service";

import Button from "@/components/ui/Button";

const AddressPage = () => {
  const { institutionId } = useInstitution();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    area: "",
    country: "",
    state: "",
    district: "",
    city: "",
    taluk: "",
    pincode: "",
    officePhone: "",
    alternatePhone: "",
    fax: "",
    latitude: "",
    longitude: "",
    googleMapsUrl: "",
  });

  const loadAddress = async () => {
    try {
      setLoading(true);

      const response = await getAddress(institutionId);

      const address = response.data.address || {};

      setForm({
        addressLine1: address.addressLine1 ?? "",
        addressLine2: address.addressLine2 ?? "",
        landmark: address.landmark ?? "",
        area: address.area ?? "",
        country: address.country ?? "",
        state: address.state ?? "",
        district: address.district ?? "",
        city: address.city ?? "",
        taluk: address.taluk ?? "",
        pincode: address.pincode ?? "",
        officePhone: address.officePhone ?? "",
        alternatePhone: address.alternatePhone ?? "",
        fax: address.fax ?? "",
        latitude: address.latitude ?? "",
        longitude: address.longitude ?? "",
        googleMapsUrl: address.googleMapsUrl ?? "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (institutionId) {
      loadAddress();
    }
  }, [institutionId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setErrors({});

      await updateAddress(institutionId, form);

      toast.success("Address updated successfully.");
    } catch (error) {
      if (error.response?.data?.errors) {
        const validationErrors = {};

        error.response.data.errors.forEach((err) => {
          validationErrors[err.field] = err.message;
        });

        setErrors(validationErrors);
      }

      toast.error(error.response?.data?.message || "Failed to update address.");
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-8">
          Address Information
        </h2>

        {/* Grid Layout with logical grouping */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <FormInput
              label="Address Line 1"
              name="addressLine1"
              value={form.addressLine1}
              onChange={handleChange}
              error={errors.addressLine1}
            />
          </div>

          <div className="col-span-2">
            <FormInput
              label="Address Line 2"
              name="addressLine2"
              value={form.addressLine2}
              onChange={handleChange}
              error={errors.addressLine2}
            />
          </div>

          <FormInput
            label="City"
            name="city"
            value={form.city}
            onChange={handleChange}
            error={errors.city}
          />

          <FormInput
            label="District"
            name="district"
            value={form.district}
            onChange={handleChange}
            error={errors.district}
          />

          <FormInput
            label="State"
            name="state"
            value={form.state}
            onChange={handleChange}
            error={errors.state}
          />

          <FormInput
            label="Pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            error={errors.pincode}
          />

          <FormInput
            label="Taluk"
            name="taluk"
            value={form.taluk}
            onChange={handleChange}
            error={errors.taluk}
          />

          <FormInput
            label="Area"
            name="area"
            value={form.area}
            onChange={handleChange}
            error={errors.area}
          />

          <FormInput
            label="Landmark"
            name="landmark"
            value={form.landmark}
            onChange={handleChange}
            error={errors.landmark}
          />

          <FormInput
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
            error={errors.country}
          />

          <div className="col-span-2 pt-4 border-t border-white/5 mt-4">
            <h3 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-widest">
              Contact & Geolocation
            </h3>
          </div>

          <FormInput
            label="Office Phone"
            name="officePhone"
            value={form.officePhone}
            onChange={handleChange}
            error={errors.officePhone}
          />

          <FormInput
            label="Alternate Phone"
            name="alternatePhone"
            value={form.alternatePhone}
            onChange={handleChange}
            error={errors.alternatePhone}
          />

          <FormInput
            label="Latitude"
            name="latitude"
            value={form.latitude}
            onChange={handleChange}
            error={errors.latitude}
          />

          <FormInput
            label="Longitude"
            name="longitude"
            value={form.longitude}
            onChange={handleChange}
            error={errors.longitude}
          />

          <div className="col-span-2">
            <FormInput
              label="Google Maps URL"
              name="googleMapsUrl"
              value={form.googleMapsUrl}
              onChange={handleChange}
              error={errors.googleMapsUrl}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-8 py-3 bg-white text-black font-bold rounded-2xl hover:bg-blue-400 transition-all active:scale-95"
        >
          {saving ? "Saving..." : "Save Address"}
        </button>
      </div>
    </div>
  );
};

const FormInput = ({ label, error, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">
      {label}
    </label>

    <input
      {...props}
      className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-300
            ${
              error
                ? "border border-red-500 bg-[#0A0A0A] text-white"
                : "border border-white/10 bg-[#0A0A0A] text-white focus:border-blue-500"
            }`}
    />

    {error && <p className="text-red-500 text-xs pl-1">{error}</p>}
  </div>
);

export default AddressPage;
