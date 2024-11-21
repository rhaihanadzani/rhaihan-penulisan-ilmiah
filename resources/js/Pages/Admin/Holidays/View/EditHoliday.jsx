import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import InputLabel from "@/Components/InputLabel";
import { router } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FilePenLine } from "lucide-react";

const MySwal = withReactContent(Swal);

const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`;
};
const formatDate2 = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
};
const DialogEditHoliday = ({ holiday }) => {
    const formatLastHoliday = formatDate(holiday.last_holiday);

    const [name, setName] = useState(holiday.name);
    const [lastHoliday, setLastHoliday] = useState(formatLastHoliday);
    const [is_active, setIsActive] = useState(holiday.is_active);

    const handleEditHoliday = (e) => {
        e.preventDefault();
        const lastHolidaySend = formatDate2(lastHoliday);
        router.patch(
            `/admin-edit-holidays/${holiday.id}`,
            {
                name,
                last_holiday: lastHolidaySend,
                is_active,
            },
            {
                onSuccess: () => {
                    MySwal.fire({
                        icon: "success",
                        title: "Data Berhasil Diubah.",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    router.visit("/admin-report");
                },
            }
        );
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button>
                    <FilePenLine
                        size={25}
                        name="edit"
                        className="hover:text-green-500 transition-all duration-200"
                    />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleEditHoliday} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Edit Holiday</DialogTitle>
                        <DialogDescription>
                            Lakukan perubahan pada data liburan di sini. Klik
                            simpan setelah selesai.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <InputLabel htmlFor="name" className="text-right">
                                Name
                            </InputLabel>
                            <input
                                id="name"
                                value={name}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white col-span-3"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <InputLabel
                                htmlFor="last_holiday"
                                className="text-right"
                            >
                                Batas Libur
                            </InputLabel>
                            <input
                                id="last_holiday"
                                value={lastHoliday}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white col-span-3"
                                type="date"
                                onChange={(e) => setLastHoliday(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <InputLabel
                                htmlFor="last_holiday"
                                className="text-right"
                            >
                                Active
                            </InputLabel>
                            <label
                                htmlFor="toggleEdit"
                                className="flex cursor-pointer select-none items-center"
                            >
                                <div className="relative">
                                    <input
                                        checked={is_active}
                                        type="checkbox"
                                        id="toggleEdit"
                                        className="sr-only"
                                        onChange={() => {
                                            setIsActive(!is_active);
                                        }}
                                    />
                                    <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                                    <div
                                        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                                            is_active &&
                                            "!right-1 !translate-x-full !bg-primary"
                                        }`}
                                    ></div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <DialogFooter>
                        <button className="rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-80">
                            Save
                        </button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DialogEditHoliday;
