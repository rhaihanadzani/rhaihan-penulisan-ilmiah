import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { formatToRupiah } from "@/lib/utils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CardPaymentDetail = () => {
    const { cardPayment, bulanList, flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        bulan: [],
    });
    const [isChecked, setIsChecked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
        const value = e.target.value;
        setData((prevData) => {
            if (prevData.bulan.includes(value)) {
                return {
                    ...prevData,
                    bulan: prevData.bulan.filter((b) => b !== value),
                };
            } else {
                return { ...prevData, bulan: [...prevData.bulan, value] };
            }
        });
    };

    const monthlyPrice = cardPayment.price;
    const totalPrice = data.bulan.length * monthlyPrice;

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("payments.process", cardPayment.uuid), {
            onFinish: () => {
                setIsOpen(false);
                reset("bulan");
                // MySwal.fire({
                //     title: "Pembayaran Berhasil",
                //     text: "Pembayaran Berhasil",
                //     icon: "success",
                //     confirmButtonText: "Ok",
                // });
                MySwal.fire({
                    title: "Mengalihkan...",
                    didOpen: () => {
                        MySwal.showLoading();
                    },
                });
            },
            onProgress: () => {
                MySwal.fire({
                    title: "Loading...",
                    didOpen: () => {
                        MySwal.showLoading();
                    },
                });
            },
            onError: () => {
                MySwal.fire({
                    title: "Gagal",
                    text: "Terjadi kesalahan saat melakukan pembayaran.",
                    icon: "error",
                });
            },
        });
    };

    // Check if all months are paid
    const allPaid = Object.values(bulanList).every((isPaid) => isPaid);

    return (
        <DashboardLayoutUser>
            <h1 className="text-xl text-primary font-bold">
                Pembayaran untuk {cardPayment.name}
            </h1>
            <div className="container mx-auto mt-10">
                {allPaid ? (
                    <div className="text-xl text-primary">
                        Pembayaran Sudah Lunas semua
                    </div>
                ) : (
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                List Pembayaran
                            </h3>
                        </div>
                        <div>
                            <div className="p-7">
                                <div className="mb-4">
                                    <div className="flex gap-5 flex-wrap items-center">
                                        {Object.entries(bulanList).map(
                                            ([bulan, isPaid]) =>
                                                !isPaid ? (
                                                    <div
                                                        key={bulan}
                                                        className="w-[150px]"
                                                    >
                                                        <label className="flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                value={bulan}
                                                                checked={data.bulan.includes(
                                                                    bulan
                                                                )}
                                                                onChange={
                                                                    handleCheckboxChange
                                                                }
                                                                className="p-4 rounded-lg border border-gray-300 focus:border-primary checked:bg-primary checked:hover:bg-primary/90 transition-all duration-300 focus:ring-2 focus:ring-blue-200"
                                                            />
                                                            {bulan}
                                                        </label>
                                                    </div>
                                                ) : null
                                        )}
                                    </div>
                                    {errors.bulan && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.bulan}
                                        </p>
                                    )}
                                </div>
                                <div className="flex mt-10 px-2">
                                    <button
                                        onClick={() => {
                                            if (data.bulan.length > 0) {
                                                setIsOpen(true);
                                            } else {
                                                MySwal.fire({
                                                    icon: "error",
                                                    title: "Oops...",
                                                    text: "Tidak ada bulan yang dipilih!",
                                                });
                                            }
                                        }}
                                        type="submit"
                                        className="bg-primary hover:bg-primary/90 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        disabled={processing}
                                    >
                                        Bayar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Dialog Create */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <DialogHeader>
                                <DialogTitle>Konfirmasi Pembayaran</DialogTitle>
                                <DialogDescription>
                                    {" "}
                                    Periksa data Pembayaran yang anda buat sudah
                                    benar, dan yakin ingin melakukan transaksi?
                                </DialogDescription>
                            </DialogHeader>
                            <div>
                                <h1>
                                    {" "}
                                    Anda ingin membayar bulan{" "}
                                    <span className="text-primary font-semibold">
                                        {" "}
                                        {data.bulan.join(", ")}
                                    </span>
                                </h1>
                                <p>
                                    Dengan Total Rp.{" "}
                                    <span className="text-primary font-semibold underline underline-offset-4">
                                        {" "}
                                        {formatToRupiah(totalPrice)}
                                    </span>
                                </p>
                            </div>
                            <DialogFooter>
                                <button
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6 disabled:opacity-75"
                                    type="submit"
                                >
                                    {processing ? "Membayar..." : "Bayar"}
                                </button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-10">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Detail Pembayaran
                        </h3>
                    </div>
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="table-header-group">
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        No
                                    </th>
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Bulan
                                    </th>
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Status
                                    </th>
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Nominal
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(bulanList).map(
                                    ([bulan, isPaid], i) => (
                                        <tr
                                            className="border-b border-stroke dark:border-strokedark"
                                            key={bulan}
                                        >
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                                {i + 1}
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                                {bulan}
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                                <div
                                                    className={` ${
                                                        isPaid
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                    } w-[80px] px-2 py-1 text-center rounded-lg text-white`}
                                                >
                                                    {isPaid ? "Paid" : "Unpaid"}
                                                </div>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                                {formatToRupiah(monthlyPrice)}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayoutUser>
    );
};

export default CardPaymentDetail;
