const FormSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between border border-white/10 rounded-xl px-4 py-3">
      <span className="text-white font-medium">{label}</span>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />

        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
      </label>
    </div>
  );
};

export default FormSwitch;
