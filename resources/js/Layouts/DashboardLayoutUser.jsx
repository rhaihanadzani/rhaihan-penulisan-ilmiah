import { useState } from "react";
import Header from "./DashboardUser/Header";
import Sidebar from "./DashboardUser/Sidebar";

const DashboardLayoutUser = ({
    children,
    isLoading = true,
    setIsLoading = () => {},
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="dark:bg-background bg-white dark:text-bodydark">
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex h-screen overflow-hidden">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        setSidebarOpen={setSidebarOpen}
                        sidebarOpen={sidebarOpen}
                    />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
    );
};
export default DashboardLayoutUser;
