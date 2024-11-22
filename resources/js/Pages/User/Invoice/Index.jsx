import { Button } from "@/Components/ui/button";
import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { formatToRupiah } from "@/lib/utils";
import { router, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Index = () => {
    const { invoices, snapToken, clientKey } = usePage().props;
    let totalPrice = invoices.total_amount;
    totalPrice = parseInt(parseFloat(totalPrice));

    const MySwal = withReactContent(Swal);

    useEffect(() => {
        // Load the Snap.js script dynamically
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", clientKey);
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [clientKey]);

    const handlePayment = () => {
        if (window.snap) {
            window.snap.pay(snapToken, {
                onSuccess: (result) => {
                    MySwal.fire({
                        title: "Pembayaran Berhasil",
                        text: "Pembayaran Berhasil",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    // Redirect or handle success logic
                    router.visit(`/santri-invoice/${invoices.uuid}`);
                },
                onPending: (result) => {
                    MySwal.fire({
                        title: "Pending",
                        text: "Payment is pending!",
                        icon: "info",
                        confirmButtonText: "OK",
                    });
                },
                onError: (result) => {
                    MySwal.fire({
                        title: "Gagal",
                        text: "Terjadi kesalahan saat melakukan pembayaran.",
                        icon: "error",
                    });
                },
                onClose: () => {
                    MySwal.fire({
                        title: "Uppss",
                        text: "Anda telah menutup halaman pembayaran.",
                        icon: "warning",
                    });
                },
            });
        } else {
            alert("Snap.js is not loaded.");
        }
    };

    // console.log(invoices);
    return (
        <DashboardLayoutUser>
            <div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-primary underline underline-offset-4">
                            Invoice Pembayaran
                        </h1>
                        <div>
                            <Button onClick={() => handlePayment()}>
                                Bayar
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p>
                            Pembayaran{" "}
                            <span className="font-semibold text-primary">
                                {" "}
                                : {invoices.card_payments.name}
                            </span>
                        </p>
                        <p>
                            No Invoice{" "}
                            <span className="font-semibold text-primary">
                                : {invoices.uuid}
                            </span>
                        </p>
                        <p>
                            <span
                                className={`${
                                    invoices.is_paid
                                        ? "bg-primary text-white "
                                        : "bg-red-500 text-white "
                                }px-2 text-sm py-1 rounded`}
                            >
                                {invoices.is_paid ? "Dibayar" : "Belum dibayar"}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-10 pb-2.5">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            List Pembayaran
                        </h3>
                    </div>
                    <div className="max-w-full overflow-x-auto px-5">
                        <table className="w-full table-auto ">
                            <thead className="table-header-group">
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        No
                                    </th>
                                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Bulan
                                    </th>

                                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Harga
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoices.payments.map((payment, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-stroke dark:border-strokedark"
                                    >
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                            {i + 1}
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                            {payment.bulan}
                                        </td>

                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                            {formatToRupiah(
                                                invoices.card_payments.price
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-between border-t border-stroke dark:border-strokedark w-full px-4 py-2">
                            <p className="font-semibold">Total</p>
                            <p className="font-semibold">
                                {formatToRupiah(totalPrice)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayoutUser>
    );
};
export default Index;
