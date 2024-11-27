import pilot from "../../../../public/home/logo.png"; // Ganti path sesuai lokasi gambar Anda
import { Statistics } from "./components/statistics";

export const About = () => {
    return (
        <section id="about" className="container py-24 sm:py-32 ">
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <div className="flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    Tentang{" "}
                                </span>
                                Pondok Pesantren Tahaffuzul Qur'an Tasnim
                            </h2>
                            <p className="text-sm md:text-xl text-muted-foreground mt-4">
                                Pondok Pesantren Tahaffuzul Qur'an Tasnim adalah
                                lembaga pendidikan Islam yang fokus pada
                                pengajaran dan penghafalan Al-Qur'an dengan
                                metode yang intensif dan berbasis nilai-nilai
                                Islami yang luhur. Kami mengedepankan kualitas
                                dalam pendidikan dan lingkungan yang kondusif
                                untuk mencetak generasi penghafal Qur'an yang
                                siap menghadapi tantangan zaman.
                            </p>
                        </div>

                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
};
