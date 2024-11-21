import { UserRoundCogIcon, Mail, ScanFace, UploadIcon } from "lucide-react";
import ChangePassword from "./ChangePassword";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const MySwal = withReactContent(Swal);

const LengkapiData = ({ isLoading, setIsLoading, dataUser }) => {
    const [phone, setPhone] = useState(dataUser.profile.phone);
    const [bio, setBio] = useState(dataUser.profile.bio);
    const [image, setImage] = useState(null);

    const [isDataSend, setIsDataSend] = useState(false);

    const onSubmitSetting = async (e) => {
        e.preventDefault();
        setIsDataSend(true);

        const formData = new FormData();
        formData.append("phone", phone);
        formData.append("bio", bio);

        if (image) {
            formData.append("image", image);
        }

        // Tambahkan `_method: 'PATCH'` untuk emulasi metode PATCH
        formData.append("_method", "PATCH");

        router.post(`/settings-update-data/${dataUser.profile.id}`, formData, {
            onSuccess: () => {
                setIsLoading(false);
                setIsDataSend(false);
                MySwal.fire({
                    title: "Berhasil",
                    text: "Profile berhasil diubah.",
                    icon: "success",
                });
            },
            onError: () => {
                setIsLoading(false);
                setIsDataSend(false);
                MySwal.fire({
                    title: "Gagal",
                    text: "Terjadi kesalahan saat mengirim data.",
                    icon: "error",
                });
            },
        });
    };

    return (
        <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 xl:col-span-3">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Personal Information
                        </h3>
                    </div>
                    <div className="p-7">
                        <form onSubmit={onSubmitSetting}>
                            {/* Nama */}
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="fullName"
                                >
                                    Nama
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-[12px]">
                                        <UserRoundCogIcon className="text-primary" />
                                    </span>
                                    <input
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary disabled:opacity-50"
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        disabled={true}
                                        defaultValue={dataUser.name}
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="emailAddress"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-[12px]">
                                        <Mail className="text-primary" />
                                    </span>
                                    <input
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary disabled:opacity-50"
                                        type="email"
                                        name="emailAddress"
                                        id="emailAddress"
                                        placeholder="devidjond45@gmail.com"
                                        value={dataUser.email}
                                        disabled={true}
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="phone"
                                >
                                    Number WhatsApp
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-[9px]">
                                        <svg
                                            fill="#16a349"
                                            height="25px"
                                            width="25px"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 308 308"
                                            xmlSpace="preserve"
                                        >
                                            <g id="XMLID_468_">
                                                <path
                                                    id="XMLID_469_"
                                                    d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
        c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
        c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
        c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
        c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
        c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
        c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
        c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
        c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
        C233.168,179.508,230.845,178.393,227.904,176.981z"
                                                />
                                                <path
                                                    id="XMLID_470_"
                                                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
        c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
        c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
         M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
        l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
        c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
        C276.546,215.678,222.799,268.994,156.734,268.994z"
                                                />
                                            </g>
                                        </svg>
                                    </span>

                                    <input
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary disabled:opacity-50"
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        placeholder="0812 - 3456 - 7890"
                                        defaultValue={phone ? phone : ""}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="bio"
                                >
                                    BIO
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-4">
                                        <ScanFace className="text-primary" />
                                    </span>

                                    <textarea
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        name="bio"
                                        id="bio"
                                        rows={6}
                                        placeholder="Write your bio here"
                                        value={bio ? bio : ""}
                                        onChange={(e) => setBio(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>

                            {/* Upload Image */}
                            <div className="mb-5">
                                <label
                                    htmlFor="imageUser"
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                >
                                    Photo Profile
                                </label>
                                <div
                                    id="imageUser"
                                    className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7"
                                >
                                    <input
                                        id="imageUser"
                                        onChange={(e) =>
                                            setImage(e.target.files[0])
                                        }
                                        defaultValue={image ? image : null}
                                        type="file"
                                        accept="image/*"
                                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                    />
                                    <div className="flex flex-col items-center justify-center space-y-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                            <UploadIcon className="text-primary" />
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
                            </div>

                            <div className="flex justify-end gap-4.5">
                                <button
                                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                                    type="submit"
                                    disabled={isDataSend}
                                >
                                    {isDataSend ? "Loading..." : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ChangePassword
                dataUser={dataUser}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </div>
    );
};
export default LengkapiData;
