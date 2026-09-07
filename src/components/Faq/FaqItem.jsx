import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FaqItem = ({ data }) => {
    const [dropdown, setDropdown] = useState(false);

    const { id, question, answer, category, isHot } = data;

    const onSelectFaq = (id) => {
        // Xử lý logic tại đây
        console.log(`Bạn vừa chọn câu hỏi có id là ${id}`);
    };

    return (
        <article
            className={`overflow-hidden rounded-2xl border transition duration-200 ${dropdown ? "border-[#6d947b]/40 bg-[#fdfefd] shadow-[0_18px_40px_rgba(66,77,64,0.1)]" : "border-[#24323a]/8 bg-white/75 shadow-[0_12px_32px_rgba(66,77,64,0.06)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(66,77,64,0.1)]"}`}
        >
            <button
                className="flex w-full cursor-pointer items-center gap-4 border-0 bg-transparent px-5 py-5 text-left sm:px-6"
                onClick={() => {
                    setDropdown(!dropdown);
                    onSelectFaq(id);
                }}
            >
                <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${dropdown ? "bg-[#304b43] text-white" : "bg-[#edf2eb] text-[#63776c]"}`}
                >
                    {String(data.id).padStart(2, "0")}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-[15px] font-bold leading-relaxed text-[#24323a] sm:text-base">
                        {question}
                    </span>
                    <span className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full bg-[#edf2eb] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#63776c]">
                            {category}
                        </span>
                        {isHot && (
                            <span className="rounded-full bg-[#f9e0d6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#a84f36]">
                                Hot
                            </span>
                        )}
                    </span>
                </span>
                <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-200 ${dropdown ? "rotate-180 bg-[#e3f0e5] text-[#487956]" : "bg-[#f6f4ee] text-[#63776c]"}`}
                >
                    <FontAwesomeIcon icon={faArrowDown} />
                </span>
            </button>
            <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${dropdown ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="mx-5 border-t border-[#24323a]/8 pb-6 pt-4 sm:mx-6">
                        <p className="m-0 max-w-3xl pl-13 text-sm leading-7 text-[#718078]">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FaqItem;
