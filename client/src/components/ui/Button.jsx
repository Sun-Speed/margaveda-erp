export default function Button({
  children,

  type = "button",

  variant = "primary",

  className = "",

  disabled = false,

  ...props
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary: "bg-gray-200 hover:bg-gray-300 text-black",

    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`

                px-5

                py-3

                rounded-xl

                transition

                font-medium

                ${variants[variant]}

                ${disabled ? "opacity-50 cursor-not-allowed" : ""}

                ${className}

            `}
      {...props}
    >
      {children}
    </button>
  );
}
