import DashboardLayout from "@/Layouts/Dashboard";
import { formatDate } from "@/lib/utils";
import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Pencil1Icon } from "@radix-ui/react-icons";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import NoData from "@/Components/NoData";

const Detail = (props) => {
    // state view
    const [viewKelas, setViewKelas] = useState("");
    const [viewPelajaran, setViewPelajaran] = useState("");
    const [viewBulan, setViewBulan] = useState("");
    const [viewTahun, setViewTahun] = useState("");
    const [isErrorView, setIsErrorView] = useState(false);

    const { auth } = usePage().props;

    const sortedAbsen = [...props.absen].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );

    const handleViewAbsen = (e) => {
        e.preventDefault();
        if (
            viewPelajaran === "" ||
            viewKelas === "" ||
            viewBulan === "" ||
            viewTahun === ""
        ) {
            setIsErrorView(true);
            return;
        }
        router.visit(
            `/detail-absensi/${viewPelajaran}/${viewKelas}/${viewBulan}/${viewTahun}`
        );
    };

    // Function to group sortedAbsen by created_at
    const groupedAbsenByCreatedAt = () => {
        const groupedAbsen = {};
        sortedAbsen.forEach((abs) => {
            const createdAtDate = formatDate(abs.created_at);
            if (!groupedAbsen[createdAtDate]) {
                groupedAbsen[createdAtDate] = [];
            }
            groupedAbsen[createdAtDate].push(abs);
        });
        return groupedAbsen;
    };

    const Layout =
        auth.user.type === "Admin" ? DashboardLayoutAdmin : DashboardLayout;

    return (
        <Layout>
            <div className="flex flex-col md:flex-row gap-5 items-center">
                {/* Filter By Input */}
                <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background p-5 md:w-[60%] w-full">
                    <form onSubmit={handleViewAbsen} className="space-y-5">
                        <div className="border-b border-stroke py-2 dark:border-strokedark">
                            <h3 className="font-semibold text-black dark:text-white">
                                Lihat Absensi
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="pelajaran"
                                        className="mb-3 block text-black dark:text-white"
                                    >
                                        Pelajaran
                                    </label>
                                    <div className="bg-white dark:bg-form-input shadow-lg">
                                        <select
                                            id="pelajaran"
                                            value={viewPelajaran}
                                            onChange={(e) =>
                                                setViewPelajaran(e.target.value)
                                            }
                                            className={`w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                        >
                                            <option value="" disabled>
                                                Pilih Mata Pelajaran
                                            </option>
                                            {props.pelajarans.map(
                                                (pelajaran) => (
                                                    <option
                                                        key={pelajaran.uuid}
                                                        value={pelajaran.uuid}
                                                    >
                                                        {pelajaran.nama}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="kelas"
                                        className="mb-3 block text-black dark:text-white"
                                    >
                                        Kelas
                                    </label>

                                    <div className="bg-white dark:bg-form-input shadow-lg">
                                        <select
                                            id="kelas"
                                            value={viewKelas}
                                            onChange={(e) =>
                                                setViewKelas(e.target.value)
                                            }
                                            className={`w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                        >
                                            <option value="" disabled>
                                                Kelas
                                            </option>
                                            {props.kelases.map((kelas) => (
                                                <option
                                                    key={kelas.uuid}
                                                    value={kelas.uuid}
                                                >
                                                    {kelas.nama}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="bulan"
                                        className="mb-3 block text-black dark:text-white"
                                    >
                                        Bulan
                                    </label>

                                    <div className="bg-white dark:bg-form-input shadow-lg">
                                        <select
                                            id="bulan"
                                            value={viewBulan}
                                            onChange={(e) =>
                                                setViewBulan(e.target.value)
                                            }
                                            className={`w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                        >
                                            <option value="" disabled>
                                                Pilih Bulan
                                            </option>
                                            {props.bulans.map((bulan) => (
                                                <option
                                                    key={bulan.uuid}
                                                    value={bulan.uuid}
                                                >
                                                    {bulan.nama}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="tahun"
                                        className="mb-3 block text-black dark:text-white"
                                    >
                                        Tahun
                                    </label>

                                    <div className="bg-white dark:bg-form-input shadow-lg">
                                        <select
                                            id="tahun"
                                            value={viewTahun}
                                            onChange={(e) =>
                                                setViewTahun(e.target.value)
                                            }
                                            className={`w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                        >
                                            <option value="" disabled>
                                                Pilih Tahun
                                            </option>
                                            {props.tahuns.map((year) => (
                                                <option
                                                    key={year.uuid}
                                                    value={year.uuid}
                                                >
                                                    {year.nama}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <button
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6 "
                                type="submit"
                            >
                                Lihat Absen
                            </button>
                        </div>
                        {isErrorView && (
                            <p className="text-red-500 capitalize">
                                * Isi semua Kolom
                            </p>
                        )}
                    </form>
                </div>
                {/* Initialisasi Data */}
                <div className="md:w-[40%] w-full flex flex-col gap-5 p-5">
                    <h1 className="text-xl font-bold ">Detail Absen :</h1>
                    <div className="space-y-2">
                        <p>
                            Nama Pelajaran <span className="">:</span>{" "}
                            <span className="font-semibold text-primary capitalize">
                                {props.pelajaran?.nama}
                            </span>
                        </p>
                        <p>
                            Tahun Ajaran<span className="pl-[27px]">:</span>{" "}
                            <span className="font-semibold text-primary capitalize">
                                {" "}
                                {props.tahun?.nama}
                            </span>
                        </p>
                        <p>
                            Bulan <span className="pl-[85px]">:</span>{" "}
                            <span className="font-semibold text-primary capitalize">
                                {props.bulan?.nama}
                            </span>
                        </p>
                        <p>
                            Kelas <span className="pl-[89px]">:</span>{" "}
                            <span className="font-semibold text-primary capitalize">
                                {props.kelas?.nama}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Data Absen */}

            {props.absen.length === 0 ? (
                <NoData />
            ) : (
                <div className={`w-full gap-5 mt-10 `}>
                    {Object.keys(groupedAbsenByCreatedAt()).map(
                        (createdAtDate, i) => (
                            <div
                                key={i}
                                className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1"
                            >
                                <div className="max-w-full overflow-x-auto">
                                    <div className="border-b border-stroke py-2 dark:border-strokedark">
                                        <h3 className="font-semibold text-black dark:text-white">
                                            Tanggal {createdAtDate}
                                        </h3>
                                    </div>
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                                    Nama
                                                </th>
                                                <th className="min-w-[110px] py-4 px-4 font-medium text-black dark:text-white">
                                                    Keterangan
                                                </th>
                                                {props.pelajaran.nama ===
                                                    "Pelajaran 2" ||
                                                props.pelajaran.nama ===
                                                    "Pelajaran 3" ? (
                                                    <>
                                                        <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white">
                                                            Dari Surah - Ayat
                                                        </th>
                                                        <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white">
                                                            Ke Surah - Ayat
                                                        </th>
                                                        <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white">
                                                            Juz
                                                        </th>
                                                    </>
                                                ) : null}
                                                <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {groupedAbsenByCreatedAt()[
                                                createdAtDate
                                            ].map((abs, i) => (
                                                <tr key={i}>
                                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                        {abs.user?.name}
                                                    </td>
                                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                        <div
                                                            className={`${
                                                                abs.keterangan ===
                                                                "hadir"
                                                                    ? "bg-green-500"
                                                                    : abs.keterangan ===
                                                                      "izin"
                                                                    ? "bg-yellow-500"
                                                                    : "bg-red-500"
                                                            } text-white px-2 rounded-sm w-[70px] h-[30px] flex items-center justify-center`}
                                                        >
                                                            <h2 className="capitalize">
                                                                {abs.keterangan}
                                                            </h2>
                                                        </div>
                                                    </td>
                                                    {props.pelajaran.nama ===
                                                        "Pelajaran 2" ||
                                                    props.pelajaran.nama ===
                                                        "Pelajaran 3" ? (
                                                        <>
                                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                                {abs.from_surah}{" "}
                                                                -{" "}
                                                                {abs.from_ayat}
                                                            </td>
                                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                                {abs.to_surah} -{" "}
                                                                {abs.to_ayat}
                                                            </td>
                                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                                Juz {abs.juz}
                                                            </td>
                                                        </>
                                                    ) : null}
                                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                router.visit(
                                                                    `/edit-absensi/${abs.uuid}`
                                                                )
                                                            }
                                                            className="px-3 py-2 rounded-lg text-white dark:bg-meta-4 bg-gray-2 shadow-sm dark:shadow-gray-2 shadow-meta-4"
                                                        >
                                                            <Pencil1Icon className="text-graydark dark:text-gray" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </Layout>
    );
};

export default Detail;
