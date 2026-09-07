import Badge from "./Badge";

const ProductItem = ({ data }) => {
    const { name, price, image, inStock, discountPercent } = data;

    const discountPrice = price * (1 - discountPercent / 100);
    
    // Thực tế sẽ đặt hàm hỗ trợ này vào thư mục helper cùng thư mục component
    const formatPrice = (value) =>
        new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(value);

    return (
        <article
            className={`group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#24323a]/8 bg-white shadow-[0_16px_40px_rgba(66,77,64,0.07)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(66,77,64,0.14)] ${!inStock ? "opacity-75" : ""}`}
        >
            <div className="relative aspect-4/3 overflow-hidden bg-[#edf2eb]">
                <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={image}
                    alt={name}
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {discountPercent > 0 && (
                        <Badge tone="discount">-{discountPercent}%</Badge>
                    )}
                    {!inStock && <Badge tone="unavailable">Hết hàng</Badge>}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="mb-5 flex items-start justify-between gap-3">
                    <h3 className="m-0 text-[17px] font-bold leading-snug text-[#24323a]">
                        {name}
                    </h3>
                </div>

                <div className="mb-5 mt-auto flex flex-wrap items-baseline gap-2">
                    <strong className="text-xl text-[#304b43]">
                        {formatPrice(discountPrice)}
                    </strong>
                    {discountPercent > 0 && (
                        <span className="text-sm text-[#9aa39d] line-through">
                            {formatPrice(price)}
                        </span>
                    )}
                </div>

                <button
                    className={`flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-bold transition-colors ${inStock ? "bg-[#304b43] text-white hover:bg-[#ba684c] cursor-pointer" : "cursor-not-allowed bg-[#edf0ec] text-[#9aa39d]"}`}
                    disabled={!inStock}
                    onClick={() =>
                        alert(`${name} - ${formatPrice(discountPrice)}`)
                    }
                >
                    {inStock ? "Thêm vào giỏ" : "Tạm hết hàng"}
                </button>
            </div>
        </article>
    );
};

export default ProductItem;
