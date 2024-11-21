import InputLabel from "@/Components/InputLabel";
import { Button } from "@/Components/ui/button";
import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Create = () => {
    const { url } = usePage();
    const { holidays, errors } = usePage().props;
    const [isLoading, setIsLoading] = useState(false);

    const MySwal = withReactContent(Swal);

    let uuidHoliday = url.split("/").slice()[2];
    uuidHoliday = uuidHoliday.replace(/\?.*$/, "");

    const [isChecked, setIsChecked] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleCreateReport = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("image", image);

        const data = {
            title: title,
            description: description,
            image: formData.get("image"),
            is_checked: isChecked,
            uuid_holiday: uuidHoliday,
        };

        router.post("/santri-create-report", data, {
            forceFormData: true,

            onError: () => {
                setIsLoading(false);
            },

            onSuccess: () => {
                setIsLoading(false);
                router.visit(`/santri-report/${uuidHoliday}`);

                MySwal.fire({
                    title: "Laporan Berhasil!",
                    icon: "success",
                    confirmButtonColor: "#10B981",
                    html:
                        '<div id="customButtons">' +
                        '<button id="closeButton" class="swal2-cancel swal2-styled" style="background-color: #d33;">Close</button>' +
                        '<button id="redirectButton" class="swal2-confirm swal2-styled" style="background-color: #10B981; margin-left: 10px;">Lihat Laporan</button>' +
                        "</div>",
                    showConfirmButton: false,
                    showCancelButton: false,
                    didRender: () => {
                        document
                            .getElementById("closeButton")
                            .addEventListener("click", () => {
                                MySwal.close();
                            });
                        document
                            .getElementById("redirectButton")
                            .addEventListener("click", () => {
                                MySwal.close();
                                router.visit(
                                    `/santri-view-report/${uuidHoliday}`
                                );
                            });
                    },
                });
            },
        });
    };
    return (
        <DashboardLayoutUser>
            <div className="">
                <h1 className="text-xl text-primary font-bold">
                    Laporan Liburan - {holidays.name}
                </h1>
                <form
                    onSubmit={handleCreateReport}
                    className="mt-10 rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background w-[95%] md:max-w-[70%] mx-auto"
                >
                    <div className="p-6 space-y-5">
                        <div className="space-y-2">
                            <InputLabel value={"Judul"} />
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Judul Laporan"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
                            />
                            {errors.title && (
                                <span className="text-red-500">
                                    {errors.title}
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <InputLabel value={"Deskripsi"} />
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder="Ceritakan Liburan Hari Ini (Minimum 50 kata) - (Maksimum 255 kata)"
                                className="w-full h-[150px] rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white "
                            />
                            {errors.description && (
                                <span className="text-red-500">
                                    {errors.description}
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <InputLabel value={"Upload Bukti Laporan"} />
                            <div
                                id="FileUpload"
                                className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                            >
                                <input
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                />
                                <div className="flex flex-col items-center justify-center space-y-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-background">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                                fill="#16A349"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                                fill="#16A349"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                                fill="#16A349"
                                            />
                                        </svg>
                                    </span>
                                    <p>
                                        <span className="text-primary">
                                            Click to upload
                                        </span>{" "}
                                        or drag and drop
                                    </p>
                                    <p className="mt-1.5">
                                        SVG, PNG, JPG or GIF
                                    </p>
                                    <p>(max, 800 X 800px)</p>
                                </div>
                            </div>
                            {errors.image && (
                                <p className="text-red-500">{errors.image}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="isMurajaah"
                                className="flex cursor-pointer select-none items-center"
                            >
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="isMurajaah"
                                        className="sr-only"
                                        onChange={() => {
                                            setIsChecked(!isChecked);
                                        }}
                                    />
                                    <div
                                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded border border-stroke ${
                                            isChecked &&
                                            "border-primary bg-gray dark:bg-transparent"
                                        }`}
                                    >
                                        <span
                                            className={`opacity-0 ${
                                                isChecked && "!opacity-100"
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
                                                    fill="#16A349"
                                                    stroke="#16A349"
                                                    strokeWidth="0.4"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                Apakah Hari Ini Murajaah?
                            </label>
                        </div>
                        <div>
                            <Button
                                disabled={isLoading}
                                type="submit"
                                className="flex w-full justify-center rounded p-3 font-medium text-gray hover:bg-opacity-90"
                            >
                                {isLoading ? "Loading..." : "Buat Laporan"}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayoutUser>
    );
};
export default Create;
