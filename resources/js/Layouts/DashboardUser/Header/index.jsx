import DropdownUser from "./DropdownUser";
import { ModeToggle } from "@/Components/Home/components/mode-toggle";
import LoadingHeader from "@/Layouts/LoadingHeader";
import { MenuIcon } from "lucide-react";
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
        <header className="sticky py-2 top-0 z-999 flex w-full bg-white  drop-shadow-2xl dark:bg-background  dark:shadow-1 dark:shadow-white">
            <div className="flex flex-grow items-center justify-between sm:justify-end px-4 py-3 shadow-2 md:px-6 2xl:px-11">
                <div className="lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-background lg:hidden"
                    >
                        <MenuIcon />
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}
                </div>

                <div className="flex items-center 2xsm:gap-4 ">
                    <ul className="flex items-center 2xsm:gap-4">
                        <ModeToggle />
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
