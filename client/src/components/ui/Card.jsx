export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        group relative
        // Background and Glass
        bg-[#0A0A0A]/60 backdrop-blur-xl 
        border border-white/10 
        
        // Shape and Shadow
        rounded-3xl 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
        
        // Layout
        p-6
        overflow-hidden
        
        // Interaction
        transition-all duration-500
        hover:border-white/20
        hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.6)]
        
        ${className}
      `}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />
      
      {/* Subtle hover-triggered glow */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}