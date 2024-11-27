import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

const testimonials = [
    {
        image: "https://github.com/shadcn.png",
        name: "Ahmad Fadil",
        userName: "@ahmadfadil_tasnim",
        comment:
            "Pondok Pesantren Tasnim memberikan lingkungan yang mendukung untuk menghafal Al-Qur'an dengan metode yang efektif dan mudah dipahami.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Siti Aisyah",
        userName: "@siti_aisyah",
        comment:
            "Saya merasa sangat terbantu dengan pembinaan karakter yang ada di Pondok Pesantren Tasnim, selain pengajaran Al-Qur'an yang mendalam.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Zainul Abidin",
        userName: "@zainul_abidin",
        comment:
            "Sebagai santri di Pondok Pesantren Tasnim, saya merasakan perubahan besar dalam kedisiplinan dan semangat belajar.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Fadhilah Azzahra",
        userName: "@fadhilah_azzahra",
        comment:
            "Metode yang diterapkan di sini sangat membantu saya dalam menghafal Al-Qur'an, dan saya merasa semakin dekat dengan Allah.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Rizki Rahman",
        userName: "@rizki_rahman",
        comment:
            "Pondok Tasnim adalah tempat yang sempurna untuk belajar, tidak hanya menghafal Al-Qur'an, tapi juga membentuk karakter diri.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Mira Yuliana",
        userName: "@mira_yuliana",
        comment:
            "Saya merasa sangat diberkati dapat menuntut ilmu di Pondok Pesantren Tasnim, karena pengajaran yang komprehensif dan penuh kasih.",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold">
                Kenapa Santri{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Mencintai{" "}
                </span>
                Pondok Pesantren Tasnim
            </h2>

            <p className="text-xl text-muted-foreground pt-4 pb-8">
                Pondok Pesantren Tasnim telah menjadi tempat yang penuh berkah
                untuk menuntut ilmu dan menghafal Al-Qur'an dengan metode yang
                efektif.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                {testimonials.map(({ image, name, userName, comment }) => (
                    <Card
                        key={userName}
                        className="max-w-md md:break-inside-avoid overflow-hidden"
                    >
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar>
                                <AvatarImage alt="" src={image} />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <CardTitle className="text-lg">
                                    {name}
                                </CardTitle>
                                <CardDescription>{userName}</CardDescription>
                            </div>
                        </CardHeader>

                        <CardContent>{comment}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
