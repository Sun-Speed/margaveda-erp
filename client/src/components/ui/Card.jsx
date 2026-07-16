export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        // Glassmorphism effect
        bg-[#0A0A0A]/40 
        backdrop-blur-xl 
        border border-white/10 
        
        // Shape and Shadow
        rounded-3xl 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
        
        // Layout
        p-8 
        relative
        overflow-hidden
        
        // Subtle hover state
        transition-all duration-500
        hover:border-white/20
        
        ${className}
      `}
    >
      {/* Decorative inner glow (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}