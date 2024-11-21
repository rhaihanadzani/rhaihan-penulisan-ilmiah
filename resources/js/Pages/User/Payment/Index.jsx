import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { router, usePage } from "@inertiajs/react";

const Index = () => {
    const { cardPayments } = usePage().props;
    // console.log(cardPayments);
    return (
        <DashboardLayoutUser>
            <div>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background pb-2.5">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            List Pembayaran
                        </h3>
                    </div>
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="table-header-group">
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        No
                                    </th>
                                    <th className="min-w-[280px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Pembayaran
                                    </th>
                                    <th className="min-w-[100px] py-4  font-medium text-black dark:text-white ">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardPayments.map((cardPayment, i) => (
                                    <tr
                                        key={i}
                                        onClick={() => {
                                            router.visit(
                                                `/santri-payment-view/${cardPayment.uuid}`
                                            );
                                        }}
                                        className="border-b border-stroke dark:border-strokedark cursor-pointer"
                                    >
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                            {i + 1}
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                            {cardPayment.name}
                                        </td>
                                        <td>
                                            {cardPayment.all_paid ? (
                                                <div className="bg-green-500 w-[120px] px-2 py-1 text-center rounded-lg text-white text-sm">
                                                    Lunas
                                                </div>
                                            ) : (
                                                <div className="bg-red-500 w-[120px] px-2 py-1 text-center rounded-lg text-white text-sm">
                                                    Belum Lunas
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayoutUser>
    );
};
export default Index;
