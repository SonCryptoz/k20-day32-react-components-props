import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfileCard = ({ data }) => {
    return (
        <section className="mx-auto w-full">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#ba684c]">
                        Our community
                    </p>
                    <h2 className="m-0 text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.03em] text-[#24323a]">
                        Meet the creative minds
                    </h2>
                </div>
                <div className="flex items-baseline gap-2 whitespace-nowrap text-[#718078]">
                    <strong className="text-3xl text-[#24323a]">{data.length}</strong>
                    <span>thành viên</span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data.length > 0 && data.map(
                    ({ id, avatar, fullName, jobTitle, isOnline, skills }) => {
                        return (
                            // Có thể tách component
                            <article
                                className="flex min-h-90 flex-col rounded-[18px] border border-[#24323a]/8 bg-white/70 p-6.5 shadow-[0_18px_45px_rgba(66,77,64,0.08)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(66,77,64,0.14)]"
                                key={id}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="relative">
                                        <img
                                            className="block h-19.5 w-19.5 rounded-full border-4 border-white object-cover shadow-[0_8px_20px_rgba(36,50,58,0.15)]"
                                            src={avatar}
                                            alt={`Ảnh đại diện của ${fullName}`}
                                        />
                                    </div>
                                    <span
                                        className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${isOnline ? "bg-[#e3f0e5] text-[#33d95f]" : "bg-[#edf0ec] text-[#da4d4d]"}`}
                                    >
                                        <FontAwesomeIcon icon={faCircle}/> {isOnline ? "Online" : "Offline"}
                                    </span>
                                </div>

                                <div className="my-5 mt-6">
                                    <h3 className="m-0 mb-1.5 text-[21px] font-bold text-[#24323a]">{fullName}</h3>
                                    <p className="m-0 text-sm text-[#718078]">{jobTitle}</p>
                                </div>

                                <div className="mb-6.5 flex flex-wrap gap-1.5" aria-label={`Kỹ năng của ${fullName}`}>
                                    {skills.map((skill, index) => (
                                        <span className="rounded-md bg-[#edf2eb] px-2 py-1.5 text-[11px] font-semibold text-[#63776c]" key={index}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    className="mt-auto flex w-full items-center justify-center rounded-lg cursor-pointer border-0 bg-[#304b43] px-3.5 py-3 font-bold text-white transition-colors duration-200 hover:bg-[#ba684c]"
                                    onClick={() =>
                                        alert(`Đang kết nối với ${fullName}`)
                                    }
                                >
                                    Kết nối
                                </button>
                            </article>
                        );
                    },
                )}
            </div>
        </section>
    );
};

export default UserProfileCard;
