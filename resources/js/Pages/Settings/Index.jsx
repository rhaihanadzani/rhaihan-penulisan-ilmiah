import DashboardLayout from "@/Layouts/Dashboard";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import LengkapiData from "./Partial/LengkapiData";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import LoadingSetting from "./Partial/LoadingSetting";

const Index = () => {
    const { auth } = usePage().props;

    const [dataUser, setDataUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/settings-view-data").then((res) => {
            res.json().then((data) => {
                setDataUser(data);
                setIsLoading(false);
            });
        });
    }, [isLoading]);

    let Layout;

    if (auth.user.type === "Admin") {
        Layout = DashboardLayoutAdmin;
    } else if (auth.user.type === "Ustadz") {
        Layout = DashboardLayout;
    } else if (auth.user.type === "Users") {
        Layout = DashboardLayoutUser;
    } else {
        Layout = DashboardLayoutUser;
    }

    return (
        <Layout>
            <div>
                {isLoading && dataUser === null ? (
                    <LoadingSetting />
                ) : (
                    <LengkapiData
                        dataUser={dataUser}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                )}
            </div>
        </Layout>
    );
};
export default Index;
