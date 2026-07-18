const GeneralSection = ({
    title,
    children,
}) => {
    return (
        <div className="mb-10">

            <h2 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-3">
                {title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {children}
            </div>

        </div>
    );
};

export default GeneralSection;