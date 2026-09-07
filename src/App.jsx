import Faq from "./components/Faq";
import ProductList from "./components/ProductList";
import UserProfileCard from "./components/UserProfileCard";

import { PRODUCT_LIST } from "./data/product_list";
import { USER_PROFILES } from "./data/user_profiles";
import { FAQ_LIST } from "./data/faq_list";

const App = () => {
    return (
        <main className="min-h-screen bg-[#f6f4ee] px-5 pb-20 pt-9 text-[#24323a] sm:px-10 sm:pt-14 lg:px-24">
            <header className="flex max-w-300 items-end justify-between pb-12 sm:pb-16">
                <div>
                    <p className="mb-3.5 text-3xl font-bold uppercase tracking-[0.16em] text-[#ba684c]">
                        React components · props
                    </p>
                </div>
            </header>
            <div className="flex flex-col gap-10">
                <UserProfileCard data={USER_PROFILES} />
                <ProductList data={PRODUCT_LIST} />
                <Faq data={FAQ_LIST} />
            </div>
        </main>
    );
};

export default App;
