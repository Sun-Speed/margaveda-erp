import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getSystem, updateSystem } from "../services/system.service";

import SystemCard from "../components/SystemCard";
import SystemSection from "../components/SystemSection";
import FormSwitch from "../components/FormSwitch";

import FormInput from "../../academic/components/FormInput";

import { useInstitution } from "../../../../contexts/InstitutionContext";

const SystemPage = () => {
  const { institutionId } = useInstitution();

  const [loading, setLoading] = useState(true);

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    studentPrefix: "STD",

    teacherPrefix: "TEA",

    employeePrefix: "EMP",

    admissionPrefix: "ADM",

    receiptPrefix: "REC",

    certificatePrefix: "CERT",

    financialYear: "",

    gstNumber: "",

    taxPercentage: 0,

    paymentDueDays: 30,

    senderName: "",

    senderEmail: "",

    emailNotifications: true,

    smsNotifications: false,

    whatsappNotifications: false,

    minimumPasswordLength: 8,

    sessionTimeout: 30,

    maximumLoginAttempts: 5,

    twoFactorAuthentication: false,
  });
  
  useEffect(() => {
    if (!institutionId) {
      setLoading(false);
      return;
    }

    loadSystem();
  }, [institutionId]);

  const loadSystem = async () => {
    try {
      const data = await getSystem(institutionId);

      setForm({
        studentPrefix: data.studentPrefix || "STD",

        teacherPrefix: data.teacherPrefix || "TEA",

        employeePrefix: data.employeePrefix || "EMP",

        admissionPrefix: data.admissionPrefix || "ADM",

        receiptPrefix: data.receiptPrefix || "REC",

        certificatePrefix: data.certificatePrefix || "CERT",

        financialYear: data.financialYear || "",

        gstNumber: data.gstNumber || "",

        taxPercentage: data.taxPercentage ?? 0,

        paymentDueDays: data.paymentDueDays ?? 30,

        senderName: data.senderName || "",

        senderEmail: data.senderEmail || "",

        emailNotifications: data.emailNotifications ?? true,

        smsNotifications: data.smsNotifications ?? false,

        whatsappNotifications: data.whatsappNotifications ?? false,

        minimumPasswordLength: data.minimumPasswordLength ?? 8,

        sessionTimeout: data.sessionTimeout ?? 30,

        maximumLoginAttempts: data.maximumLoginAttempts ?? 5,

        twoFactorAuthentication: data.twoFactorAuthentication ?? false,
      });
    } catch {
      toast.error("Failed to load system settings.");
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

      await updateSystem(institutionId, form);

      toast.success("System settings updated.");
    } catch (error) {
      if (error.response?.data?.errors) {
        const validationErrors = {};

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
    <SystemCard>
      {/* Document Numbering */}

      <SystemSection title="Document Numbering">
        <FormInput
          label="Student Prefix"
          name="studentPrefix"
          value={form.studentPrefix}
          onChange={handleChange}
          error={errors.studentPrefix}
        />

        <FormInput
          label="Teacher Prefix"
          name="teacherPrefix"
          value={form.teacherPrefix}
          onChange={handleChange}
          error={errors.teacherPrefix}
        />

        <FormInput
          label="Employee Prefix"
          name="employeePrefix"
          value={form.employeePrefix}
          onChange={handleChange}
          error={errors.employeePrefix}
        />

        <FormInput
          label="Admission Prefix"
          name="admissionPrefix"
          value={form.admissionPrefix}
          onChange={handleChange}
          error={errors.admissionPrefix}
        />

        <FormInput
          label="Receipt Prefix"
          name="receiptPrefix"
          value={form.receiptPrefix}
          onChange={handleChange}
          error={errors.receiptPrefix}
        />

        <FormInput
          label="Certificate Prefix"
          name="certificatePrefix"
          value={form.certificatePrefix}
          onChange={handleChange}
          error={errors.certificatePrefix}
        />
      </SystemSection>

      {/* Financial */}

      <SystemSection title="Financial">
        <FormInput
          label="Financial Year"
          name="financialYear"
          value={form.financialYear}
          onChange={handleChange}
          error={errors.financialYear}
        />

        <FormInput
          label="GST Number"
          name="gstNumber"
          value={form.gstNumber}
          onChange={handleChange}
          error={errors.gstNumber}
        />

        <FormInput
          type="number"
          label="Tax Percentage"
          name="taxPercentage"
          value={form.taxPercentage}
          onChange={handleChange}
          error={errors.taxPercentage}
        />

        <FormInput
          type="number"
          label="Payment Due Days"
          name="paymentDueDays"
          value={form.paymentDueDays}
          onChange={handleChange}
          error={errors.paymentDueDays}
        />
      </SystemSection>

      {/* Communication */}

      <SystemSection title="Communication">
        <FormInput
          label="Sender Name"
          name="senderName"
          value={form.senderName}
          onChange={handleChange}
          error={errors.senderName}
        />

        <FormInput
          label="Sender Email"
          name="senderEmail"
          type="email"
          value={form.senderEmail}
          onChange={handleChange}
          error={errors.senderEmail}
        />

        <FormSwitch
          label="Email Notifications"
          checked={form.emailNotifications}
          onChange={() => handleSwitch("emailNotifications")}
        />

        <FormSwitch
          label="SMS Notifications"
          checked={form.smsNotifications}
          onChange={() => handleSwitch("smsNotifications")}
        />

        <FormSwitch
          label="WhatsApp Notifications"
          checked={form.whatsappNotifications}
          onChange={() => handleSwitch("whatsappNotifications")}
        />
      </SystemSection>

      {/* Security */}

      <SystemSection title="Security">
        <FormInput
          type="number"
          label="Minimum Password Length"
          name="minimumPasswordLength"
          value={form.minimumPasswordLength}
          onChange={handleChange}
          error={errors.minimumPasswordLength}
        />

        <FormInput
          type="number"
          label="Session Timeout (Minutes)"
          name="sessionTimeout"
          value={form.sessionTimeout}
          onChange={handleChange}
          error={errors.sessionTimeout}
        />

        <FormInput
          type="number"
          label="Maximum Login Attempts"
          name="maximumLoginAttempts"
          value={form.maximumLoginAttempts}
          onChange={handleChange}
          error={errors.maximumLoginAttempts}
        />

        <FormSwitch
          label="Two Factor Authentication"
          checked={form.twoFactorAuthentication}
          onChange={() => handleSwitch("twoFactorAuthentication")}
        />
      </SystemSection>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Save Changes
        </button>
      </div>
    </SystemCard>
  );
};

export default SystemPage;
