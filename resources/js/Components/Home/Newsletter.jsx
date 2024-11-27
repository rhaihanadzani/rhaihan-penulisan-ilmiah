import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Terima kasih telah bergabung, email Anda: ${email}`);
    };

    return (
        <section id="newsletter">
            <hr className="w-11/12 mx-auto" />

            <div className="container py-24 sm:py-32">
                <h3 className="text-center text-4xl md:text-5xl font-bold">
                    Bergabunglah dengan{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Pondok Pesantren Tahfidzul Qur'an Tasnim
                    </span>
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Dapatkan informasi seputar kegiatan dan perkembangan Pondok
                    Pesantren Tasnim langsung di inbox Anda.
                </p>

                <form
                    className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="Email Anda"
                        className="bg-muted/50 dark:bg-muted/80 "
                        aria-label="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button>Daftar</Button>
                </form>
            </div>

            <hr className="w-11/12 mx-auto" />
        </section>
    );
};
