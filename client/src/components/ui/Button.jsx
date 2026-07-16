export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const variants = {
    // Elegant, glowing white button for primary actions
    primary: "bg-white text-black hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    
    // Glassmorphism effect for secondary actions
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md",
    
    // Subtle red with a glowing hint for danger
    danger: "bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        relative px-6 py-3 rounded-2xl transition-all duration-300 font-medium
        active:scale-[0.98]
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {/* Optional: Add a subtle inner shine effect */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}