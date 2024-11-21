import InputLabel from "@/Components/InputLabel";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import ListHolidays from "./View/ListHolidays";

const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
};

const Index = () => {
    const { holidays, errors } = usePage().props;
    const [enabled, setEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [lastHoliday, setLastHoliday] = useState("");

    const handleCreateHolidays = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formattedLastHoliday = formatDate(lastHoliday);
        const data = {
            name: title,
            last_holiday: formattedLastHoliday,
            is_active: enabled,
        };
        router.post("/admin-create-holidays", data, {
            onSuccess: () => {
                setIsLoading(false);
                setTitle("");
                setLastHoliday("");
                setEnabled(false);
            },
        });
    };

    return (
        <DashboardLayoutAdmin>
            <div>
                <form
                    onSubmit={handleCreateHolidays}
                    className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background mx-auto"
                >
                    <div className="border-b border-stroke py-2 px-5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Buat Liburan Santri
                        </h3>
                    </div>
                    <div className="p-6 flex justify-between gap-2">
                        <div className="space-y-2 w-[80%]">
                            <InputLabel value={"Nama"} />
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                value={title}
                                placeholder="Nama Liburan"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
                            />
                            {errors.title && (
                                <span className="text-red-500">
                                    {errors.title}
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <InputLabel value={"Akhir Libur"} />
                            <input
                                onChange={(e) => setLastHoliday(e.target.value)}
                                value={lastHoliday}
                                type="date"
                                placeholder="Nama Liburan"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
                            />
                        </div>
                    </div>
                    <div className="gap-3 px-6 pb-6 flex items-center justify-start">
                        <label
                            htmlFor="toggle1"
                            className="flex cursor-pointer select-none items-center"
                        >
                            <div className="relative">
                                <input
                                    checked={enabled}
                                    type="checkbox"
                                    id="toggle1"
                                    className="sr-only"
                                    onChange={() => {
                                        setEnabled(!enabled);
                                    }}
                                />
                                <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                                <div
                                    className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                                        enabled &&
                                        "!right-1 !translate-x-full !bg-primary"
                                    }`}
                                ></div>
                            </div>
                        </label>
                        <InputLabel value={"Status Active"} />
                    </div>
                    <div className="px-6 pb-6">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                        >
                            {isLoading ? "Loading..." : "Buat Liburan"}
                        </button>
                    </div>
                </form>
                <div>
                    <ListHolidays holidays={holidays} />
                </div>
            </div>
        </DashboardLayoutAdmin>
    );
};
export default Index;
