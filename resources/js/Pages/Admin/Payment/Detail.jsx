import { Button } from "@/Components/ui/button";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import { formatToRupiah } from "@/lib/utils";
import { router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Detail = () => {
    const { cardPayment, bulanList, flash, user } = usePage().props;

    const monthlyPrice = cardPayment.price;

    const unpaidMonths = Object.entries(bulanList)
        .filter(([key, value]) => value === false)
        .map(([key]) => key)
        .join(", ");

    console.log(flash);
    const MySwal = withReactContent(Swal);

    // console.log(unpaidMonths);
    // console.log(user);
    // console.log(cardPayment);
    const sendWa = () => {
        const data = {
            phone: user.profile.phone,
            unpaidMonths: unpaidMonths,
            cardPayment: cardPayment.name,
            user: user.name,
        };
        // console.log(data.phone);
        if (!data.phone) {
            MySwal.fire({
                title: "Gagal",
                text: "Nomor Telepon tidak terdaftar",
                icon: "error",
                confirmButtonColor: "#10B981",
            });
            return;
        }
        router.post("/wa-gateway", data, {
            onSuccess: () => {
                // router.visit(`/admin/user/santri`);
                MySwal.fire({
                    title: "Pesan Berhasil Terkirim",
                    icon: "success",
                    confirmButtonColor: "#10B981",
                    html:
                        '<div id="customButtons">' +
                        '<button id="closeButton" class="swal2-cancel swal2-styled" style="background-color: #d33;">Close</button>' +
                        "</div>",
                    showConfirmButton: false,
                    showCancelButton: false,
                    didRender: () => {
                        document
                            .getElementById("closeButton")
                            .addEventListener("click", () => {
                                MySwal.close();
                            });
                    },
                });
            },
        });
    };

    return (
        <DashboardLayoutAdmin>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-10">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark flex justify-between items-center">
                    <h3 className="font-medium text-black dark:text-white">
                        Detail Pembayaran
                    </h3>
                    <div>
                        <Button onClick={() => sendWa()}>Kirim Pesan</Button>
                    </div>
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
        </DashboardLayoutAdmin>
    );
};
export default Detail;
