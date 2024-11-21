import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { router } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Verifikasi = ({ report }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [status, setStatus] = useState(report.status);

    const listStatus = [
        { id: 1, name: "Menunggu Persetujuan" },
        { id: 2, name: "Disetujui" },
    ];

    const handleVerifikasiReport = (e) => {
        e.preventDefault();
        setIsLoading(true);

        router.patch(
            `/admin-report-verify/${report.id}`,
            {
                status: status,
            },
            {
                onSuccess: () => {
                    setIsLoading(false);
                    setIsOpen(false);
                    MySwal.fire({
                        icon: "success",
                        title: "Data Berhasil Diubah.",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    router.visit(`/admin-report-user/${report.uuid}`);
                },
            }
        );
    };
    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="flex rounded-lg justify-center  bg-primary p-3 font-medium text-gray hover:bg-opacity-90 border dark:border-stroke  border-strokedark"
            >
                Verifikasi
            </button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <form
                        onSubmit={handleVerifikasiReport}
                        className="space-y-4"
                    >
                        <DialogHeader>
                            <DialogTitle>
                                Verifikasi Report{" "}
                                <span className="text-primary capitalize">
                                    {report.user.name}
                                </span>
                            </DialogTitle>
                            <DialogDescription>
                                Lakukan perubahan pada data{" "}
                                <span className="capitalize text-primary">
                                    {report.title}
                                </span>{" "}
                                di sini. Klik simpan setelah selesai.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex items-center gap-5">
                                <InputLabel
                                    htmlFor="status"
                                    className="text-right"
                                >
                                    Status
                                </InputLabel>
                                <select
                                    className="w-full appearance-none rounded  bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-primary dark:active:border-primary dark:bg-form-input"
                                    id="status"
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                >
                                    <option value={report.status} disabled>
                                        Pilih Status
                                    </option>
                                    {listStatus.map((status) => (
                                        <option
                                            key={status.id}
                                            value={status.name}
                                        >
                                            {status.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <DialogFooter>
                            <button
                                className="bg-primary w-[100px] py-2 rounded-md text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? "Verifying..." : "Verifikasi"}
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default Verifikasi;
