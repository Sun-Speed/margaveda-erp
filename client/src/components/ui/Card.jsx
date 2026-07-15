export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-md
        border
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}