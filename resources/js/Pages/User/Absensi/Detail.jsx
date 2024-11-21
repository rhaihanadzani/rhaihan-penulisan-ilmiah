import NoData from "@/Components/NoData";
import { Button } from "@/Components/ui/button";
import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import { formatDate } from "@/lib/utils";
import { router } from "@inertiajs/react";
import { useState } from "react";

const Detail = (props) => {
    const [viewPelajaran, setViewPelajaran] = useState("");
    const [viewBulan, setViewBulan] = useState("");
    const [viewTahun, setViewTahun] = useState("");
    const [isErrorView, setIsErrorView] = useState(false);
    const handleViewAbsen = (e) => {
        e.preventDefault();
        if (viewPelajaran === "" || viewBulan === "" || viewTahun === "") {
            setIsErrorView(true);
            return;
        }
        router.visit(
            `/santri-detail-absensi/${viewPelajaran}/${viewBulan}/${viewTahun}`
        );
    };

    return (
        <DashboardLayoutUser>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background pb-2.5">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Lihat Absensi
                    </h3>
                </div>
                <form onSubmit={handleViewAbsen} className="px-7 py-5">
                    <div className="flex gap-5">
                        <div>
                            <label
                                htmlFor="pelajaran"
                                className="mb-3 block text-black dark:text-white"
                            >
                                Pilih Mata Pelajaran
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
                                    {props.pelajarans.map((pelajaran) => (
                                        <option
                                            key={pelajaran.uuid}
                                            value={pelajaran.uuid}
                                        >
                                            {pelajaran.nama}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="bulan"
                                className="mb-3 block text-black dark:text-white"
                            >
                                Pilih Bulan
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
                        <div>
                            <label
                                htmlFor="tahun"
                                className="mb-3 block text-black dark:text-white"
                            >
                                Pilih Tahun
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
                    <div className="w-full mt-5">
                        <Button
                            className="inline-flex items-center justify-center rounded-md  py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            type="submit"
                        >
                            Lihat Absen
                        </Button>
                    </div>
                    {isErrorView && (
                        <p className="text-red-500">Isi semua Kolom</p>
                    )}
                </form>
            </div>
            <div>
                <h1 className="text-xl text-primary font-bold my-5">
                    List Kehadiran
                </h1>

                {/* List Absensi */}
                {props.absen && props.absen.length > 0 ? (
                    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1">
                        <div className="max-w-full overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead className="table-header-group">
                                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                            Tanggal
                                        </th>
                                        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                            Pelajaran
                                        </th>
                                        <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                            Status Keterangan
                                        </th>
                                        <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                            Dari Surah - Ayat
                                        </th>
                                        <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                            Ke Surah - Ayat
                                        </th>
                                        <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                            Juz
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.absen.map((absen, i) => {
                                        return (
                                            <tr
                                                key={i}
                                                className="border-b border-stroke dark:border-strokedark"
                                            >
                                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                    {formatDate(
                                                        absen.created_at
                                                    )}
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                    {absen.pelajaran.nama}
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                    <div
                                                        className={`${
                                                            absen.keterangan ===
                                                            "hadir"
                                                                ? "bg-green-500"
                                                                : absen.keterangan ===
                                                                  "izin"
                                                                ? "bg-yellow-500"
                                                                : "bg-red-500"
                                                        } text-white px-2 rounded-sm w-[70px] h-[30px] flex items-center justify-center`}
                                                    >
                                                        <h2 className="capitalize">
                                                            {absen.keterangan}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4  dark:border-strokedark">
                                                    {absen.from_surah &&
                                                    absen.from_ayat
                                                        ? absen.from_surah +
                                                          " - " +
                                                          absen.from_ayat
                                                        : "-"}
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4  dark:border-strokedark">
                                                    {absen.from_surah &&
                                                    absen.from_ayat
                                                        ? absen.to_surah +
                                                          " - " +
                                                          absen.to_ayat
                                                        : "-"}
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark ">
                                                    {absen.juz && absen.juz
                                                        ? " Juz " + absen.juz
                                                        : "-"}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div>
                        <NoData />
                    </div>
                )}
            </div>
        </DashboardLayoutUser>
    );
};
export default Detail;
