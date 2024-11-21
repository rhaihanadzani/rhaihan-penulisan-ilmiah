import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../../../public/dashboard/logotasnim.png";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { Link } from "@inertiajs/react";
import {
    BookMarked,
    CalendarCheck2,
    UserRoundCog,
    LayoutDashboard,
    SettingsIcon,
    HandCoins,
    LogOutIcon,
    ChevronUp,
    ChevronsLeft,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = window.location;
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null
            ? false
            : storedSidebarExpanded === "true"
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document
                .querySelector("body")
                ?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-boxdark duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className=" px-6 py-5 lg:py-6 mt-10">
                <Link href="/" className="w-full flex justify-center">
                    <img src={Logo} alt="Logo" width={120} />
                </Link>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden absolute top-5 right-5"
                >
                    <ChevronsLeft className="text-white" />
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                    {/* <!-- Menu Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            MENU
                        </h3>
                    </div>
                    <ul className="mb-6 flex flex-col gap-1.5">
                        {/* <!-- Menu Item Dashboard --> */}
                        <li>
                            <Link
                                href="/dashboard-admin"
                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                    pathname.includes("dashboard") &&
                                    "bg-graydark dark:bg-meta-4"
                                }`}
                            >
                                <LayoutDashboard />
                                Dashboard
                            </Link>
                        </li>
                        {/* <!-- Menu Item Dashboard --> */}

                        {/* <!-- Menu Item User --> */}
                        <SidebarLinkGroup>
                            {(handleClick, open) => {
                                return (
                                    <React.Fragment>
                                        <button
                                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full ${
                                                pathname.includes("user") &&
                                                "bg-graydark dark:bg-meta-4"
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                sidebarExpanded
                                                    ? handleClick()
                                                    : setSidebarExpanded(true);
                                            }}
                                        >
                                            <UserRoundCog />
                                            User
                                            <ChevronUp
                                                className={`absolute right-4 top-1/2 transition-all duration-300 -translate-y-1/2 fill-current ${
                                                    open && "rotate-180"
                                                }`}
                                            />
                                        </button>
                                        {/* <!-- Dropdown Menu Start --> */}
                                        <div
                                            className={`translate transition-all duration-300  transform overflow-hidden ${
                                                !open && "hidden"
                                            }`}
                                        >
                                            <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                <li>
                                                    <Link
                                                        href="/admin/user/ustadz"
                                                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                            pathname ===
                                                                "/admin/user/ustadz" &&
                                                            "bg-graydark dark:bg-meta-4"
                                                        }`}
                                                    >
                                                        Ustadz
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/admin/user/santri"
                                                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                            pathname ===
                                                                "/admin/user/santri" &&
                                                            "bg-graydark dark:bg-meta-4"
                                                        }`}
                                                    >
                                                        Santri
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Dropdown Menu End --> */}
                                    </React.Fragment>
                                );
                            }}
                        </SidebarLinkGroup>
                        {/* <!-- Menu Item User --> */}

                        {/* <!-- Menu Item Absen --> */}
                        <li>
                            <Link
                                href="/absensi"
                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                    pathname.includes("absensi") &&
                                    "bg-graydark dark:bg-meta-4"
                                }`}
                            >
                                <CalendarCheck2 />
                                Absensi
                            </Link>
                        </li>
                        {/* <!-- Menu Item Absen --> */}

                        {/* <!-- Menu Item Report --> */}
                        <li>
                            <Link
                                href="/admin-report"
                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                    pathname.includes("report") &&
                                    "bg-graydark dark:bg-meta-4"
                                }`}
                            >
                                <BookMarked />
                                Laporan Libur
                            </Link>
                        </li>
                        {/* <!-- Menu Item Report --> */}

                        {/* <!-- Menu Item Payment --> */}
                        <SidebarLinkGroup>
                            {(handleClick, open) => {
                                return (
                                    <React.Fragment>
                                        <button
                                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full ${
                                                pathname.includes("payment") &&
                                                "bg-graydark dark:bg-meta-4"
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                sidebarExpanded
                                                    ? handleClick()
                                                    : setSidebarExpanded(true);
                                            }}
                                        >
                                            <UserRoundCog />
                                            Pembayaran
                                            <ChevronUp
                                                className={`absolute -right-2 top-1/2 transition-all duration-300 -translate-y-1/2 fill-current ${
                                                    open && "rotate-180"
                                                }`}
                                            />
                                        </button>
                                        {/* <!-- Dropdown Menu Start --> */}
                                        <div
                                            className={`translate transition-all duration-300  transform overflow-hidden ${
                                                !open && "hidden"
                                            }`}
                                        >
                                            <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                <li>
                                                    <Link
                                                        href="/card-payment"
                                                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                            pathname ===
                                                                "/card-payment" &&
                                                            "bg-graydark dark:bg-meta-4"
                                                        }`}
                                                    >
                                                        Manager
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/admin-santri-payment"
                                                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                            pathname ===
                                                                "/admin-santri-payment" &&
                                                            "bg-graydark dark:bg-meta-4"
                                                        }`}
                                                    >
                                                        Santri
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Dropdown Menu End --> */}
                                    </React.Fragment>
                                );
                            }}
                        </SidebarLinkGroup>
                        {/* <!-- Menu Item Payment --> */}
                    </ul>

                    {/* <!-- Others Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            OTHERS
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            {/* <!-- Menu Item Settings --> */}
                            <li>
                                <Link
                                    href="/settings"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes("settings") &&
                                        "bg-graydark dark:bg-meta-4"
                                    }`}
                                >
                                    <SettingsIcon />
                                    Settings
                                </Link>
                            </li>
                            {/* <!-- Menu Item Settings --> */}

                            {/* logout */}
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full ${
                                        pathname.includes("calendar") &&
                                        "bg-graydark dark:bg-meta-4"
                                    }`}
                                >
                                    <LogOutIcon />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
};

export default Sidebar;
