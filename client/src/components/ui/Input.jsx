export default function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
        "
      />
    </div>
  );
}