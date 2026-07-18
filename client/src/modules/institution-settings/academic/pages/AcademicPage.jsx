import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAcademic, updateAcademic } from "../services/academic.service";

import AcademicCard from "../components/AcademicCard";
import AcademicSection from "../components/AcademicSection";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";

import { useInstitution } from "../../../../contexts/InstitutionContext";

const AcademicPage = () => {
  const { institutionId } = useInstitution();

  const [loading, setLoading] = useState(true);

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    currentAcademicYear: "",
    academicCode: "",
    startDate: "",
    expectedEndDate: "",
    semesterPattern: "SEMESTER",
    gradingSystem: "PERCENTAGE",
    attendanceRequirement: 75,
    workingDays: 220,
    description: "",
  });

 useEffect(() => {
    console.log("useEffect Running");

    if (!institutionId) {
        console.log("No institution id");
        return;
    }

    loadAcademic();
}, [institutionId]);

console.log("Institution ID:", institutionId);

  const loadAcademic = async () => {
    try {
      const data = await getAcademic(institutionId);

      setForm({
        ...data,
        startDate: data.startDate ? data.startDate.substring(0, 10) : "",

        expectedEndDate: data.expectedEndDate
          ? data.expectedEndDate.substring(0, 10)
          : "",
      });
    } catch (error) {
      toast.error("Failed to load academic settings.");
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

  const handleSave = async () => {
    try {
      setErrors({});

      await updateAcademic(institutionId, form);

      toast.success("Academic settings updated.");
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

  if (loading) return <div className="text-white">Loading...raaaa</div>;

  return (
    <AcademicCard>
      <AcademicSection title="Academic Settings">
        <FormInput
          label="Academic Year"
          required
          name="currentAcademicYear"
          value={form.currentAcademicYear}
          onChange={handleChange}
          error={errors.currentAcademicYear}
        />

        <FormInput
          label="Academic Code"
          required
          name="academicCode"
          value={form.academicCode}
          onChange={handleChange}
          error={errors.academicCode}
        />

        <FormInput
          type="date"
          label="Start Date"
          required
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          error={errors.startDate}
        />

        <FormInput
          type="date"
          label="Expected End Date"
          name="expectedEndDate"
          value={form.expectedEndDate}
          onChange={handleChange}
          error={errors.expectedEndDate}
        />

        <FormSelect
          label="Semester Pattern"
          name="semesterPattern"
          value={form.semesterPattern}
          onChange={handleChange}
          error={errors.semesterPattern}
          options={[
            {
              label: "Semester",
              value: "SEMESTER",
            },
            {
              label: "Yearly",
              value: "YEARLY",
            },
            {
              label: "Trimester",
              value: "TRIMESTER",
            },
            {
              label: "Quarter",
              value: "QUARTER",
            },
          ]}
        />

        <FormSelect
          label="Grading System"
          name="gradingSystem"
          value={form.gradingSystem}
          onChange={handleChange}
          error={errors.gradingSystem}
          options={[
            {
              label: "Percentage",
              value: "PERCENTAGE",
            },
            {
              label: "CGPA",
              value: "CGPA",
            },
            {
              label: "GPA",
              value: "GPA",
            },
          ]}
        />

        <FormInput
          type="number"
          label="Attendance Requirement (%)"
          name="attendanceRequirement"
          value={form.attendanceRequirement}
          onChange={handleChange}
          error={errors.attendanceRequirement}
        />

        <FormInput
          type="number"
          label="Working Days"
          name="workingDays"
          value={form.workingDays}
          onChange={handleChange}
          error={errors.workingDays}
        />

        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Description
          </label>

          <textarea
            rows={4}
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-xl px-4 py-3 bg-[#0A0A0A] border border-white/10 text-white outline-none focus:border-blue-500"
          />
        </div>
      </AcademicSection>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Save Changes
        </button>
      </div>
    </AcademicCard>
  );
};

export default AcademicPage;
