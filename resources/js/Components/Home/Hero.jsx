import { Button, buttonVariants } from "../ui/button";
import { HeroCards } from "./components/heroCard";
import { BookmarkIcon } from "@radix-ui/react-icons";

export const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 overflow-hidden">
            <div className="text-center lg:text-start space-y-6">
                {/* Judul Hero Section */}
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
                            Pondok Pesantren
                        </span>{" "}
                        Tahaffuzul
                    </h1>{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                            Qur'an Tasnim
                        </span>
                    </h2>
                </main>

                {/* Deskripsi Singkat */}
                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Mencetak generasi penghafal Qur'an dengan metode
                    pembelajaran intensif dan lingkungan yang kondusif,
                    berlandaskan akhlak mulia dan nilai-nilai Islami.
                </p>

                {/* Tombol CTA */}
                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-1/3">Daftar Sekarang</Button>

                    <a
                        href="#tentang-kami"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        Tentang Kami
                        <BookmarkIcon className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Hero Cards Section */}
            <div className="z-10">
                <HeroCards />
            </div>

            {/* Shadow Effect */}
            <div className="shadow"></div>
        </section>
    );
};
