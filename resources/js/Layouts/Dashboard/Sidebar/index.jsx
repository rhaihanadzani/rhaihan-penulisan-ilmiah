import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../../../public/dashboard/logotasnim.png";
import { Link } from "@inertiajs/react";
import {
    CalendarCheck2,
    LayoutDashboard,
    SettingsIcon,
    PieChart,
    LogOutIcon,
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
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6 mt-10">
                <Link href="/" className="w-full flex justify-center">
                    <img src={Logo} alt="Logo" />
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
                                href={"/ustadz"}
                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                    pathname.includes("ustadz") &&
                                    "bg-graydark dark:bg-meta-4"
                                }`}
                            >
                                <LayoutDashboard />
                                Dashboard
                            </Link>
                        </li>
                        {/* <!-- Menu Item Dashboard --> */}
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
                    </ul>

                    {/* <!-- Others Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            OTHERS
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            {/* <!-- Menu Item Chart --> */}
                            <li>
                                <Link
                                    href="/chart"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes("chart") &&
                                        "bg-graydark dark:bg-meta-4"
                                    }`}
                                >
                                    <PieChart />
                                    Chart
                                </Link>
                            </li>
                            {/* <!-- Menu Item Chart --> */}

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
                            {/* logout */}
                        </ul>
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
};

export default Sidebar;
