import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import { formatDate } from "@/lib/utils";
import { router, usePage } from "@inertiajs/react";

const View = () => {
    const { reports } = usePage().props;
    console.log(reports.length);
    return (
        <DashboardLayoutAdmin>
            <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead className="table-header-group">
                            <tr
                                tr
                                className="bg-gray-2 text-left dark:bg-meta-4"
                            >
                                <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    No
                                </th>
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Judul
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Murajaah
                                </th>
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white text-center">
                                    Status
                                </th>
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Tanggal Dibuat
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report, i) => (
                                <tr
                                    onClick={() =>
                                        router.visit(
                                            `/admin-report-user/${report.uuid}`
                                        )
                                    }
                                    key={i}
                                    className="border-b border-stroke dark:border-strokedark cursor-pointer hover:bg-gray-2 dark:hover:dark:bg-meta-4 transition-all duration-150"
                                >
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {i + 1}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {report.title}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-16">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                id="isMurajaah"
                                                className="sr-only"
                                                checked={report.murajaah}
                                                disabled
                                            />
                                            <div
                                                className={`mr-4 flex h-5 w-5 items-center justify-center rounded border border-stroke ${
                                                    report.murajaah &&
                                                    report.murajaah === true &&
                                                    "border-blue-500 bg-gray dark:bg-transparent"
                                                }`}
                                            >
                                                <span
                                                    className={`opacity-0 ${
                                                        report.murajaah &&
                                                        report.murajaah ===
                                                            true &&
                                                        "!opacity-100"
                                                    }`}
                                                >
                                                    <svg
                                                        width="11"
                                                        height="8"
                                                        viewBox="0 0 11 8"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                            fill="#3056D3"
                                                            stroke="#3056D3"
                                                            strokeWidth="0.4"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 text-[13px] dark:border-strokedark xl:pl-11">
                                        <div
                                            className={`w-fit px-4 py-2 rounded-lg ${
                                                report.status ===
                                                "Menunggu Persetujuan"
                                                    ? "bg-yellow-600 text-white"
                                                    : "bg-green-900 text-white"
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
        </DashboardLayoutAdmin>
    );
};
export default View;
