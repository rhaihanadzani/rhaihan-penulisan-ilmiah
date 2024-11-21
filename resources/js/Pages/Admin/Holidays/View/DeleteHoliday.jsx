import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { router } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Trash2 } from "lucide-react";

const MySwal = withReactContent(Swal);

const DialogDeleteHoliday = ({ holiday }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEditHoliday = (e) => {
        e.preventDefault();

        setIsLoading(true);

        router.delete(`/admin-delete-holidays/${holiday.id}`, {
            onSuccess: () => {
                MySwal.fire({
                    icon: "success",
                    title: "Liburan Berhasil Dihapus.",
                    showConfirmButton: false,
                    timer: 1500,
                });

                setIsLoading(false);
                setIsOpen(false);
                router.visit("/admin-report");
            },
        });
    };
    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <Trash2
                    size={25}
                    name="delete"
                    className="hover:text-red-500 transition-all duration-200"
                />
            </button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleEditHoliday} className="space-y-4">
                        <DialogHeader>
                            <DialogTitle>Delete Holiday</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex items-cent">
                                <h1>
                                    Apakah Anda yakin ingin menghapus hari libur
                                    ini?{" "}
                                    <span className="capitalize text-red-500">
                                        " {holiday.name} "
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <DialogFooter>
                            <button
                                disabled={isLoading}
                                className="bg-red-500 w-[100px] py-3 rounded-md text-white"
                            >
                                {isLoading ? "Deleting..." : "Delete"}
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogDeleteHoliday;
