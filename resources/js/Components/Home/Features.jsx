import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import image from "../../../../public/home/liburan.png";
import image3 from "../../../../public/home/pembayaran.png";
import image4 from "../../../../public/home/absen.png";
import { Badge } from "../ui/badge";

const features = [
    {
        title: "Laporan Absensi Santri",
        description:
            "Fitur ini memungkinkan pengelolaan absensi santri secara digital, memudahkan pengawasan kehadiran santri di pondok pesantren.",
        image: image4,
    },
    {
        title: "Laporan Pembayaran Santri",
        description:
            "Memudahkan pencatatan dan pengelolaan transaksi pembayaran santri, mulai dari biaya pendidikan hingga kebutuhan lainnya.",
        image: image3,
    },
    {
        title: "Laporan Liburan Santri",
        description:
            "Fitur ini memantau jadwal liburan dan kepulangan santri, memastikan manajemen waktu yang efektif selama periode liburan.",
        image: image,
    },
];

const featureList = [
    "Laporan Absensi",
    "Laporan Pembayaran",
    "Laporan Liburan",
    "Pemantauan Kesehatan Santri",
    "Pengelolaan Jadwal Pengajian",
];

export const Features = () => {
    return (
        <section id="features" className="container py-24 sm:py-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                Fitur{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Unggulan
                </span>
            </h2>

            <div className="flex flex-wrap md:justify-center gap-4">
                {featureList.map((feature) => (
                    <div key={feature}>
                        <Badge variant="secondary" className="text-sm">
                            {feature}
                        </Badge>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({ title, description, image }) => (
                    <Card key={title}>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>

                        <CardContent>{description}</CardContent>

                        <CardFooter>
                            <img
                                src={image}
                                alt={title}
                                className="w-[200px] lg:w-[300px] mx-auto"
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
