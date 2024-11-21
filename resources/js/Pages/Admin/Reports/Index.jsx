import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import { router, usePage } from "@inertiajs/react";

const Index = () => {
    const { users, holiday } = usePage().props;

    return (
        <DashboardLayoutAdmin>
            <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead className="table-header-group">
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    No
                                </th>
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Nama Santri
                                </th>
                                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Kelas
                                </th>
                            </tr>
                        </thead>
                        <thead>
                            {users.map((user, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-stroke dark:border-strokedark cursor-pointer hover:bg-boxdark hover:text-white dark:hover:bg-white dark:hover:text-boxdark transition-all duration-150"
                                    onClick={() =>
                                        router.visit(
                                            `/admin-report-view/${holiday.uuid}/${user.uuid}`
                                        )
                                    }
                                >
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {i + 1}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {user.name}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        {user.kelas.nama}
                                    </td>
                                </tr>
                            ))}
                        </thead>
                    </table>
                </div>
            </div>
        </DashboardLayoutAdmin>
    );
};
export default Index;
