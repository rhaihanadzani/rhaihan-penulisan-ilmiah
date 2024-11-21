import DashboardLayout from "@/Layouts/Dashboard";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { dataSurah, dataJuzz } from "./dataAbsenTahfidz";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";

const Edit = () => {
    const { absen, auth } = usePage().props;

    const [keterangan, setKeterangan] = useState(absen.keterangan);
    const [fromSurah, setFromSurah] = useState(absen.from_surah);
    const [toSurah, setToSurah] = useState(absen.to_surah);
    const [fromAyat, setFromAyat] = useState(absen.from_ayat);
    const [toAyat, setToAyat] = useState(absen.to_ayat);
    const [juz, setJuz] = useState(absen.juz);

    const valueKeterangan = ["hadir", "izin", "ghoib"];

    const onEditKeterangan = (e) => {
        e.preventDefault();

        const data = {
            keterangan,
            from_surah: fromSurah,
            to_surah: toSurah,
            from_ayat: fromAyat,
            to_ayat: toAyat,
            juz: juz,
        };
        router.patch(`/update-absensi/${absen.id}`, data, {
            onSuccess: () => {
                router.visit(
                    `/detail-absensi/${absen.pelajaran.uuid}/${absen.kelas.uuid}/${absen.bulan.uuid}/${absen.tahun.uuid}`
                );
            },
        });
    };

    const Layout =
        auth.user.type === "Admin" ? DashboardLayoutAdmin : DashboardLayout;
    return (
        <Layout>
            <form onSubmit={onEditKeterangan}>
                <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:pb-1">
                    <div className="border-b border-stroke py-2 dark:border-strokedark">
                        <h3 className="font-semibold text-black dark:text-white">
                            Edit Absensi{" "}
                            <span className="ml-1 text-primary">
                                {absen.user.name}
                            </span>
                        </h3>
                    </div>

                    <div className="max-w-full overflow-x-auto mt-5">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Nama
                                    </th>
                                    <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                                        Status Keterangan
                                    </th>
                                    {(absen.pelajaran.nama === "Pelajaran 2" ||
                                        absen.pelajaran.nama ===
                                            "Pelajaran 3") && (
                                        <>
                                            <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white">
                                                Dari Surah
                                            </th>
                                            <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white">
                                                ke Surah
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
                                <tr>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <input
                                            disabled
                                            value={absen.user.name}
                                            className="w-full rounded border border-stroke bg-transparent py-3 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <select
                                            className="w-full appearance-none rounded border border-stroke bg-transparent py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                            onChange={(e) =>
                                                setKeterangan(e.target.value)
                                            }
                                        >
                                            <option value={absen.keterangan}>
                                                {absen.keterangan}
                                            </option>
                                            {valueKeterangan.map((value) => (
                                                <option
                                                    key={value}
                                                    value={value}
                                                >
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    {(absen.pelajaran.nama === "Pelajaran 2" ||
                                        absen.pelajaran.nama ===
                                            "Pelajaran 3") && (
                                        <>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <select
                                                    className="w-full appearance-none rounded border border-stroke bg-transparent py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                                    onChange={(e) =>
                                                        setFromSurah(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option
                                                        value={absen.from_surah}
                                                    >
                                                        {absen.from_surah}
                                                    </option>
                                                    {dataSurah.map((surah) => (
                                                        <option
                                                            key={surah.id}
                                                            value={surah.surah}
                                                        >
                                                            {surah.surah}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <select
                                                    className="w-full appearance-none rounded border border-stroke bg-transparent py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                                    onChange={(e) =>
                                                        setToSurah(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option
                                                        value={absen.to_surah}
                                                    >
                                                        {absen.to_surah}
                                                    </option>
                                                    {dataSurah.map((surah) => (
                                                        <option
                                                            key={surah.id}
                                                            value={surah.surah}
                                                        >
                                                            {surah.surah}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <input
                                                    type="text"
                                                    onChange={(e) =>
                                                        setFromAyat(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full rounded border border-stroke bg-transparent py-3 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                    value={fromAyat}
                                                />
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <input
                                                    onChange={(e) =>
                                                        setToAyat(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    className="w-full rounded border border-stroke bg-transparent py-3 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                    value={toAyat}
                                                />
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <select
                                                    className="w-full appearance-none rounded border border-stroke bg-transparent py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                                    onChange={(e) =>
                                                        setJuz(e.target.value)
                                                    }
                                                >
                                                    <option value={absen.juz}>
                                                        {absen.juz}
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
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-5 pb-5 w-[40%] mx-auto">
                        <button
                            type="submit"
                            className="rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6 w-[100%] mx-auto"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </form>
        </Layout>
    );
};
export default Edit;
