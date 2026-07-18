const FormSelect = ({
    label,
    error,
    options = [],
    required = false,
    className = "",
    ...props
}) => {
    return (
        <div className={className}>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {label}
                {required && (
                    <span className="text-red-500 ml-1">*</span>
                )}
            </label>

            <select
                {...props}
                className={`w-full rounded-xl px-4 py-3 bg-[#0A0A0A] text-white outline-none transition-all border ${
                    error
                        ? "border-red-500"
                        : "border-white/10 focus:border-blue-500"
                }`}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="mt-2 text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormSelect;