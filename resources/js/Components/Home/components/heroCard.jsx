import { Button, buttonVariants } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/Components/ui/card";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { Badge } from "@/Components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { LightBulbIcon } from "./icons";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px] ">
            {/* Visi & Misi */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage
                            alt="Logo Pesantren"
                            src="/dashboard/logotasnim.png"
                        />
                        <AvatarFallback>P</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">Visi & Misi</CardTitle>
                        <CardDescription>
                            Pondok Pesantren Tasnim
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    <p>
                        Menjadi lembaga pendidikan unggulan dalam membentuk
                        generasi penghafal Qur'an yang memiliki akhlak mulia,
                        berlandaskan nilai-nilai Islami
                    </p>
                </CardContent>
            </Card>

            {/* Program Unggulan */}
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src="/dashboard/logotasnim.png"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">
                        Program Tahsin & Tahfidz
                    </CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Program unggulan untuk penghafalan Al-Qur'an dan
                        pembinaan akhlak.
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        Pesantren Tahaffuzul Qur'an Tasnim menawarkan program
                        intensif dalam menghafal Al-Qur'an dengan metode yang
                        telah terbukti efektif dan lingkungan yang kondusif
                        untuk belajar.
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#program-tahfidz"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Program Link</span>
                            <BookmarkIcon className="w-5 h-5" />
                        </a>
                    </div>
                </CardFooter>
            </Card>

            {/* Keunggulan Pesantren */}
            <Card className="absolute top-[200px] left-[30px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Keunggulan Pesantren
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
                        >
                            Unggul
                        </Badge>
                    </CardTitle>

                    <CardDescription>
                        Pondok Pesantren Tasnim menyediakan lingkungan yang
                        mendukung untuk pembelajaran intensif dengan pengajaran
                        berbasis Al-Qur'an.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full">Daftar Sekarang</Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />
            </Card>

            {/* Testimoni Santri */}
            <Card className="absolute top w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <LightBulbIcon />
                    </div>
                    <div>
                        <CardTitle>Testimoni Santri</CardTitle>
                        <CardDescription className="text-md mt-2">
                            "Pondok Pesantren Tasnim telah mengubah hidup saya,
                            tidak hanya dalam hal hafalan Qur'an tetapi juga
                            dalam pengembangan pribadi saya sebagai insan yang
                            berakhlak."
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
