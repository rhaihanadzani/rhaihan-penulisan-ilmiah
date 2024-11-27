import { LogoIcon } from "@/Components/Home/components/icons";

export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <a
                        rel="noreferrer noopener"
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        <LogoIcon />
                        Pondok Pesantren Tahfidzul Qur'an Tasnim
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow Us</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://www.instagram.com/tasnim.quran/"
                            className="opacity-60 hover:opacity-100"
                        >
                            Instagram
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://twitter.com/TasnimQuran"
                            className="opacity-60 hover:opacity-100"
                        >
                            Twitter
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://www.youtube.com/channel/UCXkTsGhOWdnozHvN2VxYoFg"
                            className="opacity-60 hover:opacity-100"
                        >
                            YouTube
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Platforms</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Web
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Mobile
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Desktop
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Tentang Kami
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Program Pengajaran
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Galeri
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Contact</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="mailto:info@tasnimquran.com"
                            className="opacity-60 hover:opacity-100"
                        >
                            Email
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="tel:+628123456789"
                            className="opacity-60 hover:opacity-100"
                        >
                            Telepon
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Lokasi
                        </a>
                    </div>
                </div>
            </section>

            <section className="container pb-14 text-center">
                <h3>
                    &copy; 2024 Pondok Pesantren Tahfidzul Qur'an Tasnim | Made
                    with ❤️ by{" "}
                    <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.linkedin.com/in/leo-miranda/"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        Adzani
                    </a>
                </h3>
            </section>
        </footer>
    );
};
