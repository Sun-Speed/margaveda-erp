import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getGeneral, updateGeneral } from "../services/general.service";

import GeneralCard from "../components/GeneralCard";
import GeneralSection from "../components/GeneralSection";

import FormInput from "../../academic/components/FormInput";
import FormSelect from "../../academic/components/FormSelect";
import FormSwitch from "../components/FormSwitch";
import WorkingDaysSelector from "../components/WorkingDaysSelector";

import { useInstitution } from "../../../../../contexts/InstitutionContext";

const GeneralPage = () => {
  const { institutionId } = useInstitution();

  const [loading, setLoading] = useState(true);

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    email: "",

    alternateEmail: "",

    phone: "",

    alternatePhone: "",

    website: "",

    openingTime: "",

    closingTime: "",

    weeklyHoliday: "SUNDAY",

    workingDays: [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ],

    language: "English",

    timezone: "Asia/Kolkata",

    dateFormat: "DD/MM/YYYY",

    timeFormat: "12_HOURS",

    currency: "INR",

    currencySymbol: "₹",

    studentPortal: true,

    teacherPortal: true,

    parentPortal: false,
  });

  useEffect(() => {
    if (!institutionId) {
      setLoading(false);
      return;
    }

    loadGeneral();
  }, [institutionId]);

  const loadGeneral = async () => {
    try {
      const data = await getGeneral(institutionId);

      setForm({
        email: data.email || "",
        alternateEmail: data.alternateEmail || "",
        phone: data.phone || "",
        alternatePhone: data.alternatePhone || "",
        website: data.website || "",
        openingTime: data.openingTime || "",
        closingTime: data.closingTime || "",
        weeklyHoliday: data.weeklyHoliday || "SUNDAY",
        workingDays: data.workingDays || [
          "MONDAY",
          "TUESDAY",
          "WEDNESDAY",
          "THURSDAY",
          "FRIDAY",
          "SATURDAY",
        ],
        language: data.language || "English",
        timezone: data.timezone || "Asia/Kolkata",
        dateFormat: data.dateFormat || "DD/MM/YYYY",
        timeFormat: data.timeFormat || "12_HOURS",
        currency: data.currency || "INR",
        currencySymbol: data.currencySymbol || "₹",
        studentPortal: data.studentPortal ?? true,
        teacherPortal: data.teacherPortal ?? true,
        parentPortal: data.parentPortal ?? false,
      });
    } catch {
      toast.error("Failed to load settings.");
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

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSwitch = (name) => {
    setForm((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSave = async () => {
    try {
      setErrors({});

      console.log(form);
      await updateGeneral(institutionId, form);

      toast.success("General settings updated.");
    } catch (error) {
      if (error.response?.data?.errors) {
        const validationErrors = {};

        console.log(error.response.data.errors);

        error.response.data.errors.forEach((err) => {
          validationErrors[err.field] = err.message;
        });

        setErrors(validationErrors);
      }

      toast.error(error.response?.data?.message || "Failed to update.");
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <GeneralCard>
      {/* Contact */}

      <GeneralSection title="Contact Information">
        <FormInput
          label="Institution Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Alternate Email"
          name="alternateEmail"
          type="email"
          value={form.alternateEmail}
          onChange={handleChange}
          error={errors.alternateEmail}
        />

        <FormInput
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <FormInput
          label="Alternate Phone"
          name="alternatePhone"
          value={form.alternatePhone}
          onChange={handleChange}
          error={errors.alternatePhone}
        />

        <div className="md:col-span-2">
          <FormInput
            label="Website"
            name="website"
            value={form.website}
            onChange={handleChange}
            error={errors.website}
          />
        </div>
      </GeneralSection>

      {/* Office */}

      <GeneralSection title="Office Information">
        <FormInput
    type="time"
    label="Opening Time"
    name="openingTime"
    value={form.openingTime}
    onChange={handleChange}
    error={errors.openingTime}
/>

<FormInput
    type="time"
    label="Closing Time"
    name="closingTime"
    value={form.closingTime}
    onChange={handleChange}
    error={errors.closingTime}
/>

        <FormSelect
          label="Weekly Holiday"
          name="weeklyHoliday"
          value={form.weeklyHoliday}
          onChange={handleChange}
          error={errors.weeklyHoliday}
          options={[
            { label: "Sunday", value: "SUNDAY" },
            { label: "Monday", value: "MONDAY" },
            { label: "Tuesday", value: "TUESDAY" },
            { label: "Wednesday", value: "WEDNESDAY" },
            { label: "Thursday", value: "THURSDAY" },
            { label: "Friday", value: "FRIDAY" },
            { label: "Saturday", value: "SATURDAY" },
          ]}
        />

        <div className="md:col-span-2">
          <WorkingDaysSelector
            value={form.workingDays}
            onChange={(days) =>
              setForm((prev) => ({
                ...prev,
                workingDays: days,
              }))
            }
          />
        </div>
      </GeneralSection>

      {/* Localization */}

      <GeneralSection title="Localization">
        <FormSelect
          label="Language"
          name="language"
          value={form.language}
          onChange={handleChange}
          error={errors.language}
          options={[
            { label: "English", value: "English" },
            { label: "Kannada", value: "Kannada" },
            { label: "Hindi", value: "Hindi" },
            { label: "Telugu", value: "Telugu" },
          ]}
        />

        <FormInput
          label="Time Zone"
          name="timezone"
          value={form.timezone}
          onChange={handleChange}
          error={errors.timezone}
        />

        <FormSelect
          label="Date Format"
          name="dateFormat"
          value={form.dateFormat}
          onChange={handleChange}
          error={errors.dateFormat}
          options={[
            {
              label: "DD/MM/YYYY",
              value: "DD/MM/YYYY",
            },
            {
              label: "MM/DD/YYYY",
              value: "MM/DD/YYYY",
            },
            {
              label: "YYYY-MM-DD",
              value: "YYYY-MM-DD",
            },
          ]}
        />

        <FormSelect
          label="Time Format"
          name="timeFormat"
          value={form.timeFormat}
          onChange={handleChange}
          error={errors.timeFormat}
          options={[
            {
              label: "12 Hours",
              value: "12_HOURS",
            },
            {
              label: "24 Hours",
              value: "24_HOURS",
            },
          ]}
        />

        <FormInput
          label="Currency"
          name="currency"
          value={form.currency}
          onChange={handleChange}
          error={errors.currency}
        />

        <FormInput
          label="Currency Symbol"
          name="currencySymbol"
          value={form.currencySymbol}
          onChange={handleChange}
          error={errors.currencySymbol}
        />
      </GeneralSection>

      {/* Preferences */}

      <GeneralSection title="Preferences">
        <FormSwitch
          label="Student Portal"
          checked={form.studentPortal}
          onChange={() => handleSwitch("studentPortal")}
        />

        <FormSwitch
          label="Teacher Portal"
          checked={form.teacherPortal}
          onChange={() => handleSwitch("teacherPortal")}
        />

        <FormSwitch
          label="Parent Portal"
          checked={form.parentPortal}
          onChange={() => handleSwitch("parentPortal")}
        />
      </GeneralSection>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
        >
          Save Changes
        </button>
      </div>
    </GeneralCard>
  );
};

export default GeneralPage;
