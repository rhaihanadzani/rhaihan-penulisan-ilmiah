import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { formatDate } from "@/lib/utils";
import { router, usePage } from "@inertiajs/react";

const Detail = () => {
    const { reports } = usePage().props;

    const handleRowClick = (id) => {
        router.visit(`/santri-detail-report/${id}`);
    };
    return (
        <DashboardLayoutUser>
            <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead className="table-header-group">
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    No
                                </th>
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Judul
                                </th>
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Status
                                </th>
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                    Tanggal Pembuatan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report, i) => (
                                <tr
                                    onClick={() => handleRowClick(report.uuid)}
                                    className="border-b border-stroke dark:border-strokedark cursor-pointer"
                                    key={report.id}
                                >
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {i + 1}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {report.title}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <div
                                            className={`text-[14px] px-4 py-1 rounded-lg w-fit ${
                                                report.status === "Disetujui"
                                                    ? "bg-green-700 text-white"
                                                    : "bg-yellow-500 text-white"
                                            }`}
                                        >
                                            {report.status}
                                        </div>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {formatDate(report.created_at)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayoutUser>
    );
};
export default Detail;
