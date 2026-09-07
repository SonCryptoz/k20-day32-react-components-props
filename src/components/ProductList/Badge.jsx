const Badge = ({ children, tone = "neutral" }) => {
    const toneClasses = {
        discount: "bg-[#f9e0d6] text-[#a84f36]",
        unavailable: "bg-[#eceeea] text-[#718078]",
        available: "bg-[#e3f0e5] text-[#487956]",
        neutral: "bg-[#edf2eb] text-[#63776c]",
    };

    return (
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${toneClasses[tone]}`}>
            {children}
        </span>
    );
};

export default Badge;
