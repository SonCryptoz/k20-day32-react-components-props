import FaqItem from "./FaqItem";

const Faq = ({ data }) => {
    return (
        <section className="mx-auto w-full">
                <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#ba684c]">
                            FAQ
                        </p>
                        <h2 className="m-0 text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.03em] text-[#24323a]">
                            Everything you need to know
                        </h2>
                    </div>
                    <div className="flex items-baseline gap-2 whitespace-nowrap text-[#718078]">
                        <strong className="text-3xl text-[#24323a]">
                            {data.length}
                        </strong>
                        <span>Câu hỏi thường gặp</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {data.length > 0 &&
                        data.map((faq) => (
                            <FaqItem key={faq.id} data={faq} />
                        ))}
                </div>
        </section>
    );
};

export default Faq;
