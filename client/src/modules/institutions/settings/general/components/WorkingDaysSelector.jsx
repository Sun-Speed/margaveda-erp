const DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const WorkingDaysSelector = ({ value = [], onChange }) => {
  const toggleDay = (day) => {
    if (value.includes(day)) {
      onChange(value.filter((item) => item !== day));
    } else {
      onChange([...value, day]);
    }
  };

  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Working Days
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {DAYS.map((day) => (
          <label key={day} className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={value.includes(day)}
              onChange={() => toggleDay(day)}
            />

            {day}
          </label>
        ))}
      </div>
    </div>
  );
};

export default WorkingDaysSelector;
