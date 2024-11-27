import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/Components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";

import { AvatarIcon, RocketIcon } from "@radix-ui/react-icons";

import { Menu } from "lucide-react";
import { buttonVariants } from "@/Components/ui/button";
import { ModeToggle } from "@/Components/Home/components/mode-toggle";
import { LogoIcon } from "@/Components/Home/components/icons";
import { Link } from "@inertiajs/react";
import Logo from "../../../../public/dashboard/logotasnim.png";

const routeList = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export const Navbar = ({ auth }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto py-2">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
                    <NavigationMenuItem className="font-bold flex ">
                        <a
                            rel="noreferrer noopener"
                            href="/"
                            className="ml-2 font-bold text-xl flex items-center gap-5 "
                        >
                            <img src={Logo} alt=".." className="w-12 h-12 " />
                            PPTQ TASNIM
                        </a>
                    </NavigationMenuItem>

                    {/* mobile */}
                    <span className="flex md:hidden">
                        <ModeToggle />

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu
                                    className="flex md:hidden h-5 w-5"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <span className="sr-only">Menu Icon</span>
                                </Menu>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">
                                        Shadcn/React
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {routeList.map(({ href, label }) => (
                                        <a
                                            rel="noreferrer noopener"
                                            key={label}
                                            href={href}
                                            onClick={() => setIsOpen(false)}
                                            className={buttonVariants({
                                                variant: "ghost",
                                            })}
                                        >
                                            {label}
                                        </a>
                                    ))}
                                    {!auth.user ? (
                                        <Link
                                            href="/login"
                                            className={`border ${buttonVariants(
                                                {
                                                    variant: "secondary",
                                                }
                                            )}`}
                                        >
                                            <RocketIcon className="mr-2 w-5 h-5" />
                                            Login
                                        </Link>
                                    ) : (
                                        buttonDashboard(auth)
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route, i) => (
                            <a
                                rel="noreferrer noopener"
                                href={route.href}
                                key={i}
                                className={`text-[17px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
                        {!auth.user ? (
                            <Link
                                href="/login"
                                className={`border ${buttonVariants({
                                    variant: "secondary",
                                })}`}
                            >
                                <RocketIcon className="mr-2 w-5 h-5" />
                                Login
                            </Link>
                        ) : (
                            buttonDashboard(auth)
                        )}

                        <ModeToggle />
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};

const buttonDashboard = (auth) => {
    if (auth.user.type === "Admin") {
        return (
            <Link
                href="/dashboard-admin"
                className={`border ${buttonVariants({
                    variant: "secondary",
                })}`}
            >
                <AvatarIcon className="mr-2 w-5 h-5" />
                Admin
            </Link>
        );
    } else if (auth.user.type === "Ustadz") {
        return (
            <Link
                href="/ustadz"
                className={`border ${buttonVariants({
                    variant: "secondary",
                })}`}
            >
                <AvatarIcon className="mr-2 w-5 h-5" />
                Ustadz
            </Link>
        );
    } else if (auth.user.type === "Users") {
        return (
            <Link
                href="/dashboard-user"
                className={`border ${buttonVariants({
                    variant: "secondary",
                })}`}
            >
                <AvatarIcon className="mr-2 w-5 h-5" />
                User
            </Link>
        );
    }
};
