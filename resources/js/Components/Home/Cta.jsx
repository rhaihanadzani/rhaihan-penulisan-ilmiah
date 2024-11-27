import { Button } from "../ui/button";

export const Cta = () => {
    return (
        <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
            <div className="container lg:grid lg:grid-cols-2 place-items-center">
                <div className="lg:col-start-1">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                        Bergabunglah dengan
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            {" "}
                            Pondok Pesantren Tahfidzul Qur'an Tasnim
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
                        Pondok Pesantren Tahfidzul Qur'an Tasnim adalah lembaga
                        yang fokus pada pengajaran dan penghafalan Al-Qur'an,
                        dengan menekankan pendidikan karakter, kedisiplinan, dan
                        keterampilan spiritual.
                    </p>
                </div>

                <div className="space-y-4 lg:col-start-2">
                    <Button className="w-full md:mr-4 md:w-auto">
                        Daftar Sekarang
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto">
                        Pelajari Lebih Lanjut
                    </Button>
                </div>
            </div>
        </section>
    );
};
