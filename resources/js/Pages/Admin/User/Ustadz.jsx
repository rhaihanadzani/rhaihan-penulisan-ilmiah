import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import { router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CreateUstadz = (props) => {
    const [type, setType] = useState("");
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { errors } = usePage().props;

    const MySwal = withReactContent(Swal);

    const types = [
        {
            id: 1,
            name: "Admin",
        },
        {
            id: 2,
            name: "Ustadz",
        },
    ];

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setEmail((prevEmail) => prevEmail || "");
            setPassword((prevPassword) => prevPassword || "");
            setType((prevType) => prevType || "");
            setNama((prevNama) => prevNama || "");
            MySwal.fire({
                title: "Tolong Lengkapi Data!",
                icon: "error",
                html: '<button id="closeButton" class="swal2-confirm swal2-styled" style="background-color: #d33;">Oke</button>',
                showConfirmButton: false, // Hide the default confirm button
                didRender: () => {
                    // Attach a click event listener to the custom button
                    document
                        .getElementById("closeButton")
                        .addEventListener("click", () => {
                            MySwal.close();
                        });
                },
            });
        }
    }, [errors]);

    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            type,
            email,
            nama,
            password,
        };

        router.post("/admin/user/ustadz", data, {
            onSuccess: () => {
                router.visit(`/admin/user/ustadz`);
                MySwal.fire({
                    title: "Berhasil Membuat Pengurus",
                    icon: "success",
                    confirmButtonColor: "#10B981",
                    html:
                        '<div id="customButtons">' +
                        '<button id="closeButton" class="swal2-cancel swal2-styled" style="background-color: #d33;">Close</button>' +
                        "</div>",
                    showConfirmButton: false,
                    showCancelButton: false,
                    didRender: () => {
                        document
                            .getElementById("closeButton")
                            .addEventListener("click", () => {
                                MySwal.close();
                            });
                    },
                });
            },
        });
    };

    return (
        <DashboardLayoutAdmin>
            <form
                onSubmit={handleRegister}
                className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background  mx-auto"
            >
                <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Tambah Pengurus
                    </h3>
                </div>
                <div className="flex flex-col gap-5 p-6">
                    <div className="flex gap-5">
                        <div className="w-[70%]">
                            <InputLabel value={"Nama"} />
                            <input
                                onChange={(e) => setNama(e.target.value)}
                                type="text"
                                placeholder="Nama Pengurus"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="w-[30%]">
                            <InputLabel value={"Role"} />
                            <select
                                id="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className={` w-full appearance-none rounded border border-stroke bg-transparent py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                            >
                                <option value="" disabled>
                                    Pilih Role
                                </option>
                                {types.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <InputLabel value={"Email"} />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email Santri"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <InputLabel value={"Password"} />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password Santri"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </DashboardLayoutAdmin>
    );
};
export default CreateUstadz;
