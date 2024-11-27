import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import {
    FaChalkboardTeacher,
    FaBookOpen,
    FaUsers,
    FaHandsHelping,
} from "react-icons/fa";

const features = [
    {
        icon: <FaChalkboardTeacher size={40} className="text-primary" />, // Ikon pengajar
        title: "Pengajaran & Pembelajaran",
        description:
            "Santri belajar dari pengajar berkompeten yang mengajarkan berbagai disiplin ilmu, baik agama maupun umum.",
    },
    {
        icon: <FaBookOpen size={40} className="text-primary" />, // Ikon buku
        title: "Pendidikan Qur'an",
        description:
            "Proses penghafalan dan pembelajaran Qur'an dilakukan dengan metode yang efektif dan terstruktur.",
    },
    {
        icon: <FaUsers size={40} className="text-primary" />, // Ikon komunitas
        title: "Komunitas & Keharmonisan",
        description:
            "Membangun hubungan yang harmonis antara sesama santri dan ustadz untuk menciptakan lingkungan belajar yang kondusif.",
    },
    {
        icon: <FaHandsHelping size={40} className="text-primary" />, // Ikon membantu
        title: "Kepedulian Sosial",
        description:
            "Santri dilibatkan dalam berbagai kegiatan sosial sebagai bentuk tanggung jawab terhadap masyarakat.",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                Cara Kami{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Mengajarkan
                </span>
                Langkah Demi Langkah
            </h2>

            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Berikut adalah langkah-langkah yang ada di pondok pesantren
                dalam mendidik dan membina santri.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }) => (
                    <Card key={title} className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
