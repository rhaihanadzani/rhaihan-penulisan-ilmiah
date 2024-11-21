import { router } from "@inertiajs/react";

const TableCardPayment = ({ cardPayments }) => {
    const sendWa = () => {
        router.post("/send-wa");
    };
    return (
        <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="table-header-group">
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[70px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                No
                            </th>
                            <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Pembayaran
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardPayments.map((cardPayment, i) => (
                            <tr
                                key={i}
                                className="border-b border-stroke dark:border-strokedark"
                            >
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                    {i + 1}
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                    {cardPayment.name}
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                                    <button>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default TableCardPayment;
