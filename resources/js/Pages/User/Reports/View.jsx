import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { usePage, router } from "@inertiajs/react";

const View = () => {
    const { auth, holidays } = usePage().props;

    const handleRowClick = (id) => {
        router.visit(`/santri-view-report/${id}`);
    };

    return (
        <DashboardLayoutUser>
            <h1 className="text-xl text-primary font-bold">
                Lihat Laporan Liburan
            </h1>
            <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead className="table-header-group">
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    No
                                </th>
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Liburan
                                </th>
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                    Selesai Liburan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {holidays.map((holiday, i) => (
                                <tr
                                    key={holiday.id}
                                    onClick={() => handleRowClick(holiday.uuid)}
                                    className="border-b border-stroke dark:border-strokedark cursor-pointer"
                                >
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {i + 1}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {holiday.name}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {holiday.last_holiday}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-red-700 mt-10">
                    * pilih liburan untuk melihat laporan
                </p>
            </div>
        </DashboardLayoutUser>
    );
};

export default View;
