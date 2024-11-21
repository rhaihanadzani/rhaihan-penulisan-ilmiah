import DashboardLayout from "@/Layouts/Dashboard";
import { router, usePage, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { dataSurah, dataJuzz } from "./dataAbsenTahfidz";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../../Components/ui/dialog";

const CreateAbsensi = (props) => {
    const { auth } = usePage().props;
    const { bulan, santris, errors, tahun } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isBulan, setIsBulan] = useState("");
    const [isTahun, setIsTahun] = useState("");
    const [absensi, setAbsensi] = useState(
        santris.map((santri) => ({
            santri_id: santri.id,
            keterangan: "",
            from_surah: "",
            to_surah: "",
            from_ayat: "",
            to_ayat: "",
            juz: "",
        }))
    );

    const statusKeterangan = ["hadir", "izin", "ghoib"];

    const MySwal = withReactContent(Swal);

    const [redirectBulan, setRedirectBulan] = useState("");
    const [redirectTahun, setRedirectTahun] = useState("");
    const [isBulanNama, setIsBulanNama] = useState("");
    const [isTahunNama, setIsTahunNama] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        const data = {
            bulan: isBulan,
            tahun: isTahun,
            absensi,
        };
        router.post(
            `/store-absen/${props.pelajaran.id}/${props.kelas.id}`,
            data,
            {
                onSuccess: () => {
                    setIsLoading(false);
                    router.visit(
                        `/absen-tasnim/${props.pelajaran.uuid}/${props.kelas.uuid}`
                    );
                    MySwal.fire({
                        title: "Absensi Berhasil!",
                        icon: "success",
                        confirmButtonColor: "#10B981",
                        html:
                            '<div id="customButtons">' +
                            '<button id="closeButton" class="swal2-cancel swal2-styled" style="background-color: #d33;">Close</button>' +
                            '<button id="redirectButton" class="swal2-confirm swal2-styled" style="background-color: #10B981; margin-left: 10px;">Lihat Absensi</button>' +
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
                                    window.location.href = `/detail-absensi/${props.pelajaran.uuid}/${props.kelas.uuid}/${redirectBulan}/${redirectTahun}`;
                                });
                        },
                    });
                },
            }
        );
    };

    const handleChangeSelect = (santri_id, key, value) => {
        setAbsensi((prevAbsensi) =>
            prevAbsensi.map((s) =>
                s.santri_id === santri_id ? { ...s, [key]: value } : s
            )
        );
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setAbsensi((prevAbsensi) =>
                prevAbsensi.map((s) => ({
                    ...s,
                    keterangan: s.keterangan || "",
                }))
            );
            MySwal.fire({
                title: "Tolong Lengkapi Data!",
                icon: "error",
                html: '<button id="closeButton" class="swal2-confirm swal2-styled" style="background-color: #d33;">Oke</button>',
                showConfirmButton: false,
                didRender: () => {
                    document
                        .getElementById("closeButton")
                        .addEventListener("click", () => {
                            MySwal.close();
                        });
                },
            });
        }
    }, [errors]);

    const Layout =
        auth.user.type === "Admin" ? DashboardLayoutAdmin : DashboardLayout;

    return (
        <Layout>
            <Head title={`Absensi - ${props.pelajaran.nama}`} />
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark rounded-lg">
                <h1 className="text-xl font-bold">
                    Absensi{" "}
                    <span className="text-primary">
                        {" "}
                        : {props.pelajaran.nama}
                    </span>
                </h1>
                <p className="text-lg font-semibold capitalize ">
                    Kelas{" "}
                    <span className="text-primary pl-[32px]">
                        : {props.kelas.nama}
                    </span>
                </p>
            </div>
            <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background  p-5 space-y-5 mt-10">
                <div className="gap-4 flex">
                    <div className="flex flex-col w-1/3">
                        <label
                            htmlFor="bulan"
                            className="mb-3 block text-black dark:text-white"
                        >
                            Bulan
                        </label>
                        <select
                            name="bulan"
                            id="bulan"
                            className="w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                            value={isBulan}
                            onChange={(e) => {
                                const selectedBulan = bulan.find(
                                    (b) => b.id.toString() === e.target.value
                                );
                                setIsBulan(e.target.value);
                                setIsBulanNama(selectedBulan?.nama || "");
                                setRedirectBulan(selectedBulan?.uuid || "");
                            }}
                        >
                            <option value="" disabled>
                                Untuk Bulan
                            </option>
                            {bulan.map((bulans) => (
                                <option
                                    key={bulans.id}
                                    bulan={bulans.nama}
                                    value={bulans.id}
                                >
                                    {bulans.nama}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <label
                            htmlFor="minggu"
                            className="mb-3 block text-black dark:text-white"
                        >
                            Tahun
                        </label>
                        <select
                            name="tahun"
                            id="tahun"
                            className="w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                            value={isTahun}
                            onChange={(e) => {
                                const selectedTahun = tahun.find(
                                    (t) => t.id.toString() === e.target.value
                                );
                                setIsTahunNama(selectedTahun?.nama || "");
                                setIsTahun(e.target.value);
                                setRedirectTahun(selectedTahun?.uuid || "");
                            }}
                        >
                            <option value="" disabled>
                                Pilih Tahun
                            </option>
                            {tahun.map((year) => (
                                <option key={year.id} value={year.id}>
                                    {year.nama}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="table-header-group">
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Nama
                                    </th>
                                    <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                        Status Keterangan
                                    </th>
                                    {(props.pelajaran.nama === "Pelajaran 2" ||
                                        props.pelajaran.nama ===
                                            "Pelajaran 3") && (
                                        <>
                                            <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white">
                                                Dari Surah
                                            </th>
                                            <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white">
                                                Ke Surah
                                            </th>
                                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                                Dari Ayat
                                            </th>
                                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                                Ke Ayat
                                            </th>
                                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                                Juz
                                            </th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="pt-10">
                                {santris.map((santri) => (
                                    <tr key={santri.id}>
                                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                            <p className="font-medium text-black dark:text-white">
                                                {santri.name}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <select
                                                className="w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                                value={
                                                    absensi.find(
                                                        (a) =>
                                                            a.santri_id ===
                                                            santri.id
                                                    )?.keterangan || ""
                                                }
                                                onChange={(e) =>
                                                    handleChangeSelect(
                                                        santri.id,
                                                        "keterangan",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="" disabled>
                                                    Status Keterangan
                                                </option>
                                                {statusKeterangan.map(
                                                    (status) => (
                                                        <option
                                                            value={status}
                                                            key={status}
                                                            className="text-body dark:text-bodydark"
                                                        >
                                                            {status}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </td>
                                        {(props.pelajaran.nama ===
                                            "Pelajaran 2" ||
                                            props.pelajaran.nama ===
                                                "Pelajaran 3") && (
                                            <>
                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    <select
                                                        className="w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                                        value={
                                                            absensi.find(
                                                                (a) =>
                                                                    a.santri_id ===
                                                                    santri.id
                                                            )?.from_surah || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleChangeSelect(
                                                                santri.id,
                                                                "from_surah",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Dari Surah
                                                        </option>
                                                        {dataSurah.map(
                                                            (surah) => (
                                                                <option
                                                                    key={
                                                                        surah.id
                                                                    }
                                                                    value={
                                                                        surah.surah
                                                                    }
                                                                >
                                                                    {
                                                                        surah.surah
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    <select
                                                        className="w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                                        value={
                                                            absensi.find(
                                                                (a) =>
                                                                    a.santri_id ===
                                                                    santri.id
                                                            )?.to_surah || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleChangeSelect(
                                                                santri.id,
                                                                "to_surah",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Ke Surah
                                                        </option>
                                                        {dataSurah.map(
                                                            (surah) => (
                                                                <option
                                                                    key={
                                                                        surah.id
                                                                    }
                                                                    value={
                                                                        surah.surah
                                                                    }
                                                                >
                                                                    {
                                                                        surah.surah
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    <input
                                                        type="text"
                                                        placeholder="Dari Ayat"
                                                        className="w-full rounded border border-stroke bg-transparent py-2 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        value={
                                                            absensi.find(
                                                                (a) =>
                                                                    a.santri_id ===
                                                                    santri.id
                                                            )?.from_ayat || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleChangeSelect(
                                                                santri.id,
                                                                "from_ayat",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    <input
                                                        type="text"
                                                        placeholder="Ke Ayat"
                                                        className="w-full rounded border border-stroke bg-transparent py-2 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        value={
                                                            absensi.find(
                                                                (a) =>
                                                                    a.santri_id ===
                                                                    santri.id
                                                            )?.to_ayat || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleChangeSelect(
                                                                santri.id,
                                                                "to_ayat",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    <select
                                                        className="w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                                        value={
                                                            absensi.find(
                                                                (a) =>
                                                                    a.santri_id ===
                                                                    santri.id
                                                            )?.juz || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleChangeSelect(
                                                                santri.id,
                                                                "juz",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Juz
                                                        </option>
                                                        {dataJuzz.map((juz) => (
                                                            <option
                                                                key={juz.id}
                                                                value={juz.id}
                                                            >
                                                                Juz {juz.juz}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-5">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6"
                    >
                        Buat Absensi
                    </button>
                </div>
            </div>

            {/* Dialog Create */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <DialogHeader>
                            <DialogTitle>Buat Absensi</DialogTitle>
                            <DialogDescription>
                                {" "}
                                Periksa data absen yang anda buat, dan simpan
                                jika data sudah benar{" "}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="text-center">
                            <h1>
                                Buat absensi{" "}
                                <span className="text-primary capitalize">
                                    {props.pelajaran.nama}
                                </span>{" "}
                                Untuk kelas{" "}
                                <span className="text-primary capitalize">
                                    {props.kelas.nama}
                                </span>
                            </h1>
                            {isBulanNama && isTahunNama !== "" ? (
                                <h2>
                                    Pada {isBulanNama} - {isTahunNama}
                                </h2>
                            ) : (
                                <p className="text-red-500">
                                    Anda belum memilih bulan dan tahun
                                </p>
                            )}
                        </div>
                        <DialogFooter>
                            <button
                                disabled={isLoading}
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6 disabled:opacity-75"
                                type="submit"
                            >
                                {isLoading ? "Menyimpan..." : "Simpan"}
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default CreateAbsensi;
