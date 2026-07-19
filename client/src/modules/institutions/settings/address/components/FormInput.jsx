const FormInput = ({ label, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">{label}</label>
    <input
      {...props}
      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-blue-500 outline-none transition-all duration-300"
    />
  </div>
);