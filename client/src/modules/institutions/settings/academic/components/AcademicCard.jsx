const AcademicCard = ({ children }) => {
    return (
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-xl">
            {children}
        </div>
    );
};

export default AcademicCard;