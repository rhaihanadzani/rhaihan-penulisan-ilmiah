import InputLabel from "@/Components/InputLabel";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import TableCardPayment from "./View/TableCardPayment";

const Index = () => {
    const { errors, cardPayments } = usePage().props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    console.log(cardPayments);
    const onCreateCardPayment = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = {
            name: title,
            price: price,
        };
        router.post("/card-payment-store", data, {
            onSuccess: () => {
                setTitle("");
                setPrice("");
                setIsLoading(false);
            },
            onError: () => {
                setIsLoading(false);
            },
        });
    };
    return (
        <DashboardLayoutAdmin>
            <div>
                <form
                    onSubmit={onCreateCardPayment}
                    className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-[95%] mx-auto"
                >
                    <div className="border-b border-stroke py-3 px-5 dark:border-strokedark">
                        <h3 className="font-medium text-xl text-black dark:text-white">
                            Buat Pembayaran Santri
                        </h3>
                    </div>
                    <div className="p-6 flex items-center gap-5">
                        <div className="space-y-2 w-[70%]">
                            <InputLabel value={"Nama Pembayaran"} />
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                value={title}
                                placeholder="Nama Pembayaran"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="space-y-2 w-[30%]">
                            <InputLabel value={"Harga"} />
                            <div className="relative">
                                <input
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    value={price}
                                    placeholder="Harga"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white pl-10"
                                    style={{
                                        WebkitAppearance: "none",
                                        MozAppearance: "textfield", // Untuk Firefox
                                    }}
                                />
                                <span className="absolute left-4 top-[12px]">
                                    Rp.
                                </span>
                            </div>
                            {errors.price && (
                                <span className="text-red-500">
                                    {errors.price}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center pt-[22px]">
                        <button
                            disabled={isLoading}
                            className="rounded bg-primary text-white px-4 py-2"
                        >
                            {isLoading ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </form>
                {/* Table Card Payment */}
                <div>
                    <TableCardPayment cardPayments={cardPayments} />
                </div>
            </div>
        </DashboardLayoutAdmin>
    );
};
export default Index;
