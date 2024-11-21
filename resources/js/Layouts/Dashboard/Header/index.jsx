import DropdownUser from "./DropdownUser";
import { ModeToggle } from "@/Components/Home/components/mode-toggle";
import LoadingHeader from "@/Layouts/LoadingHeader";
import { useEffect, useState } from "react";

const Header = ({ sidebarOpen, setSidebarOpen, isLoading, setIsLoading }) => {
    const [dataUser, setDataUser] = useState(null);
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        fetch("/settings-view-data").then((res) => {
            res.json().then((data) => {
                setDataUser(data);
                setIsLoading(false);
                setIsDataLoading(false);
            });
        });
    }, [isDataLoading, isLoading]);
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between sm:justify-end px-4 py-3 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                        >
                            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                        </svg>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}
                </div>

                <div className="flex items-center 2xsm:gap-4 ">
                    <ul className="flex items-center 2xsm:gap-4">
                        {/* <!-- Notification Menu Area --> */}
                        <ModeToggle />
                        {/* <!-- Notification Menu Area --> */}
                    </ul>

                    {/* <!-- User Area --> */}
                    <div className="">
                        {isDataLoading ? (
                            <LoadingHeader />
                        ) : (
                            <DropdownUser dataUser={dataUser} />
                        )}
                    </div>
                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
