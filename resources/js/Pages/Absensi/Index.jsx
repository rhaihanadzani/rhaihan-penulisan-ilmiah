import DashboardLayout from "@/Layouts/Dashboard";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

const Index = (props) => {
    const { auth } = usePage().props;
    const [isKelas, setIsKelas] = useState("");
    const [isPelajaran, setIsPelajaran] = useState("");
    const [isError, setIsError] = useState(false);
    // state view
    const [viewKelas, setViewKelas] = useState("");
    const [viewPelajaran, setViewPelajaran] = useState("");
    const [viewBulan, setViewBulan] = useState("");
    const [viewTahun, setViewTahun] = useState("");
    const [isErrorView, setIsErrorView] = useState(false);

    const handleCreateAbsen = (e) => {
        e.preventDefault();
        if (isPelajaran === "" || isKelas === "") {
            setIsError(true);
            return;
        }
        router.visit(`/absen-tasnim/${isPelajaran}/${isKelas}`);
    };

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

    const Layout =
        auth.user.type === "Admin" ? DashboardLayoutAdmin : DashboardLayout;
    return (
        <Layout>
            <div className="flex flex-col md:flex-row items-start gap-5">
                {/* Buat Absensi */}
                <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background w-[95%] md:max-w-[40%] mx-auto p-5 space-y-5">
                    <div className="border-b border-stroke py-2 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Buat Absensi
                        </h3>
                    </div>
                    <form onSubmit={handleCreateAbsen}>
                        <div className="flex gap-5">
                            {/* Pilih mata pelajaran */}
                            <div>
                                <label
                                    htmlFor="pelajaran"
                                    className="mb-3 block text-black dark:text-white"
                                >
                                    Pelajaran
                                </label>
                                <div className="bg-white dark:bg-form-input ">
                                    <select
                                        id="pelajaran"
                                        value={isPelajaran}
                                        onChange={(e) =>
                                            setIsPelajaran(e.target.value)
                                        }
                                        className={` w-full appearance-none rounded border border-stroke bg-transparent py-2   outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                    >
                                        <option value="" disabled>
                                            Pilih Mata Pelajaran
                                        </option>
                                        {props.pelajarans.map((pelajaran) => (
                                            <option
                                                key={pelajaran.uuid}
                                                value={pelajaran.uuid}
                                                className="text-body dark:text-bodydark"
                                            >
                                                {pelajaran.nama}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* Pilih Kelas */}
                            <div>
                                <label
                                    htmlFor="kelas"
                                    className="mb-3 block text-black dark:text-white"
                                >
                                    Kelas
                                </label>
                                <div className="bg-white dark:bg-form-input">
                                    <select
                                        id="kelas"
                                        value={isKelas}
                                        onChange={(e) =>
                                            setIsKelas(e.target.value)
                                        }
                                        className={` w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                    >
                                        <option value="" disabled>
                                            Pilih Kelas
                                        </option>
                                        {props.kelas.map((kelas) => (
                                            <option
                                                key={kelas.uuid}
                                                value={kelas.uuid}
                                                className="text-body dark:text-bodydark"
                                            >
                                                {kelas.nama}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <button
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6"
                                type="submit"
                            >
                                Buat Absen
                            </button>
                        </div>
                        {isError && (
                            <p className="text-red-500 mt-5 capitalize">
                                * Isi semua data
                            </p>
                        )}
                    </form>
                </div>

                {/* Lihat Absensi */}

                <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background w-[95%] md:max-w-[60%] mx-auto p-5 :space-y-5">
                    <div className="border-b border-stroke py-2 dark:border-strokedark">
                        <h3 className="font-medium  text-black dark:text-white">
                            Lihat Absensi
                        </h3>
                    </div>
                    <form onSubmit={handleViewAbsen} className="space-y-5 mt-5">
                        <div className="flex gap-5">
                            <div className="w-1/2">
                                <label
                                    htmlFor="pelajaran"
                                    className="mb-3 block text-black dark:text-white"
                                >
                                    Pelajaran
                                </label>
                                <div className="bg-white dark:bg-form-input">
                                    <select
                                        id="pelajaran"
                                        value={viewPelajaran}
                                        onChange={(e) =>
                                            setViewPelajaran(e.target.value)
                                        }
                                        className={` w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
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
                            <div className="w-1/2">
                                <label
                                    htmlFor="kelas"
                                    className="mb-3 block text-black dark:text-white"
                                >
                                    Kelas
                                </label>
                                <div className="bg-white dark:bg-form-input">
                                    <select
                                        id="kelas"
                                        value={viewKelas}
                                        onChange={(e) =>
                                            setViewKelas(e.target.value)
                                        }
                                        className={` w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                    >
                                        <option value="" disabled>
                                            Pilih Kelas
                                        </option>
                                        {props.kelas.map((kelas) => (
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
                                    htmlFor="kelas"
                                    className="mb-3 block text-black dark:text-white"
                                >
                                    Bulan
                                </label>
                                <div className="bg-white dark:bg-form-input">
                                    <select
                                        id="kelas"
                                        value={viewBulan}
                                        onChange={(e) =>
                                            setViewBulan(e.target.value)
                                        }
                                        className={` w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                    >
                                        <option value="" disabled>
                                            Pilih Bulan
                                        </option>
                                        {props.bulan.map((bulan) => (
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
                                    htmlFor="kelas"
                                    className="mb-3 block text-black dark:text-white"
                                >
                                    Tahun
                                </label>

                                <div className="bg-white dark:bg-form-input">
                                    <select
                                        id="kelas"
                                        value={viewTahun}
                                        onChange={(e) =>
                                            setViewTahun(e.target.value)
                                        }
                                        className={` w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                    >
                                        <option value="" disabled>
                                            Pilih Tahun
                                        </option>
                                        {props.tahun.map((year) => (
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
                        <div className="w-full">
                            <button
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6"
                                type="submit"
                            >
                                Lihat Absen
                            </button>
                        </div>
                        {isErrorView && (
                            <p className="text-red-500 mt-5 capitalize">
                                * Isi semua Kolom
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </Layout>
    );
};
export default Index;
