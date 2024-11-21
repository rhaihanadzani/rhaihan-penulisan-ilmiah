import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { usePage, router } from "@inertiajs/react";
import { CheckCheck, X, FilePenLine, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const DetailId = () => {
    const { report } = usePage().props;

    const MySwal = withReactContent(Swal);

    const isVerify = report.status === "Disetujui";

    const openModal = () => {
        MySwal.fire({
            title: `Ingin Menghapus "${report.title}" ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#10B981",
            cancelButtonColor: "#d33",
            confirmButtonText: "Hapus",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/santri-delete-report/${report.uuid}`, {
                    onSuccess: () => {
                        MySwal.fire({
                            title: "Terhapus",
                            text: "Data berhasil dihapus.",
                            icon: "success",
                        });
                    },
                });
            }
        });
    };
    return (
        <DashboardLayoutUser>
            <div>
                <div className="flex justify-center items-center gap-5">
                    <div className="w-1/2 h-[450px] flex justify-center items-center rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark  dark:bg-boxdark sm:px-7">
                        <img
                            src={`/storage/reports/images/${report.image}`}
                            alt={report.title}
                            className="w-[90%] h-full rounded-lg shadow-sm shadow-boxdark"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col space-y-8 rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7">
                        <div className="flex flex-col space-y-2">
                            <p className="text-xl font-bold capitalize">
                                Nama : {report.user.name}
                            </p>
                            <p className="text-xl font-bold capitalize">
                                Liburan : {report.holiday.name}
                            </p>
                            <p className="">
                                <span
                                    className={` px-2 py-1 rounded-lg font-semibold border dark:border-stroke  border-strokedark ${
                                        report.status === "Disetujui"
                                            ? "bg-green-700 text-stroke"
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
                        {!isVerify ? (
                            <div className="flex gap-2 w-full justify-end">
                                <button
                                    className="flex rounded-full justify-center  bg-blue-500 p-3 font-medium text-gray hover:bg-opacity-90 border dark:border-stroke  border-strokedark"
                                    onClick={() =>
                                        router.visit(
                                            `/santri-edit-report/${report.uuid}`
                                        )
                                    }
                                >
                                    <FilePenLine />
                                </button>
                                <button
                                    onClick={openModal}
                                    className="flex rounded-full justify-center  bg-red-500 p-3 font-medium text-gray hover:bg-opacity-90 border dark:border-stroke  border-strokedark"
                                >
                                    <Trash2 />
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </DashboardLayoutUser>
    );
};
export default DetailId;
