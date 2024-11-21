import { usePage, router } from "@inertiajs/react";
import { CheckCheck, X } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Verifikasi from "./Action/Verifikasi";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";

const DetailAdminReport = () => {
    const { report } = usePage().props;

    const MySwal = withReactContent(Swal);

    return (
        <DashboardLayoutAdmin>
            <div>
                <div className="flex justify-center items-center gap-5">
                    <div className="w-1/2 h-[450px] flex justify-center items-center rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark  dark:bg-background sm:px-7">
                        <img
                            src={`/storage/reports/images/${report.image}`}
                            alt={report.title}
                            className="w-[90%] h-full rounded-lg shadow-sm shadow-boxdark"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col space-y-8 rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-background sm:px-7">
                        <div className="flex flex-col space-y-2">
                            <p className="text-xl font-bold capitalize">
                                Nama : {report.user.name}
                            </p>
                            <p className="text-xl font-bold capitalize">
                                Liburan : {report.holiday.name}
                            </p>
                            <p className="">
                                <span className="font-bold text-xl">
                                    {" "}
                                    Status :
                                </span>{" "}
                                <span
                                    className={` px-2 py-1 rounded-lg font-semibold border dark:border-stroke  border-strokedark ${
                                        report.status === "Disetujui"
                                            ? "bg-green-700 text-white"
                                            : "bg-yellow-500 text-white"
                                    }`}
                                >
                                    {report.status}
                                </span>
                            </p>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold  text-center capitalize">
                                {report.title}
                            </h1>
                            <p className="text-[16px]">{report.description}</p>
                            <p className="flex gap-2 italic font-semibold mt-5">
                                Status Murajaah
                                {report.murajaah === true ? (
                                    <CheckCheck className="text-green-700" />
                                ) : (
                                    <X className="text-red-700" />
                                )}
                            </p>
                        </div>
                        <div className="flex gap-2 w-full justify-end">
                            <Verifikasi report={report} />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayoutAdmin>
    );
};
export default DetailAdminReport;
