import { ArrowUpRight } from "lucide-react";
import DialogEditHoliday from "./EditHoliday";
import DialogDeleteHoliday from "./DeleteHoliday";
import { router } from "@inertiajs/react";

const ListHolidays = ({ holidays }) => {
    return (
        <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="table-header-group">
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[70px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                No
                            </th>
                            <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Liburan
                            </th>
                            <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Selesai Liburan
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Status
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {holidays.map((holiday, i) => (
                            <tr
                                key={i}
                                className="border-b border-stroke dark:border-strokedark"
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
                                <td className="border-b border-[#eee] py-5 px-4  dark:border-strokedark xl:pl-11">
                                    <div className="relative">
                                        <input
                                            disabled={true}
                                            checked={holiday.is_active}
                                            type="checkbox"
                                            className="sr-only"
                                        />
                                        <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                                        <button
                                            disabled={true}
                                            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                                                holiday.is_active
                                                    ? "!right-1 !translate-x-full !bg-primary"
                                                    : ""
                                            }`}
                                        ></button>
                                    </div>
                                </td>
                                <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                                    <div className="flex gap-5  w-full">
                                        <button
                                            onClick={() =>
                                                router.visit(
                                                    `/admin-report-view/${holiday.uuid}`
                                                )
                                            }
                                        >
                                            <ArrowUpRight
                                                size={25}
                                                name="visit"
                                                className="hover:text-blue-500 transition-all duration-200"
                                            />
                                        </button>
                                        <DialogEditHoliday holiday={holiday} />
                                        <DialogDeleteHoliday
                                            holiday={holiday}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListHolidays;
